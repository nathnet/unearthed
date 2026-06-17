import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  connectionTimeoutMillis: 5000,
  statement_timeout: 10000,
});

export default pool;