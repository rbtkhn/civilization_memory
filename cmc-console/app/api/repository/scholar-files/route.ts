/**
 * API Route: Get SCHOLAR Files
 * Returns all CIV-SCHOLAR files from the registry
 */

import { NextResponse } from 'next/server';
import { getFileRegistry } from '@/lib/db';

export async function GET() {
  try {
    const registry = getFileRegistry();
    
    // Use SQL WHERE clause instead of getAll() + filter
    const scholarFiles = registry.getByType('CIV-SCHOLAR');
    
    return NextResponse.json({
      success: true,
      files: scholarFiles,
      count: scholarFiles.length,
    });
  } catch (error) {
    console.error('Error fetching SCHOLAR files:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

