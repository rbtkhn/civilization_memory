'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { FileRegistry, FileHeaderMetadata } from '@/types';

export default function FileViewPage() {
  const params = useParams();
  const router = useRouter();
  const [file, setFile] = useState<(FileRegistry & { content?: string; header?: FileHeaderMetadata }) | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFile = async () => {
      try {
        const response = await fetch(`/api/repository/file/${params.id}`);
        const data = await response.json();
        if (data.success) {
          setFile(data.file);
        }
      } catch (error) {
        console.error('Error loading file:', error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      loadFile();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading file...</p>
      </div>
    );
  }

  if (!file) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">File not found</p>
          <button
            onClick={() => router.push('/')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Registry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.push('/')}
            className="text-blue-600 hover:text-blue-700 mb-2"
          >
            ← Back to Registry
          </button>
          <h1 className="text-2xl font-bold text-gray-900">{file.file_path}</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow mb-6 p-6">
          <h2 className="text-lg font-semibold mb-4">Metadata</h2>
          <dl className="grid grid-cols-2 gap-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">Type</dt>
              <dd className="mt-1 text-sm text-gray-900">{file.file_type}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Civilization</dt>
              <dd className="mt-1 text-sm text-gray-900">{file.civilization || '-'}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Era</dt>
              <dd className="mt-1 text-sm text-gray-900">{file.era || '-'}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Status</dt>
              <dd className="mt-1 text-sm text-gray-900">{file.status || '-'}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Version</dt>
              <dd className="mt-1 text-sm text-gray-900">{file.version || '-'}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Validation</dt>
              <dd className="mt-1 text-sm text-gray-900">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  file.validation_status === 'valid' ? 'bg-green-100 text-green-800' :
                  file.validation_status === 'invalid' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {file.validation_status}
                </span>
              </dd>
            </div>
          </dl>
        </div>

        {file.header && (
          <div className="bg-white rounded-lg shadow mb-6 p-6">
            <h2 className="text-lg font-semibold mb-4">Header Metadata</h2>
            <pre className="bg-gray-50 p-4 rounded overflow-x-auto text-sm">
              {JSON.stringify(file.header, null, 2)}
            </pre>
          </div>
        )}

        {file.content && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Content</h2>
            <div className="prose max-w-none">
              <pre className="whitespace-pre-wrap font-mono text-sm bg-gray-50 p-4 rounded overflow-x-auto">
                {file.content}
              </pre>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

