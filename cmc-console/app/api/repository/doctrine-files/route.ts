/**
 * API Route: Get CIV–DOCTRINE files
 * Returns all CIV–DOCTRINE files, optionally filtered by civilization
 */

import { NextResponse } from 'next/server';
import { getFileRegistry } from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const civilization = searchParams.get('civilization');

    const registry = getFileRegistry();
    
    // Use SQL WHERE clause instead of getAll() + filter
    const files = civilization
      ? registry.getByTypeAndCivilization('CIV-DOCTRINE', civilization)
      : registry.getByType('CIV-DOCTRINE');

    return NextResponse.json({
      success: true,
      files: files,
    });
  } catch (error) {
    console.error('Error fetching CIV–DOCTRINE files:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

