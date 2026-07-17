import { test, expect } from '@playwright/test';
import pg from 'pg';

const { Client } = pg;

test('database kontrolu', async () => {

  const client = new Client({
    user: process.env.USER,
    host: 'localhost',
    database: 'playwrightdb',
    port: 5432,
  });

  await client.connect();

  const result = await client.query(
    "SELECT * FROM users WHERE username='dilek'"
  );

  expect(result.rows[0].status).toBe('active');

  await client.end();
});