'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { ScholarMode } from '@/types';
import { DoctrineProposal, parseDoctrineProposals } from '@/components/learn/DoctrineProposalParser';
import DoctrineProposalDisplay from '@/components/learn/DoctrineProposalDisplay';
import { processDetectedFileContent } from '@/lib/utils/fileContentDetection';

interface Message {
  id: string;
  type: 'user' | 'system' | 'error';
  content: string;
  timestamp: number;
  options?: Array<{ letter: string; text: string }>;
}

interface ScholarInterfaceProps {
  mode: ScholarMode;
  scholarContent?: string;
  loadedMemFiles?: Array<{ path: string; content: string; lastUsed: number }>;
  civilization?: string | null;
  coreContent?: string | null;
  indexContent?: string | null;
  doctrineContent?: string | null;
  onMemFileUsed?: (filePath: string) => void;
  onAddMessage?: (type: 'user' | 'system' | 'error', content: string) => void;
  onFileContentUpdate?: (filePath: string, content: string) => void;
  isMemFileLocked?: boolean;
  onUnlockRequest?: () => void;
  allFiles?: Array<{ id: number; file_path: string; file_type: string; civilization?: string | null }>;
  onSwitchMemFile?: (filePath: string, fileId: number) => Promise<void>;
  onLoadMemFileToLLM?: (filePath: string, fileId: number) => Promise<void>;
  onUnloadMemFile?: (filePath: string) => void;
  onClearLoadedFiles?: () => void;
}

export default function ScholarInterface({ mode, scholarContent, loadedMemFiles = [], civilization, coreContent, indexContent, doctrineContent, onMemFileUsed, onFileContentUpdate, isMemFileLocked = false, onUnlockRequest, allFiles = [], onSwitchMemFile, onLoadMemFileToLLM, onUnloadMemFile, onClearLoadedFiles }: ScholarInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingMessageId, setProcessingMessageId] = useState<string | null>(null);
  const [doctrineProposals, setDoctrineProposals] = useState<DoctrineProposal[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const prevModeRef = useRef<ScholarMode | null>(null);
  const topicGenerationTriggeredRef = useRef(false);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Focus input when mode changes
  useEffect(() => {
    if (mode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [mode]);

  /**
   * Extract multiple choice options from text
   * Looks for patterns like "a) Option", "b) Option", etc.
   * Also handles variations like "a. Option", "(a) Option", etc.
   */
  const extractOptions = useCallback((text: string): Array<{ letter: string; text: string }> => {
    const options: Array<{ letter: string; text: string }> = [];
    
    // Multiple regex patterns to catch different formats
    const patterns = [
      /^([a-z])\)\s+(.+)$/gmi,           // a) Option
      /^([a-z])\.\s+(.+)$/gmi,           // a. Option
      /^\(([a-z])\)\s+(.+)$/gmi,         // (a) Option
      /^([a-z])\s+-\s+(.+)$/gmi,         // a - Option
      /^Option\s+([a-z]):\s+(.+)$/gmi,   // Option a: Text
    ];
    
    for (const pattern of patterns) {
      let match;
      while ((match = pattern.exec(text)) !== null) {
        const letter = match[1].toLowerCase();
        const text = match[2]?.trim() || match[3]?.trim() || '';
        
        // Avoid duplicates
        if (text && !options.find(opt => opt.letter === letter)) {
          options.push({ letter, text });
        }
      }
    }
    
    // Sort by letter
    return options.sort((a, b) => a.letter.localeCompare(b.letter));
  }, []);

  /**
   * Generate context-aware multiple choice options based on the conversation state
   */
  const generateContextualOptions = useCallback((
    response: string,
    loadedMemFiles: Array<{ path: string; content: string; lastUsed: number }>,
    civilization: string | null,
    mode: ScholarMode,
    isMemFileLocked: boolean
  ): Array<{ letter: string; text: string }> => {
    const options: Array<{ letter: string; text: string }> = [];
    const responseLower = response.toLowerCase();
    
    // Detect audit responses
    const isAuditResponse = responseLower.includes('compliance') || 
                            responseLower.includes('audit') ||
                            responseLower.includes('preflight') ||
                            responseLower.includes('non-compliant') ||
                            responseLower.includes('not compliant') ||
                            responseLower.includes('compliant');
    
    // Detect non-compliance - more comprehensive detection
    const isNonCompliant = responseLower.includes('non-compliant') ||
                           responseLower.includes('not compliant') ||
                           responseLower.includes('non compliant') ||
                           responseLower.includes('failed') ||
                           responseLower.includes('insufficient') ||
                           responseLower.includes('not declared') ||
                           responseLower.includes('not met') ||
                           responseLower.includes('missing') ||
                           (responseLower.includes('compliance status') && responseLower.includes('not')) ||
                           (responseLower.includes('compliance') && (
                             responseLower.includes('✗') ||
                             responseLower.includes('not met') ||
                             responseLower.includes('missing') ||
                             responseLower.includes('insufficient')
                           ));
    
    // Detect pattern detection / synthesis responses (LEARN mode)
    const hasPatterns = responseLower.includes('pattern') ||
                        responseLower.includes('recurring') ||
                        responseLower.includes('synthesis') ||
                        responseLower.includes('extracted');
    
    // Detect contradictions (LEARN mode)
    const hasContradictions = responseLower.includes('contradiction') ||
                             responseLower.includes('scl') ||
                             responseLower.includes('conflict');
    
    // Detect doctrine proposal opportunities (LEARN mode)
    const hasDoctrineOpportunity = responseLower.includes('doctrine') ||
                                   responseLower.includes('proposal') ||
                                   (hasPatterns && loadedMemFiles.length >= 2);
    
    const memFile = loadedMemFiles.length > 0 ? loadedMemFiles[loadedMemFiles.length - 1] : null;
    const memFileName = memFile ? memFile.path.split('/').pop() || memFile.path : null;
    const civName = civilization?.toUpperCase() || 'CIV';
    
    // Mode-specific option generation (OGE - Option Generation Engine)
    if (mode === 'IMAGINE') {
      // IMAGINE Mode: Creative exploration options
      if (memFile) {
        options.push({ letter: 'a', text: `Visualize structural framework through CIV–CORE architecture` });
        options.push({ letter: 'b', text: `Explore historical chronology through SCHOLAR-ingested timeline` });
        options.push({ letter: 'c', text: `Compare with another civilization or regime` });
        options.push({ letter: 'd', text: `Explore contradictions and unresolved tensions (SCL)` });
        options.push({ letter: 'e', text: `Visualize how beliefs or doctrines formed procedurally` });
        options.push({ letter: 'f', text: `Discover new connections and exploration pathways` });
      } else {
        options.push({ letter: 'a', text: 'Load a MEM file to visualize' });
        options.push({ letter: 'b', text: 'Explore CIV–CORE structures' });
        options.push({ letter: 'c', text: 'Discover cross-civilizational comparisons' });
      }
    } else if (mode === 'LEARN') {
      // LEARN Mode: Pattern detection and synthesis options
      if (isAuditResponse && isNonCompliant && memFile) {
        // Non-compliant audit: focus on compliance upgrade
        options.push({ letter: 'a', text: `Upgrade ${memFileName} to compliance` });
        options.push({ letter: 'b', text: `View detailed compliance report for ${memFileName}` });
        options.push({ letter: 'c', text: `Analyze patterns despite non-compliance` });
      } else if (memFile) {
        // Standard LEARN mode options
        if (hasPatterns) {
          options.push({ letter: 'a', text: `Verify pattern across related MEM files` });
          options.push({ letter: 'b', text: `Synthesize patterns from multiple MEM files` });
        } else {
          options.push({ letter: 'a', text: `Detect patterns in ${memFileName}` });
          options.push({ letter: 'b', text: `Load related MEM files for pattern analysis` });
        }
        
        if (hasContradictions) {
          options.push({ letter: 'c', text: `Investigate contradictions (SCL) in detail` });
        } else {
          options.push({ letter: 'c', text: `Analyze ${memFileName} for contradictions` });
        }
        
        if (hasDoctrineOpportunity) {
          options.push({ letter: 'd', text: `Evaluate pattern for doctrine proposal eligibility` });
        } else {
          options.push({ letter: 'd', text: `Synthesize knowledge from ${memFileName}` });
        }
        
        options.push({ letter: 'e', text: `Load and analyze related MEM files` });
        options.push({ letter: 'f', text: `Verify evidence across repository` });
      } else {
        options.push({ letter: 'a', text: 'Load a MEM file to analyze' });
        options.push({ letter: 'b', text: 'List available MEM files' });
        options.push({ letter: 'c', text: 'Explore patterns across multiple files' });
      }
    } else if (mode === 'WRITE') {
      // WRITE Mode: File modification and compliance options
      if (isAuditResponse && isNonCompliant && memFile) {
        // Non-compliant: prioritize compliance upgrade
        options.push({ letter: 'a', text: `Upgrade ${memFileName} to compliance` });
        options.push({ letter: 'b', text: `Add ARC-compliant quotations to ${memFileName}` });
        options.push({ letter: 'c', text: `Add MEM connections to ${memFileName}` });
        options.push({ letter: 'd', text: `Update metadata and version for ${memFileName}` });
      } else if (memFile) {
        // Standard WRITE mode options
        options.push({ letter: 'a', text: `Upgrade ${memFileName} to ARC–${civName} v1.9 compliance` });
        options.push({ letter: 'b', text: `Add MEM connections (≥10 required, ≥2 GEO)` });
        options.push({ letter: 'c', text: `Insert ARC-compliant quotations` });
        options.push({ letter: 'd', text: `Modify structure or sections` });
        options.push({ letter: 'e', text: `Update metadata: version, ARC pinning, wordcount` });
        options.push({ letter: 'f', text: `Align with CIV–MEM–TEMPLATE v1.9 structure` });
      } else {
        options.push({ letter: 'a', text: 'Load a MEM file to modify' });
        options.push({ letter: 'b', text: 'Create a new MEM file' });
        options.push({ letter: 'c', text: 'List available MEM files' });
      }
    }
    
    return options;
  }, []);

  const addMessage = useCallback((type: 'user' | 'system' | 'error', content: string) => {
    // Extract options for system messages (works in any mode, not just IMAGINE)
    const options = type === 'system' ? extractOptions(content) : undefined;
    
    const message: Message = {
      id: `msg-${Date.now()}-${Math.random()}`,
      type,
      content,
      timestamp: Date.now(),
      options,
    };
    setMessages(prev => [...prev, message]);
  }, [extractOptions]);

  // Expose addMessage to parent via window object
  useEffect(() => {
    // Store addMessage function so parent can call it
    (window as any).__scholarAddMessage = addMessage;
    return () => {
      delete (window as any).__scholarAddMessage;
    };
  }, [addMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim() || isProcessing || !mode) {
      return;
    }

    let userInput = input.trim();
    
    // Helper function to find MEM file by query
    const findMemFile = (query: string): { id: number; file_path: string } | null => {
      const memFiles = allFiles.filter(f => 
        f.file_type === 'MEM' &&
        (!civilization || f.civilization === civilization?.toUpperCase())
      );
      
      const matchedFile = memFiles.find(f => {
        const fileName = f.file_path.split('/').pop() || f.file_path;
        return fileName.toLowerCase().includes(query.toLowerCase()) ||
               f.file_path.toLowerCase().includes(query.toLowerCase());
      });
      
      return matchedFile ? { id: matchedFile.id, file_path: matchedFile.file_path } : null;
    };
    
    // Check for "synthesize" command (e.g., "synthesize MEM–ROME–X and MEM–ROME–Y")
    if (onLoadMemFileToLLM && allFiles.length > 0) {
      const synthesizeMatch = userInput.match(/synthesize\s+(.+?)\s+and\s+(.+?)(?:\s|$)/i);
      if (synthesizeMatch) {
        const file1Query = synthesizeMatch[1].trim().replace(/^MEM[–-]?/i, '');
        const file2Query = synthesizeMatch[2].trim().replace(/^MEM[–-]?/i, '');
        
        const file1 = findMemFile(file1Query);
        const file2 = findMemFile(file2Query);
        
        if (!file1) {
          addMessage('error', `MEM file not found: "${file1Query}"`);
          setInput('');
          return;
        }
        if (!file2) {
          addMessage('error', `MEM file not found: "${file2Query}"`);
          setInput('');
          return;
        }
        
        // Show processing indicator immediately
        setIsProcessing(true);
        const processingId = `processing-${Date.now()}`;
        const processingMessage: Message = {
          id: processingId,
          type: 'system',
          content: `Loading ${file1.file_path} and ${file2.file_path}...`,
          timestamp: Date.now(),
        };
        setMessages(prev => [...prev, processingMessage]);
        setProcessingMessageId(processingId);
        
        // Load both files into LLM context
        try {
          await onLoadMemFileToLLM(file1.file_path, file1.id);
          await onLoadMemFileToLLM(file2.file_path, file2.id);
          
          // Remove processing message and show success
          setMessages(prev => {
            const filtered = prev.filter(msg => msg.id !== processingId);
            return [...filtered, {
              id: `success-${Date.now()}`,
              type: 'system',
              content: `Loaded ${file1.file_path} and ${file2.file_path} into LLM context.`,
              timestamp: Date.now(),
            }];
          });
          setProcessingMessageId(null);
          setIsProcessing(false);
          
          // Send synthesis request to LLM
          setInput(`Synthesize the knowledge and patterns from ${file1.file_path} and ${file2.file_path}. Identify common themes, complementary information, and any contradictions or tensions between them.`);
          // Continue to normal submission flow
        } catch (error) {
          // Remove processing message and show error
          setMessages(prev => {
            const filtered = prev.filter(msg => msg.id !== processingId);
            return [...filtered, {
              id: `error-${Date.now()}`,
              type: 'error',
              content: `Failed to load files: ${error instanceof Error ? error.message : 'Unknown error'}`,
              timestamp: Date.now(),
            }];
          });
          setProcessingMessageId(null);
          setIsProcessing(false);
          setInput('');
          return;
        }
      }
    }
    
    // Check for "establish continuity" command (e.g., "establish continuity between MEM–ROME–X and MEM–ROME–Y")
    if (onLoadMemFileToLLM && allFiles.length > 0) {
      const continuityMatch = userInput.match(/establish\s+continuity\s+between\s+(.+?)\s+and\s+(.+?)(?:\s|$)/i);
      if (continuityMatch) {
        const file1Query = continuityMatch[1].trim().replace(/^MEM[–-]?/i, '');
        const file2Query = continuityMatch[2].trim().replace(/^MEM[–-]?/i, '');
        
        const file1 = findMemFile(file1Query);
        const file2 = findMemFile(file2Query);
        
        if (!file1) {
          addMessage('error', `MEM file not found: "${file1Query}"`);
          setInput('');
          return;
        }
        if (!file2) {
          addMessage('error', `MEM file not found: "${file2Query}"`);
          setInput('');
          return;
        }
        
        // Show processing indicator immediately
        setIsProcessing(true);
        const processingId = `processing-${Date.now()}`;
        const processingMessage: Message = {
          id: processingId,
          type: 'system',
          content: `Loading ${file1.file_path} and ${file2.file_path}...`,
          timestamp: Date.now(),
        };
        setMessages(prev => [...prev, processingMessage]);
        setProcessingMessageId(processingId);
        
        // Load both files into LLM context
        try {
          await onLoadMemFileToLLM(file1.file_path, file1.id);
          await onLoadMemFileToLLM(file2.file_path, file2.id);
          
          // Remove processing message and show success
          setMessages(prev => {
            const filtered = prev.filter(msg => msg.id !== processingId);
            return [...filtered, {
              id: `success-${Date.now()}`,
              type: 'system',
              content: `Loaded ${file1.file_path} and ${file2.file_path} into LLM context.`,
              timestamp: Date.now(),
            }];
          });
          setProcessingMessageId(null);
          setIsProcessing(false);
          
          // Send continuity analysis request to LLM
          setInput(`Establish continuity between ${file1.file_path} and ${file2.file_path}. Analyze how these MEM files connect chronologically, thematically, or causally. Identify narrative threads, causal relationships, and any gaps or transitions between them.`);
          // Continue to normal submission flow
        } catch (error) {
          // Remove processing message and show error
          setMessages(prev => {
            const filtered = prev.filter(msg => msg.id !== processingId);
            return [...filtered, {
              id: `error-${Date.now()}`,
              type: 'error',
              content: `Failed to load files: ${error instanceof Error ? error.message : 'Unknown error'}`,
              timestamp: Date.now(),
            }];
          });
          setProcessingMessageId(null);
          setIsProcessing(false);
          setInput('');
          return;
        }
      }
    }
    
    // Check for "show options" command to re-present standard MEM file options
    if (userInput.toLowerCase().match(/^(show|display|list)\s+(options|choices)$/i) && loadedMemFiles.length > 0 && standardMemOptionsRef.current) {
      addMessage('system', standardMemOptionsRef.current);
      setInput('');
      return;
    }
    
    // Check for MEM file commands
    // "open" = display in editor (WRITE mode) or switch context (other modes)
    // "load" = load into LLM context
    if ((onSwitchMemFile || onLoadMemFileToLLM) && allFiles.length > 0) {
      const openMatch = userInput.match(/(?:open|show|switch to)\s+(?:MEM[–-]?)?(.+?)(?:\s|$)/i);
      const loadMatch = userInput.match(/load\s+(?:MEM[–-]?)?(.+?)(?:\s|$)/i);
      
      if (openMatch && onSwitchMemFile) {
        const memQuery = openMatch[1].trim();
        const matchedFile = findMemFile(memQuery);
        
        if (matchedFile) {
          // Show processing indicator immediately
          setIsProcessing(true);
          const processingId = `processing-${Date.now()}`;
          const processingMessage: Message = {
            id: processingId,
            type: 'system',
            content: `Opening ${matchedFile.file_path}...`,
            timestamp: Date.now(),
          };
          setMessages(prev => [...prev, processingMessage]);
          setProcessingMessageId(processingId);
          
          try {
            await onSwitchMemFile(matchedFile.file_path, matchedFile.id);
            
            // Remove processing message and show success
            setMessages(prev => {
              const filtered = prev.filter(msg => msg.id !== processingId);
              return [...filtered, {
                id: `success-${Date.now()}`,
                type: 'system',
                content: mode === 'WRITE' 
                  ? `Opened MEM file in editor: ${matchedFile.file_path}\n\nUse the "Load" button to load it into LLM context, or type "load ${memQuery}" to load it directly.`
                  : `Switched to MEM file: ${matchedFile.file_path}`,
                timestamp: Date.now(),
              }];
            });
            setProcessingMessageId(null);
            setIsProcessing(false);
            setInput('');
            return;
          } catch (error) {
            // Remove processing message and show error
            setMessages(prev => {
              const filtered = prev.filter(msg => msg.id !== processingId);
              return [...filtered, {
                id: `error-${Date.now()}`,
                type: 'error',
                content: `Failed to open MEM file: ${error instanceof Error ? error.message : 'Unknown error'}`,
                timestamp: Date.now(),
              }];
            });
            setProcessingMessageId(null);
            setIsProcessing(false);
            setInput('');
            return;
          }
        } else {
          const memFiles = allFiles.filter(f => 
            f.file_type === 'MEM' &&
            (!civilization || f.civilization === civilization?.toUpperCase())
          );
          addMessage('error', `MEM file not found matching: "${memQuery}"\n\nAvailable MEM files:\n${memFiles.slice(0, 10).map(f => `- ${f.file_path}`).join('\n')}${memFiles.length > 10 ? `\n... and ${memFiles.length - 10} more` : ''}`);
          setInput('');
          return;
        }
      }
      
      if (loadMatch && onLoadMemFileToLLM) {
        const memQuery = loadMatch[1].trim();
        const matchedFile = findMemFile(memQuery);
        
        if (matchedFile) {
          // Show processing indicator immediately
          setIsProcessing(true);
          const processingId = `processing-${Date.now()}`;
          const processingMessage: Message = {
            id: processingId,
            type: 'system',
            content: `Loading ${matchedFile.file_path}...`,
            timestamp: Date.now(),
          };
          setMessages(prev => [...prev, processingMessage]);
          setProcessingMessageId(processingId);
          
          try {
            // In WRITE mode, also display the file in the right panel
            if (mode === 'WRITE' && onSwitchMemFile) {
              await onSwitchMemFile(matchedFile.file_path, matchedFile.id);
            }
            // Load into LLM context
            await onLoadMemFileToLLM(matchedFile.file_path, matchedFile.id);
            
            // Remove processing message and show success
            setMessages(prev => {
              const filtered = prev.filter(msg => msg.id !== processingId);
              return [...filtered, {
                id: `success-${Date.now()}`,
                type: 'system',
                content: `Loaded MEM file into LLM context: ${matchedFile.file_path}`,
                timestamp: Date.now(),
              }];
            });
            setProcessingMessageId(null);
            setIsProcessing(false);
            setInput('');
            return;
          } catch (error) {
            // Remove processing message and show error
            setMessages(prev => {
              const filtered = prev.filter(msg => msg.id !== processingId);
              return [...filtered, {
                id: `error-${Date.now()}`,
                type: 'error',
                content: `Failed to load MEM file: ${error instanceof Error ? error.message : 'Unknown error'}`,
                timestamp: Date.now(),
              }];
            });
            setProcessingMessageId(null);
            setIsProcessing(false);
            setInput('');
            return;
          }
        } else {
          const memFiles = allFiles.filter(f => 
            f.file_type === 'MEM' &&
            (!civilization || f.civilization === civilization?.toUpperCase())
          );
          addMessage('error', `MEM file not found matching: "${memQuery}"\n\nAvailable MEM files:\n${memFiles.slice(0, 10).map(f => `- ${f.file_path}`).join('\n')}${memFiles.length > 10 ? `\n... and ${memFiles.length - 10} more` : ''}`);
          setInput('');
          return;
        }
      }
    }
    
    // Replace "this file" or "this MEM" with the actual loaded MEM file path
    // This allows users to refer to the file displayed in the right panel naturally
    if (loadedMemFiles.length > 0) {
      const loadedMemFile = loadedMemFiles[0]; // Get the first (and only) loaded MEM file
      const filePath = loadedMemFile.path;
      
      // Replace various forms of "this file" or "this MEM" with the actual file path
      // Use case-insensitive regex with word boundaries to avoid partial matches
      // Order matters: longer phrases first to avoid partial replacements
      userInput = userInput
        .replace(/\bthis mem file\b/gi, filePath)
        .replace(/\bthe mem file\b/gi, filePath)
        .replace(/\bthis MEM\b/gi, filePath)
        .replace(/\bthis mem\b/gi, filePath)
        .replace(/\bthe MEM\b/gi, filePath)
        .replace(/\bthe mem\b/gi, filePath)
        .replace(/\bthis file\b/gi, filePath)
        .replace(/\bthe file\b/gi, filePath);
    }
    
    // If user typed a single letter, find the corresponding option (works in any mode)
    if (messages.length > 0 && /^[a-z]$/i.test(userInput)) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.type === 'system' && lastMessage.options) {
        const option = lastMessage.options.find(opt => opt.letter.toLowerCase() === userInput.toLowerCase());
        if (option) {
          // Handle MEM file loaded options
          if (option.text.toLowerCase().includes('audit arc') && civilization) {
            const memFile = loadedMemFiles[loadedMemFiles.length - 1];
            if (memFile) {
              setInput(`audit ${memFile.path}`);
              return; // Will be processed by normal flow
            }
          }
          if (option.text.toLowerCase().includes('audit mem') || option.text.toLowerCase().includes('audit mem-template')) {
            const memFile = loadedMemFiles[loadedMemFiles.length - 1];
            if (memFile) {
              setInput(`check compliance for ${memFile.path}`);
              return; // Will be processed by normal flow
            }
          }
          if (option.text.toLowerCase().includes('analyze content')) {
            const memFile = loadedMemFiles[loadedMemFiles.length - 1];
            if (memFile) {
              setInput(`Analyze the content and structure of ${memFile.path}. Identify key themes, structural elements, and analytical sections.`);
              return; // Will be processed by normal flow
            }
          }
          if (option.text.toLowerCase().includes('find connections')) {
            const memFile = loadedMemFiles[loadedMemFiles.length - 1];
            if (memFile) {
              setInput(`find connections for ${memFile.path}`);
              return; // Will be processed by normal flow
            }
          }
          if (option.text.toLowerCase().includes('compare')) {
            const memFile = loadedMemFiles[loadedMemFiles.length - 1];
            if (memFile) {
              setInput(`Find related MEM files and compare ${memFile.path} with them. Identify similarities, differences, and relationships.`);
              return; // Will be processed by normal flow
            }
          }
          if (option.text.toLowerCase().includes('extract key themes')) {
            const memFile = loadedMemFiles[loadedMemFiles.length - 1];
            if (memFile) {
              setInput(`Extract key themes and patterns from ${memFile.path}. Identify recurring concepts, structural patterns, and analytical insights.`);
              return; // Will be processed by normal flow
            }
          }
          if ((option.text.toLowerCase().includes('upgrade') && option.text.toLowerCase().includes('compliance')) ||
              option.text.toLowerCase().includes('upgrade file to compliance') || 
              option.text.toLowerCase().includes('upgrade to compliance')) {
            const memFile = loadedMemFiles[loadedMemFiles.length - 1];
            if (memFile) {
              // If not in WRITE mode, switch to WRITE mode first
              if (mode !== 'WRITE') {
                window.dispatchEvent(new CustomEvent('switchMode', { detail: { mode: 'WRITE' } }));
                addMessage('system', 'Switching to WRITE mode to upgrade file to compliance...');
                // Wait a moment for mode switch, then set the upgrade command
                setTimeout(() => {
                  setInput(`Upgrade ${memFile.path} to full compliance with ARC–${civilization?.toUpperCase() || 'CIV'} and MEM–TEMPLATE. Add all required elements including ARC version pinning, quotations (ANCIENT ≥3/≥75 words, EARLY_MODERN ≥2/≥25 words each, MODERN ≥2), MEM connections (≥10 same-civilization, ≥2 GEO MEM), and structural components.`);
                }, 100);
              } else {
                setInput(`Upgrade ${memFile.path} to full compliance with ARC–${civilization?.toUpperCase() || 'CIV'} and MEM–TEMPLATE. Add all required elements including ARC version pinning, quotations (ANCIENT ≥3/≥75 words, EARLY_MODERN ≥2/≥25 words each, MODERN ≥2), MEM connections (≥10 same-civilization, ≥2 GEO MEM), and structural components.`);
              }
              return; // Will be processed by normal flow
            }
          }
          if (option.text.toLowerCase().includes('view detailed compliance report')) {
            const memFile = loadedMemFiles[loadedMemFiles.length - 1];
            if (memFile) {
              setInput(`Show a detailed compliance report for ${memFile.path}, including all requirements, what's missing, and what's present.`);
              return; // Will be processed by normal flow
            }
          }
          
          // Handle special option "a" - switch to WRITE mode
          if (option.letter.toLowerCase() === 'a' && option.text.toLowerCase().includes('switch to write mode')) {
            // Trigger mode switch via custom event
            window.dispatchEvent(new CustomEvent('switchMode', { detail: { mode: 'WRITE' } }));
            addMessage('system', 'Switching to WRITE mode to upgrade file to compliance...');
            setInput('');
            return;
          }
          // Handle special option "a" - push to GitHub
          if (option.letter.toLowerCase() === 'a' && option.text.toLowerCase().includes('push') && option.text.toLowerCase().includes('github')) {
            // Trigger push to GitHub via custom event
            window.dispatchEvent(new CustomEvent('pushToGitHub', { detail: { action: 'push' } }));
            addMessage('system', 'Pushing updated file to GitHub...');
            setInput('');
            return;
          }
          // Handle special option "a" - unlock file
          if (option.letter.toLowerCase() === 'a' && option.text.toLowerCase().includes('unlock')) {
            const pendingUnlock = (window as any).__pendingUnlock;
            if (pendingUnlock && onUnlockRequest) {
              onUnlockRequest();
              delete (window as any).__pendingUnlock;
              addMessage('system', '✅ File unlocked. The LLM can now implement your changes.');
            } else {
              addMessage('system', 'Please unlock the file manually using the 🔓 Unlock button in the right panel.');
            }
            setInput('');
            return;
          }
          // Handle special option "b" - view diff
          if (option.letter.toLowerCase() === 'b' && option.text.toLowerCase().includes('view') && option.text.toLowerCase().includes('diff')) {
            // Trigger diff view via custom event
            window.dispatchEvent(new CustomEvent('viewDiff', { detail: { action: 'viewDiff' } }));
            addMessage('system', 'Viewing file diff...');
            setInput('');
            return;
          }
          // Use the full option text as the input
          userInput = option.text;
        }
      }
    }
    
    setInput('');
    addMessage('user', userInput);
    setIsProcessing(true);
    
    // In WRITE mode, check if user is requesting modification of a file that's open but not loaded
    if (mode === 'WRITE' && onLoadMemFileToLLM && onSwitchMemFile) {
      const modificationKeywords = ['update', 'modify', 'change', 'edit', 'upgrade', 'add', 'insert', 'remove', 'compliance', 'compliant'];
      const isModificationRequest = modificationKeywords.some(kw => userInput.toLowerCase().includes(kw));
      
      if (isModificationRequest) {
        // Try to extract file name from request
        const fileMatch = userInput.match(/MEM[–-]?([A-Z]+[–-]?[A-Z0-9]*)/i);
        if (fileMatch) {
          const fileQuery = fileMatch[1].trim();
          const matchedFile = findMemFile(fileQuery);
          
          if (matchedFile) {
            // Check if file is already loaded
            const isAlreadyLoaded = loadedMemFiles.some(f => f.path === matchedFile.file_path);
            
            if (!isAlreadyLoaded) {
              // Auto-load the file before processing modification request
              try {
                await onLoadMemFileToLLM(matchedFile.file_path, matchedFile.id);
                addMessage('system', `Auto-loaded ${matchedFile.file_path} into LLM context for modification.`);
              } catch (error) {
                addMessage('error', `Failed to auto-load file: ${error instanceof Error ? error.message : 'Unknown error'}`);
                setIsProcessing(false);
                return;
              }
            }
          }
        }
      }
    }
    
    // Create a temporary processing message with blinking dots
    const processingId = `processing-${Date.now()}`;
    const processingMessage: Message = {
      id: processingId,
      type: 'system',
      content: mode === 'WRITE' ? 'Generating content' : mode === 'LEARN' ? 'Analyzing and learning' : 'Processing',
      timestamp: Date.now(),
    };
    setMessages(prev => [...prev, processingMessage]);
    setProcessingMessageId(processingId);

    try {
      // Build conversation history for context (reduced to last 5 messages to save tokens)
      // Only include user messages and recent system responses (skip very old system messages)
      const conversationHistory = messages
        .filter(msg => {
          // Always include user messages
          if (msg.type === 'user') return true;
          // Only include recent system messages (last 3 system messages)
          if (msg.type === 'system') {
            const systemMessages = messages.filter(m => m.type === 'system');
            const recentSystemCount = 3;
            const systemIndex = systemMessages.findIndex(m => m.id === msg.id);
            return systemIndex >= systemMessages.length - recentSystemCount;
          }
          return false;
        })
        .slice(-5) // Only last 5 messages total
        .map(msg => ({
          role: msg.type === 'user' ? 'user' as const : 'assistant' as const,
          content: msg.content,
        }));

      // Call LLM API with SCHOLAR context and CIV–CORE reference
      const response = await fetch('/api/scholar/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userInput,
          mode,
          scholarContent,
          loadedMemFiles: loadedMemFiles.map(f => ({ path: f.path, content: f.content })),
          civilization: civilization || undefined,
          coreContent: coreContent || undefined,
          indexContent: indexContent || undefined,
          doctrineContent: doctrineContent || undefined,
          conversationHistory: conversationHistory.slice(-10), // Last 10 messages for context
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        // Remove the processing message and add the actual response
        setMessages(prev => {
          const filtered = prev.filter(msg => msg.id !== processingId);
          
          // Extract options from LLM response (if any)
          const llmOptions = extractOptions(data.response);
          
          // Generate context-aware options based on the response and current state
          const contextualOptions = generateContextualOptions(
            data.response,
            loadedMemFiles,
            civilization || null,
            mode,
            isMemFileLocked
          );
          
          // Use contextual options (they're context-aware and always relevant)
          // If LLM provided options, merge them (prioritize LLM options for letters that match)
          const finalOptions: Array<{ letter: string; text: string }> = [];
          const usedLetters = new Set<string>();
          
          // First, add LLM options
          llmOptions.forEach(opt => {
            finalOptions.push(opt);
            usedLetters.add(opt.letter);
          });
          
          // Then, add contextual options that don't conflict
          contextualOptions.forEach(opt => {
            if (!usedLetters.has(opt.letter)) {
              finalOptions.push(opt);
              usedLetters.add(opt.letter);
            }
          });
          
          // Sort by letter
          finalOptions.sort((a, b) => a.letter.localeCompare(b.letter));
          
          // Format options text for display
          const optionsText = finalOptions.length > 0
            ? `\n\nOptions:\n${finalOptions.map(opt => `${opt.letter}) ${opt.text}`).join('\n')}`
            : '';
          
          const newMessages = [{
            id: `msg-${Date.now()}-${Math.random()}`,
            type: 'system' as const,
            content: data.response + optionsText,
            timestamp: Date.now(),
            options: finalOptions.length > 0 ? finalOptions : undefined,
          }];
          
          return [...filtered, ...newMessages];
        });
        setProcessingMessageId(null);
        
        // In WRITE mode, detect and extract MEM file content from LLM response
        if (mode === 'WRITE' && onFileContentUpdate) {
          processDetectedFileContent({
            response: data.response,
            loadedFiles: loadedMemFiles,
            isFileLocked: isMemFileLocked,
            onFileContentUpdate,
            onError: (message) => addMessage('error', message),
            onUnlockRequest: onUnlockRequest,
            onShowUnlockMessage: (message, onUnlock) => {
              // Show message with unlock option (options are extracted from message text automatically)
              const unlockMessage = message + '\n\nOptions:\n\na) Yes, unlock the file now\nb) No, I will unlock it manually';
              addMessage('system', unlockMessage);
              // Store unlock handler for when option is selected
              if (onUnlockRequest) {
                (window as any).__pendingUnlock = onUnlock;
              }
            },
          });
        }
        
        // Parse doctrine proposals if in LEARN mode
        if (mode === 'LEARN') {
          const proposals = parseDoctrineProposals(data.response);
          if (proposals.length > 0) {
            // Add new proposals to state (avoid duplicates)
            setDoctrineProposals(prev => {
              const existingIds = new Set(prev.map(p => p.id));
              const newProposals = proposals.filter(p => !existingIds.has(p.id));
              return [...prev, ...newProposals];
            });
          }
        }
        
        // Update lastUsed timestamp for all loaded MEM files (they were used in this conversation)
        if (onMemFileUsed && loadedMemFiles.length > 0) {
          loadedMemFiles.forEach(memFile => {
            onMemFileUsed(memFile.path);
          });
        }
      } else {
        // Remove processing message and show error
        setMessages(prev => {
          const filtered = prev.filter(msg => msg.id !== processingId);
          return [...filtered, {
            id: `msg-${Date.now()}-${Math.random()}`,
            type: 'error' as const,
            content: `Error: ${data.error || 'Failed to get response'}`,
            timestamp: Date.now(),
          }];
        });
        setProcessingMessageId(null);
      }
    } catch (error) {
      // Remove processing message and show error
      setMessages(prev => {
        const filtered = prev.filter(msg => msg.id !== processingId);
        return [...filtered, {
          id: `msg-${Date.now()}-${Math.random()}`,
          type: 'error' as const,
          content: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
          timestamp: Date.now(),
        }];
      });
      setProcessingMessageId(null);
    } finally {
      setIsProcessing(false);
      inputRef.current?.focus();
    }
  };

  // Detect mode switch to IMAGINE mode
  useEffect(() => {
    const switchedToImagine = prevModeRef.current !== 'IMAGINE' && mode === 'IMAGINE';
    prevModeRef.current = mode;
    
    if (switchedToImagine) {
      topicGenerationTriggeredRef.current = false;
    }
  }, [mode]);

  // Track last loaded MEM file to detect new loads
  const lastLoadedMemFileRef = useRef<string | null>(null);
  // Store the standard MEM file options so we can re-present them
  const standardMemOptionsRef = useRef<string | null>(null);
  
  // Auto-present multiple choice options when a new MEM file is loaded
  useEffect(() => {
    if (loadedMemFiles.length > 0 && civilization && !isProcessing) {
      const currentLoadedFile = loadedMemFiles[loadedMemFiles.length - 1].path;
      
      // Check if this is a new file (different from last tracked)
      if (currentLoadedFile !== lastLoadedMemFileRef.current) {
        lastLoadedMemFileRef.current = currentLoadedFile;
        
        // Extract MEM file name for display
        const memFileName = currentLoadedFile.split('/').pop() || currentLoadedFile;
        const civName = civilization.toUpperCase();
        
        // Create and store mode-specific standard options message
        let optionsMessage = `MEM file loaded: ${memFileName}\n\n`;
        
        if (mode === 'IMAGINE') {
          optionsMessage += `What would you like to explore?\n\na) Visualize structural framework through CIV–CORE\nb) Explore historical chronology\nc) Compare with another civilization\nd) Explore contradictions and tensions\ne) Visualize procedural formation\nf) Discover new connections`;
        } else if (mode === 'LEARN') {
          optionsMessage += `What would you like to analyze?\n\na) Detect patterns in ${memFileName}\nb) Load related MEM files for analysis\nc) Investigate contradictions (SCL)\nd) Synthesize knowledge\ne) Verify evidence across repository\nf) Evaluate for doctrine proposal`;
        } else if (mode === 'WRITE') {
          optionsMessage += `What would you like to do?\n\na) Upgrade to ARC–${civName} compliance\nb) Add MEM connections\nc) Insert ARC-compliant quotations\nd) Modify structure or sections\ne) Update metadata\nf) Align with template`;
        } else {
          // Fallback (shouldn't happen)
          optionsMessage += `What would you like to do?\n\na) Audit ARC–${civName} compliance\nb) Audit MEM–TEMPLATE compliance\nc) Analyze content and structure\nd) Find connections to other MEM files`;
        }
        
        standardMemOptionsRef.current = optionsMessage;
        
        addMessage('system', optionsMessage);
      }
    } else if (loadedMemFiles.length === 0) {
      // Reset when no files are loaded
      lastLoadedMemFileRef.current = null;
      standardMemOptionsRef.current = null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadedMemFiles.length, loadedMemFiles.length > 0 ? loadedMemFiles[loadedMemFiles.length - 1]?.path : null, civilization, isProcessing]);

  // Auto-generate visualization topics when switching to IMAGINE mode with loaded MEM files
  useEffect(() => {
    if (
      mode === 'IMAGINE' && 
      loadedMemFiles.length > 0 && 
      !topicGenerationTriggeredRef.current && 
      messages.length === 0 && 
      !isProcessing
    ) {
      topicGenerationTriggeredRef.current = true;
      
      // Generate 4 visualization/exploration topics based on loaded MEM files
      const initialMessage = 'Based on the loaded MEM files, generate exactly 4 distinct visualization/exploration topics. Each topic should be engaging, immersive, and suitable for creative exploration. Present them as multiple choice options with the format: a) First topic title, b) Second topic title, c) Third topic title, d) Fourth topic title. Topics should be inspired by the loaded MEM files but can extend beyond them to discover new connections.';
      setInput(initialMessage);
      
      // Auto-submit after a brief delay
      const timer = setTimeout(() => {
        const form = inputRef.current?.closest('form');
        if (form && inputRef.current?.value === initialMessage) {
          const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
          form.dispatchEvent(submitEvent);
        }
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [mode, loadedMemFiles.length, messages.length, isProcessing]);

  // Auto-start visualization in IMAGINE mode when SCHOLAR file is loaded (fallback if no MEM files)
  useEffect(() => {
    if (
      mode === 'IMAGINE' && 
      scholarContent && 
      loadedMemFiles.length === 0 &&
      messages.length === 0 && 
      !isProcessing &&
      !topicGenerationTriggeredRef.current
    ) {
      // Auto-start with an initial presentation request
      const initialMessage = 'Begin an engaging, immersive presentation about the content in the loaded SCHOLAR file. Start with an overview and then offer multiple choice options (a, b, c, etc.) for how to proceed.';
      setInput(initialMessage);
      // Auto-submit after a brief delay
      const timer = setTimeout(() => {
        const form = inputRef.current?.closest('form');
        if (form && inputRef.current?.value === initialMessage) {
          const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
          form.dispatchEvent(submitEvent);
        }
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [mode, scholarContent, loadedMemFiles.length, messages.length, isProcessing]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        // In IMAGINE mode, allow quick selection of options by typing single letters
        if (mode === 'IMAGINE' && messages.length > 0 && !e.shiftKey) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.type === 'system' && lastMessage.options && lastMessage.options.length > 0) {
        const key = e.key.toLowerCase();
        const option = lastMessage.options.find(opt => opt.letter === key);
        
        // If input is empty or just the letter, and user types a valid option letter
        if (option && /^[a-z]$/.test(key) && (input.trim() === '' || input.trim() === key)) {
          e.preventDefault();
          // Set input to the letter and submit
          setInput(key);
          setTimeout(() => {
            const form = e.currentTarget.closest('form');
            if (form) {
              const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
              form.dispatchEvent(submitEvent);
            }
          }, 10);
          return;
        }
      }
    }
    
    // Enter to submit (Shift+Enter for new line)
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const clearMessages = () => {
    setMessages([]);
  };

  if (!mode) {
    return (
      <div className="bg-white rounded-lg shadow p-6 border-2 border-gray-200">
        <p className="text-gray-500 text-center">
          Select a mode (IMAGINE, LEARN, or WRITE) to begin interaction.
        </p>
      </div>
    );
  }

  const getModeColor = (mode: ScholarMode) => {
    switch (mode) {
      case 'IMAGINE':
        return 'border-blue-300 bg-blue-50';
      case 'LEARN':
        return 'border-green-300 bg-green-50';
      case 'WRITE':
        return 'border-purple-300 bg-purple-50';
      default:
        return 'border-gray-300 bg-gray-50';
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow border-2 ${getModeColor(mode)} flex flex-col h-full`}>
      {/* Messages Output - Scrollable */}
      <div className="flex-1 overflow-y-auto p-3 bg-white space-y-3 min-h-0">
        {messages.length > 0 && (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-3xl rounded-lg p-3 ${
                  message.type === 'user'
                    ? 'bg-blue-600 text-white'
                    : message.type === 'error'
                    ? 'bg-red-100 text-red-800 border border-red-300'
                    : mode === 'IMAGINE'
                    ? 'bg-blue-50 text-gray-900 border-2 border-blue-200'
                    : 'bg-gray-100 text-gray-900 border border-gray-200'
                }`}
              >
                <div className="text-xs opacity-75 mb-1">
                  {message.type === 'user' ? 'You' : message.type === 'error' ? 'Error' : mode === 'IMAGINE' ? '✨ Visualization' : 'System'}
                  {' • '}
                  {new Date(message.timestamp).toLocaleTimeString()}
                </div>
                <div className="whitespace-pre-wrap text-sm leading-relaxed">
                  {message.id === processingMessageId ? (
                    <div className="flex items-center gap-2">
                      <span>{message.content}</span>
                      <div className="flex space-x-1">
                        <span className="animate-bounce" style={{ animationDelay: '0ms' }}>●</span>
                        <span className="animate-bounce" style={{ animationDelay: '150ms' }}>●</span>
                        <span className="animate-bounce" style={{ animationDelay: '300ms' }}>●</span>
                      </div>
                    </div>
                  ) : (
                    message.content
                  )}
                </div>
                
                {/* Multiple Choice Options - Display for all modes */}
                {message.options && message.options.length > 0 && (
                  <div className={`mt-4 pt-3 border-t-2 rounded p-3 ${
                    mode === 'IMAGINE' 
                      ? 'border-blue-300 bg-blue-50' 
                      : mode === 'WRITE'
                      ? 'border-purple-300 bg-purple-50'
                      : 'border-green-300 bg-green-50'
                  }`}>
                    <p className={`text-sm font-semibold mb-1 ${
                      mode === 'IMAGINE'
                        ? 'text-blue-900'
                        : mode === 'WRITE'
                        ? 'text-purple-900'
                        : 'text-green-900'
                    }`}>
                      Select an option:
                    </p>
                    <p className={`text-xs ${
                      mode === 'IMAGINE'
                        ? 'text-blue-800'
                        : mode === 'WRITE'
                        ? 'text-purple-800'
                        : 'text-green-800'
                    }`}>
                      Type a letter (<strong>a</strong>, <strong>b</strong>, <strong>c</strong>, etc.) in the input box below, or enter your own question.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
              {isProcessing && !processingMessageId && (
                <div className="flex justify-start">
                  <div className="bg-blue-50 text-blue-700 rounded-lg p-3 border-2 border-blue-300 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                      <span className="text-sm font-semibold">
                        {mode === 'WRITE' ? 'Generating content...' : mode === 'LEARN' ? 'Analyzing and learning...' : 'Processing...'}
                      </span>
                    </div>
                  </div>
                </div>
              )}
        <div ref={messagesEndRef} />
      </div>

      {/* Doctrine Proposals (LEARN Mode Only) */}
      {mode === 'LEARN' && doctrineProposals.length > 0 && (
        <div className="px-3 pb-3 flex-shrink-0">
          <DoctrineProposalDisplay
            proposals={doctrineProposals}
            civilization={civilization}
            onApprove={async (proposal) => {
              try {
                // TODO: Create API endpoint to approve doctrine proposal
                // For now, just remove from display
                setDoctrineProposals(prev => prev.filter(p => p.id !== proposal.id));
                addMessage('system', `✓ Doctrine proposal "${proposal.proposedName}" approved. Manual update to CIV–DOCTRINE required.`);
              } catch (error) {
                addMessage('error', `Failed to approve proposal: ${error instanceof Error ? error.message : 'Unknown error'}`);
              }
            }}
            onReject={(proposal) => {
              setDoctrineProposals(prev => prev.filter(p => p.id !== proposal.id));
              addMessage('system', `✗ Doctrine proposal "${proposal.proposedName}" rejected.`);
            }}
          />
        </div>
      )}

      {/* Input Area - Fixed at bottom */}
      <div className="p-3 border-t border-gray-200 flex-shrink-0">
        <form onSubmit={handleSubmit} className="space-y-2">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={
              mode === 'IMAGINE' 
                ? 'Type a letter (a, b, c...) to select an option, or enter your question...'
                : `Enter your ${mode.toLowerCase()} request...`
            }
            disabled={isProcessing}
            rows={2}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed resize-none"
          />
          <div className="flex items-center justify-end gap-2">
            {messages.length > 0 && (
              <button
                type="button"
                onClick={clearMessages}
                className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Clear
              </button>
            )}
            <button
              type="submit"
              disabled={!input.trim() || isProcessing}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isProcessing ? 'Processing...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

