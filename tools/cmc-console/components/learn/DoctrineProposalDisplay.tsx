'use client';

import { DoctrineProposal } from './DoctrineProposalParser';

interface DoctrineProposalDisplayProps {
  proposals: DoctrineProposal[];
  onApprove: (proposal: DoctrineProposal) => void;
  onReject: (proposal: DoctrineProposal) => void;
  civilization?: string | null;
}

export default function DoctrineProposalDisplay({
  proposals,
  onApprove,
  onReject,
  civilization,
}: DoctrineProposalDisplayProps) {
  if (proposals.length === 0) return null;

  return (
    <div className="mt-4 space-y-4">
      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
        <h3 className="text-lg font-semibold text-amber-900 mb-2">
          ⚠️ Doctrine Proposals Requiring Approval
        </h3>
        <p className="text-sm text-amber-800 mb-4">
          The following doctrine proposals were generated in LEARN mode. They are <strong>non-canonical</strong> until explicitly approved.
        </p>
        
        {proposals.map((proposal) => (
          <div key={proposal.id} className="bg-white border border-amber-200 rounded-lg p-4 mb-4 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="text-base font-semibold text-gray-900">
                  {proposal.type === 'MODIFICATION' ? '🔄 Modification' : '✨ New'} Doctrine Proposal
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Proposed Name:</strong> {proposal.proposedName}
                </p>
                {proposal.existingDoctrineName && (
                  <p className="text-sm text-gray-600">
                    <strong>Modifying:</strong> {proposal.existingDoctrineName}
                    {proposal.existingDoctrineNumber && ` (${proposal.existingDoctrineNumber})`}
                  </p>
                )}
              </div>
              <span className="text-xs text-gray-500">
                {new Date(proposal.timestamp).toLocaleTimeString()}
              </span>
            </div>

            <div className="space-y-3 text-sm">
              {proposal.rationale && (
                <div>
                  <strong className="text-gray-700">Rationale:</strong>
                  <p className="text-gray-600 mt-1">{proposal.rationale}</p>
                </div>
              )}

              <div>
                <strong className="text-gray-700">Definition:</strong>
                <p className="text-gray-600 mt-1 whitespace-pre-wrap">{proposal.definition}</p>
              </div>

              {proposal.operationalMeaning.length > 0 && (
                <div>
                  <strong className="text-gray-700">Operational Meaning:</strong>
                  <ul className="list-disc list-inside text-gray-600 mt-1 space-y-1">
                    {proposal.operationalMeaning.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {proposal.hardConstraints.length > 0 && (
                <div>
                  <strong className="text-gray-700">Hard Constraints:</strong>
                  <ul className="list-disc list-inside text-gray-600 mt-1 space-y-1">
                    {proposal.hardConstraints.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {proposal.evidenceBase.length > 0 && (
                <div>
                  <strong className="text-gray-700">Evidence Base:</strong>
                  <ul className="list-disc list-inside text-gray-600 mt-1 space-y-1">
                    {proposal.evidenceBase.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {proposal.sourceSynthesis && (
                <div>
                  <strong className="text-gray-700">Source Synthesis:</strong>
                  <p className="text-gray-600 mt-1">{proposal.sourceSynthesis}</p>
                </div>
              )}
            </div>

            <div className="flex gap-2 mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={() => onApprove(proposal)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium transition-colors"
              >
                ✓ Approve
              </button>
              <button
                onClick={() => onReject(proposal)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-medium transition-colors"
              >
                ✗ Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

