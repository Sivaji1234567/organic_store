import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const result = await pool.query(
      'SELECT * FROM vegetables WHERE id = $1',
      [params.id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Vegetable not found' },
        { status: 404 }
      );
    }

    const row = result.rows[0];
    return NextResponse.json({
      id: row.id,
      name: row.name,
      price: parseFloat(row.price),
      image: row.image,
      description: row.description,
      unit: row.unit,
    });
  } catch (error) {
    console.error('Error fetching vegetable:', error);
    return NextResponse.json(
      { error: 'Failed to fetch vegetable' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { name, price, image, description, unit } = body;

    const result = await pool.query(
      `UPDATE vegetables 
       SET name = COALESCE($1, name),
           price = COALESCE($2, price),
           image = COALESCE($3, image),
           description = COALESCE($4, description),
           unit = COALESCE($5, unit),
           updated_at = CURRENT_TIMESTAMP
       WHERE id = $6
       RETURNING *`,
      [name, price, image, description, unit, params.id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Vegetable not found' },
        { status: 404 }
      );
    }

    const row = result.rows[0];
    return NextResponse.json({
      id: row.id,
      name: row.name,
      price: parseFloat(row.price),
      image: row.image,
      description: row.description,
      unit: row.unit,
    });
  } catch (error) {
    console.error('Error updating vegetable:', error);
    return NextResponse.json(
      { error: 'Failed to update vegetable' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const result = await pool.query(
      'DELETE FROM vegetables WHERE id = $1 RETURNING *',
      [params.id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Vegetable not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Vegetable deleted successfully' });
  } catch (error) {
    console.error('Error deleting vegetable:', error);
    return NextResponse.json(
      { error: 'Failed to delete vegetable' },
      { status: 500 }
    );
  }
}

