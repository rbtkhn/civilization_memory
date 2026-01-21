'use client';

import { useState, useEffect } from 'react';
import { FileRegistry } from '@/types';

interface AuditInterfaceProps {
  civilization?: string | null;
  onAddMessage?: (type: 'user' | 'system' | 'error', content: string) => void;
  onModeChange?: (mode: 'IMAGINE' | 'LEARN' | 'WRITE' | 'AUDIT') => void;
}

export default function AuditInterface({ civilization, onAddMessage, onModeChange }: AuditInterfaceProps) {
  const [error, setError] = useState<string | null>(null);
  const [memFiles, setMemFiles] = useState<FileRegistry[]>([]);
  const [selectedMemFile, setSelectedMemFile] = useState<FileRegistry | null>(null);
  const [memAuditLoading, setMemAuditLoading] = useState(false);
  const [optionsPresented, setOptionsPresented] = useState(false);
  const [auditResult, setAuditResult] = useState<any>(null);

  const loadMemFiles = async () => {
    if (!civilization) return;
    
    try {
      const response = await fetch(`/api/repository/mem-files?civilization=${encodeURIComponent(civilization)}`);
      const result = await response.json();
      if (result.success) {
        setMemFiles(result.files || []);
      }
    } catch (err) {
      console.error('Error loading MEM files:', err);
      setError('Failed to load MEM files');
    }
  };

  useEffect(() => {
    // Load MEM files for current civilization
    if (civilization) {
      loadMemFiles();
    } else {
      setMemFiles([]);
      setSelectedMemFile(null);
      setAuditResult(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [civilization]);

  const auditMemFile = async (file: FileRegistry) => {
    setMemAuditLoading(true);
    setError(null);
    setOptionsPresented(false);
    setAuditResult(null);
    
    try {
      const response = await fetch(`/api/audit/mem-compliance?fileId=${file.id}`);
      const result = await response.json();
      
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to audit MEM file');
      }
      
      setAuditResult(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setMemAuditLoading(false);
    }
  };

  // Auto-present options when non-compliance is detected
  useEffect(() => {
    if (!memAuditLoading && auditResult && (!auditResult.valid || auditResult.blocked) && !optionsPresented && onAddMessage && selectedMemFile) {
      setOptionsPresented(true);
      
      const errorSummary = auditResult.errors?.slice(0, 5).join('\n• ') || 'Non-compliant with template';
      const warningSummary = auditResult.warnings?.slice(0, 3).join('\n• ') || '';
      
      let message = `MEM file "${selectedMemFile.file_path}" is non-compliant with CIV–MEM–TEMPLATE v1.9 and CIV–ARC.\n\n`;
      
      if (auditResult.errors && auditResult.errors.length > 0) {
        message += `Errors found:\n• ${errorSummary}`;
        if (auditResult.errors.length > 5) {
          message += `\n... and ${auditResult.errors.length - 5} more errors`;
        }
        message += '\n\n';
      }
      
      if (warningSummary) {
        message += `Warnings:\n• ${warningSummary}\n\n`;
      }
      
      message += `Options:\n\na) Switch to WRITE mode and upgrade this file to compliance\nb) View detailed compliance breakdown\nc) Cancel and return to audit`;
      
      onAddMessage('system', message);
    }
  }, [memAuditLoading, auditResult, optionsPresented, selectedMemFile, onAddMessage]);

  if (!civilization) {
    return (
      <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          🔍 MEM File Audit
        </h3>
        <p className="text-sm text-gray-600">
          Please select a civilization to audit MEM files.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        🔍 MEM File Audit — {civilization}
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Tests MEM files against CIV–MEM–TEMPLATE v1.9 and CIV–ARC compliance.
      </p>

      {/* MEM File Selector */}
      <div className="mb-6">
        <label htmlFor="memFileSelect" className="block text-sm font-medium text-gray-700 mb-2">
          Select MEM File to Audit
        </label>
        <select
          id="memFileSelect"
          value={selectedMemFile?.id || ''}
          onChange={(e) => {
            const file = memFiles.find(f => f.id === parseInt(e.target.value));
            setSelectedMemFile(file || null);
            if (file) {
              auditMemFile(file);
            }
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        >
          <option value="">-- Select a MEM file --</option>
          {memFiles.map((file) => (
            <option key={file.id} value={file.id}>
              {file.file_path}
            </option>
          ))}
        </select>
        {memFiles.length === 0 && (
          <p className="text-xs text-gray-500 mt-2">No MEM files found for {civilization}.</p>
        )}
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      {/* Audit Results */}
      {memAuditLoading && (
        <div className="text-center py-8">
          <p className="text-sm text-gray-600">Auditing MEM file against CIV–MEM–TEMPLATE v1.9 and CIV–ARC...</p>
        </div>
      )}

      {!memAuditLoading && auditResult && (
        <div className="space-y-4">
          {/* Overall Status */}
          <div className={`rounded-lg shadow p-4 border-2 ${
            auditResult.valid && !auditResult.blocked
              ? 'bg-green-50 border-green-300'
              : auditResult.blocked
              ? 'bg-red-50 border-red-300'
              : 'bg-yellow-50 border-yellow-300'
          }`}>
            <h3 className="text-lg font-semibold mb-2">
              {auditResult.valid && !auditResult.blocked
                ? '✅ Compliant with CIV–MEM–TEMPLATE v1.9 and CIV–ARC'
                : auditResult.blocked
                ? '❌ Blocked'
                : '⚠️ Non-Compliant'}
            </h3>
            <p className="text-sm text-gray-700">
              {selectedMemFile?.file_path}
            </p>
          </div>

          {/* Errors */}
          {auditResult.errors && auditResult.errors.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-red-800 mb-2">Errors ({auditResult.errors.length})</h4>
              <ul className="space-y-1">
                {auditResult.errors.map((error: string, idx: number) => (
                  <li key={idx} className="text-sm text-red-700">• {error}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Warnings */}
          {auditResult.warnings && auditResult.warnings.length > 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-yellow-800 mb-2">Warnings ({auditResult.warnings.length})</h4>
              <ul className="space-y-1">
                {auditResult.warnings.map((warning: string, idx: number) => (
                  <li key={idx} className="text-sm text-yellow-700">• {warning}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Compliance Details */}
          {auditResult.compliance && (
            <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Compliance Details</h4>
              
              {/* ARC Version */}
              <div className="border-b border-gray-200 pb-2">
                <p className="text-xs font-medium text-gray-600">ARC Version (CIV–ARC)</p>
                <p className="text-sm text-gray-900">
                  {auditResult.compliance.arcVersionPinned ? (
                    <span className="text-green-700">✓ Pinned: {auditResult.compliance.arcVersion}</span>
                  ) : (
                    <span className="text-red-700">✗ Not pinned</span>
                  )}
                </p>
                <p className="text-xs text-gray-600">
                  Parity: {auditResult.compliance.arcVersionParity ? '✓ Valid' : '✗ Invalid'}
                </p>
              </div>

              {/* Wordcount */}
              <div className="border-b border-gray-200 pb-2">
                <p className="text-xs font-medium text-gray-600">Wordcount (MEM–TEMPLATE)</p>
                <p className="text-sm text-gray-900">
                  {auditResult.compliance.wordcountVerified ? (
                    <span className="text-green-700">✓ Verified: {auditResult.compliance.wordcount} words</span>
                  ) : (
                    <span className="text-red-700">✗ Verification failed</span>
                  )}
                </p>
              </div>

              {/* Quotation Compliance (CIV–ARC) */}
              <div className="border-b border-gray-200 pb-2">
                <p className="text-xs font-medium text-gray-600 mb-1">Quotation Compliance (CIV–ARC)</p>
                <div className="space-y-1 text-xs">
                  <p className={auditResult.compliance.quotationCompliance.ancient.count >= 3 ? 'text-green-700' : 'text-red-700'}>
                    ANCIENT: {auditResult.compliance.quotationCompliance.ancient.count}/3 quotes, {auditResult.compliance.quotationCompliance.ancient.totalWords}/75 words
                  </p>
                  {auditResult.compliance.quotationCompliance.medieval && (
                    <p className={auditResult.compliance.quotationCompliance.medieval.count >= 2 ? 'text-green-700' : 'text-red-700'}>
                      MEDIEVAL: {auditResult.compliance.quotationCompliance.medieval.count}/2 quotes (min 25 words each, if applicable)
                    </p>
                  )}
                  <p className={auditResult.compliance.quotationCompliance.earlyModern?.count >= 2 ? 'text-green-700' : 'text-red-700'}>
                    EARLY_MODERN: {auditResult.compliance.quotationCompliance.earlyModern?.count || 0}/2 quotes (min 25 words each)
                  </p>
                  <p className={auditResult.compliance.quotationCompliance.modern?.count >= 2 ? 'text-green-700' : 'text-red-700'}>
                    MODERN: {auditResult.compliance.quotationCompliance.modern?.count || 0}/2 quotes
                  </p>
                </div>
              </div>

              {/* MEM Connections (MEM–TEMPLATE) */}
              <div>
                <p className="text-xs font-medium text-gray-600 mb-1">MEM Connections (MEM–TEMPLATE)</p>
                <div className="space-y-1 text-xs">
                  <p className={auditResult.compliance.memConnections.total >= 10 ? 'text-green-700' : 'text-red-700'}>
                    Total: {auditResult.compliance.memConnections.total}/10 required
                  </p>
                  <p className={auditResult.compliance.memConnections.sameCivilization >= auditResult.compliance.memConnections.total ? 'text-green-700' : 'text-red-700'}>
                    Same Civilization: {auditResult.compliance.memConnections.sameCivilization}/{auditResult.compliance.memConnections.total} (all must be same CIV)
                  </p>
                  <p className={(auditResult.compliance.memConnections.geoMemCount || 0) >= 2 ? 'text-green-700' : 'text-red-700'}>
                    GEO MEM Files: {(auditResult.compliance.memConnections.geoMemCount || 0)}/2 required
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
