'use client';

import { FileRegistry } from '@/types';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

interface FileRegistryTableProps {
  files: FileRegistry[];
  groupByCivilization?: boolean;
}

export default function FileRegistryTable({ files, groupByCivilization = false }: FileRegistryTableProps) {
  const router = useRouter();

  // Group files by civilization if enabled
  const groupedFiles = useMemo(() => {
    if (!groupByCivilization) {
      return { '': files };
    }

    const groups: Record<string, FileRegistry[]> = {};
    files.forEach(file => {
      const key = file.civilization || '(No Civilization)';
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(file);
    });

    // Sort groups
    const sortedGroups: Record<string, FileRegistry[]> = {};
    Object.keys(groups).sort().forEach(key => {
      sortedGroups[key] = groups[key];
    });

    return sortedGroups;
  }, [files, groupByCivilization]);

  const handleRowClick = (id: number) => {
    router.push(`/file/${id}`);
  };

  const getValidationStatusColor = (status: string) => {
    switch (status) {
      case 'valid':
        return 'bg-green-100 text-green-800';
      case 'invalid':
        return 'bg-red-100 text-red-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getFileTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'MEM': 'bg-blue-100 text-blue-800',
      'CIV-CORE': 'bg-purple-100 text-purple-800',
      'CIV-INDEX': 'bg-indigo-100 text-indigo-800',
      'CIV-SCHOLAR': 'bg-teal-100 text-teal-800',
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const renderTable = (groupFiles: FileRegistry[], groupTitle?: string) => (
    <div className={groupByCivilization && groupTitle ? 'mb-8' : ''}>
      {groupByCivilization && groupTitle && (
        <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b">
          {groupTitle} ({groupFiles.length})
        </h2>
      )}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Path
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                {!groupByCivilization && (
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Civilization
                  </th>
                )}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Era
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Validation
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Version
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {groupFiles.map((file) => (
                <tr
                  key={file.id}
                  onClick={() => handleRowClick(file.id)}
                  className="hover:bg-gray-50 cursor-pointer"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-mono text-gray-900">{file.file_path}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getFileTypeColor(file.file_type)}`}>
                      {file.file_type}
                    </span>
                  </td>
                  {!groupByCivilization && (
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {file.civilization || '-'}
                    </td>
                  )}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {file.era || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {file.status || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getValidationStatusColor(file.validation_status)}`}>
                      {file.validation_status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {file.version || '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  if (files.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow">
        <p className="text-gray-600">No files found. Repository will be automatically scanned on first load.</p>
      </div>
    );
  }

  if (groupByCivilization) {
    return (
      <div>
        {Object.entries(groupedFiles).map(([civilization, groupFiles]) => (
          <div key={civilization}>
            {renderTable(groupFiles, civilization)}
          </div>
        ))}
      </div>
    );
  }

  return renderTable(files);
}

