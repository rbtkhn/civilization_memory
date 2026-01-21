/**
 * API Route: Get MEM Files by Civilization
 * Returns MEM files filtered by civilization
 */

import { NextResponse } from 'next/server';
import { getFileRegistry } from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const civilization = searchParams.get('civilization');
    
    const registry = getFileRegistry();
    
    // Use SQL WHERE clause instead of getAll() + filter
    const memFiles = civilization
      ? registry.getByTypeAndCivilization('MEM', civilization)
      : registry.getByType('MEM');
    
    return NextResponse.json({
      success: true,
      files: memFiles,
      count: memFiles.length,
      civilization: civilization || 'all',
    });
  } catch (error) {
    console.error('Error fetching MEM files:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

