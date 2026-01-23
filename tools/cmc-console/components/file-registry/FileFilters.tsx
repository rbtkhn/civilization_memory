'use client';

import { FileRegistry } from '@/types';
import { useMemo, useState, useEffect, useCallback } from 'react';

interface FileFiltersProps {
  files: FileRegistry[];
  onFilteredChange: (filtered: FileRegistry[]) => void;
  onGroupByCivilizationChange?: (grouped: boolean) => void;
}

export default function FileFilters({ files, onFilteredChange, onGroupByCivilizationChange }: FileFiltersProps) {
  const [search, setSearch] = useState('');
  const [fileType, setFileType] = useState<string>('all');
  const [civilization, setCivilization] = useState<string>('all');
  const [sortBy, setSortBy] = useState<keyof FileRegistry>('file_path');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [groupByCivilization, setGroupByCivilization] = useState(false);

  // Extract unique values for dropdowns
  const fileTypes = useMemo(() => {
    const types = new Set(files.map(f => f.file_type).filter(Boolean));
    return Array.from(types).sort();
  }, [files]);

  const civilizations = useMemo(() => {
    const civs = new Set(files.map(f => f.civilization).filter(Boolean));
    return Array.from(civs).sort();
  }, [files]);

  // Apply filters and sorting
  const filteredFiles = useMemo(() => {
    let filtered = files.filter(file => {
      // Search filter
      if (search && !file.file_path.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }
      
      // File type filter
      if (fileType !== 'all' && file.file_type !== fileType) {
        return false;
      }
      
      // Civilization filter
      if (civilization !== 'all') {
        if (civilization === 'none' && file.civilization) return false;
        if (civilization !== 'none' && file.civilization !== civilization) return false;
      }
      
      return true;
    });

    // Sorting
    filtered.sort((a, b) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];
      
      if (aVal === null || aVal === undefined) return 1;
      if (bVal === null || bVal === undefined) return -1;
      
      const comparison = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }, [files, search, fileType, civilization, sortBy, sortOrder]);

  // Notify parent when filtered files change
  useEffect(() => {
    onFilteredChange(filteredFiles);
  }, [filteredFiles, onFilteredChange]);

  const clearFilters = () => {
    setSearch('');
    setFileType('all');
    setCivilization('all');
    setSortBy('file_path');
    setSortOrder('asc');
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6 space-y-4">
      {/* Search */}
      <div>
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
          Search Path
        </label>
        <input
          type="text"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by file path..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Filter Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* File Type Filter */}
        <div>
          <label htmlFor="fileType" className="block text-sm font-medium text-gray-700 mb-2">
            File Type
          </label>
          <select
            id="fileType"
            value={fileType}
            onChange={(e) => setFileType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Types</option>
            {fileTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Civilization Filter */}
        <div>
          <label htmlFor="civilization" className="block text-sm font-medium text-gray-700 mb-2">
            Civilization
          </label>
          <select
            id="civilization"
            value={civilization}
            onChange={(e) => setCivilization(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Civilizations</option>
            <option value="none">No Civilization</option>
            {civilizations.map(civ => (
              <option key={civ || 'null'} value={civ || 'null'}>{civ}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Sort and Group Controls */}
      <div className="flex flex-wrap items-center gap-4 pt-4 border-t">
        <div className="flex items-center gap-2">
          <label htmlFor="sortBy" className="text-sm font-medium text-gray-700">
            Sort by:
          </label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as keyof FileRegistry)}
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="file_path">Path</option>
            <option value="file_type">Type</option>
            <option value="civilization">Civilization</option>
            <option value="era">Era</option>
            <option value="status">Status</option>
            <option value="validation_status">Validation</option>
            <option value="version">Version</option>
          </select>
          <button
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            title={`Sort ${sortOrder === 'asc' ? 'ascending' : 'descending'}`}
          >
            {sortOrder === 'asc' ? '↑' : '↓'}
          </button>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="groupByCivilization"
            checked={groupByCivilization}
            onChange={(e) => {
              setGroupByCivilization(e.target.checked);
              onGroupByCivilizationChange?.(e.target.checked);
            }}
            className="rounded border-gray-300"
          />
          <label htmlFor="groupByCivilization" className="text-sm font-medium text-gray-700">
            Group by Civilization
          </label>
        </div>

        <button
          onClick={clearFilters}
          className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Clear Filters
        </button>

        <div className="ml-auto text-sm text-gray-600">
          Showing {filteredFiles.length} of {files.length} files
        </div>
      </div>
    </div>
  );
}

