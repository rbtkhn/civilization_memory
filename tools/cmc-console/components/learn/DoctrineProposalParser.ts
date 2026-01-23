/**
 * Parser for extracting doctrine proposals from LEARN mode responses
 */

export interface DoctrineProposal {
  id: string;
  type: 'NEW' | 'MODIFICATION';
  existingDoctrineName?: string;
  existingDoctrineNumber?: string;
  proposedName: string;
  sourceSynthesis?: string;
  rationale: string;
  definition: string;
  operationalMeaning: string[];
  hardConstraints: string[];
  evidenceBase: string[];
  rawText: string;
  timestamp: number;
}

const PROPOSAL_START_MARKER = '═══════════════════════════════════════════════════════════════════\nPROPOSED DOCTRINE';
const PROPOSAL_END_MARKER = '═══════════════════════════════════════════════════════════════════\nEND PROPOSED DOCTRINE';

export function parseDoctrineProposals(content: string): DoctrineProposal[] {
  const proposals: DoctrineProposal[] = [];
  
  // Find all proposal blocks
  let startIndex = 0;
  while (true) {
    const proposalStart = content.indexOf(PROPOSAL_START_MARKER, startIndex);
    if (proposalStart === -1) break;
    
    const proposalEnd = content.indexOf(PROPOSAL_END_MARKER, proposalStart);
    if (proposalEnd === -1) break; // Malformed proposal, skip
    
    const proposalText = content.substring(proposalStart, proposalEnd + PROPOSAL_END_MARKER.length);
    
    try {
      const proposal = parseSingleProposal(proposalText, proposalStart);
      if (proposal) {
        proposals.push(proposal);
      }
    } catch (error) {
      console.error('Error parsing doctrine proposal:', error);
    }
    
    startIndex = proposalEnd + PROPOSAL_END_MARKER.length;
  }
  
  return proposals;
}

function parseSingleProposal(text: string, offset: number): DoctrineProposal | null {
  const lines = text.split('\n');
  
  let type: 'NEW' | 'MODIFICATION' = 'NEW';
  let existingDoctrineName: string | undefined;
  let existingDoctrineNumber: string | undefined;
  let proposedName = '';
  let sourceSynthesis: string | undefined;
  let rationale = '';
  let definition = '';
  const operationalMeaning: string[] = [];
  const hardConstraints: string[] = [];
  const evidenceBase: string[] = [];
  
  let currentSection: 'header' | 'definition' | 'operational' | 'constraints' | 'evidence' | null = 'header';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.includes('Proposal Type:')) {
      const match = line.match(/Proposal Type:\s*\[(NEW|MODIFICATION)\]/i);
      if (match) type = match[1].toUpperCase() as 'NEW' | 'MODIFICATION';
    } else if (line.includes('Existing Doctrine Name:')) {
      const match = line.match(/Existing Doctrine Name:\s*(.+)/i);
      if (match) existingDoctrineName = match[1].trim();
    } else if (line.includes('Existing Doctrine Number:')) {
      const match = line.match(/Existing Doctrine Number:\s*(.+)/i);
      if (match) existingDoctrineNumber = match[1].trim();
    } else if (line.includes('Proposed Name:')) {
      const match = line.match(/Proposed Name:\s*(.+)/i);
      if (match) proposedName = match[1].trim();
    } else if (line.includes('Source Synthesis:')) {
      const match = line.match(/Source Synthesis:\s*(.+)/i);
      if (match) sourceSynthesis = match[1].trim();
    } else if (line.includes('Rationale:')) {
      const match = line.match(/Rationale:\s*(.+)/i);
      if (match) rationale = match[1].trim();
    } else if (line === 'Definition:') {
      currentSection = 'definition';
    } else if (line === 'Operational Meaning:') {
      currentSection = 'operational';
    } else if (line === 'Hard Constraints:') {
      currentSection = 'constraints';
    } else if (line === 'Evidence Base:') {
      currentSection = 'evidence';
    } else if (line.startsWith('•') || line.startsWith('-')) {
      const content = line.substring(1).trim();
      if (currentSection === 'operational') {
        operationalMeaning.push(content);
      } else if (currentSection === 'constraints') {
        hardConstraints.push(content);
      } else if (currentSection === 'evidence') {
        evidenceBase.push(content);
      }
    } else if (currentSection === 'definition' && line && !line.includes('═══')) {
      if (definition) definition += '\n';
      definition += line;
    } else if (currentSection === 'header' && line && !line.includes('═══') && !line.includes('PROPOSED DOCTRINE')) {
      // Collect rationale if it spans multiple lines
      if (line.includes('Rationale:') || rationale) {
        if (rationale && !line.includes('Rationale:')) {
          rationale += ' ' + line;
        } else if (!rationale && line.includes('Rationale:')) {
          rationale = line.replace(/Rationale:\s*/i, '').trim();
        }
      }
    }
  }
  
  if (!proposedName || !definition) {
    return null; // Invalid proposal
  }
  
  // Generate unique ID
  const id = `proposal-${offset}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  
  return {
    id,
    type,
    existingDoctrineName,
    existingDoctrineNumber,
    proposedName,
    sourceSynthesis,
    rationale: rationale || 'No rationale provided',
    definition: definition.trim(),
    operationalMeaning,
    hardConstraints,
    evidenceBase,
    rawText: text,
    timestamp: Date.now(),
  };
}

