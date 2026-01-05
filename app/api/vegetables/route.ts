import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get('search') || '';
    const limit = parseInt(searchParams.get('limit') || '100');
    const offset = parseInt(searchParams.get('offset') || '0');

    let query = 'SELECT * FROM vegetables';
    const params: any[] = [];
    const conditions: string[] = [];

    if (search) {
      conditions.push(`name ILIKE $${params.length + 1}`);
      params.push(`%${search}%`);
    }

    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }

    query += ' ORDER BY id ASC';
    query += ` LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
    params.push(limit, offset);

    const result = await pool.query(query, params);

    // Get total count for pagination
    let countQuery = 'SELECT COUNT(*) FROM vegetables';
    if (search) {
      countQuery += ' WHERE name ILIKE $1';
    }
    const countResult = await pool.query(
      countQuery,
      search ? [`%${search}%`] : []
    );
    const total = parseInt(countResult.rows[0].count);

    return NextResponse.json({
      vegetables: result.rows.map((row) => ({
        id: row.id,
        name: row.name,
        price: parseFloat(row.price),
        image: row.image,
        description: row.description,
        unit: row.unit,
      })),
      total,
      limit,
      offset,
    });
  } catch (error) {
    console.error('Error fetching vegetables:', error);
    return NextResponse.json(
      { error: 'Failed to fetch vegetables' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, price, image, description, unit } = body;

    if (!name || !price || !image || !unit) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const result = await pool.query(
      `INSERT INTO vegetables (name, price, image, description, unit)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [name, price, image, description || '', unit]
    );

    return NextResponse.json({
      vegetable: {
        id: result.rows[0].id,
        name: result.rows[0].name,
        price: parseFloat(result.rows[0].price),
        image: result.rows[0].image,
        description: result.rows[0].description,
        unit: result.rows[0].unit,
      },
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating vegetable:', error);
    return NextResponse.json(
      { error: 'Failed to create vegetable' },
      { status: 500 }
    );
  }
}

