/**
 * API Route: Get File by ID
 * Returns file content and metadata
 */

import { NextResponse } from 'next/server';
import { getFileRegistry } from '@/lib/db';
import { readRepositoryFile } from '@/lib/services/repository.service';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    if (isNaN(id)) {
      return NextResponse.json(
        { success: false, error: 'Invalid file ID' },
        { status: 400 }
      );
    }
    
    const registry = getFileRegistry();
    const file = registry.getById(id);
    
    if (!file) {
      return NextResponse.json(
        { success: false, error: 'File not found' },
        { status: 404 }
      );
    }
    
    // Read file content
    const parsed = readRepositoryFile(file.file_path);
    
    if (!parsed) {
      return NextResponse.json(
        { success: false, error: 'Could not read file' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({
      success: true,
      file: {
        ...file,
        content: parsed.content,
        raw: parsed.raw,
        header: parsed.header,
      },
    });
  } catch (error) {
    console.error('Error fetching file:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

