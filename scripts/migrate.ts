import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/neon-http';
import { migrate } from 'drizzle-orm/neon-http/migrator';

config({ path: '.env.local' });

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const main = async () => {
  try {
    await migrate(db, { migrationsFolder: 'drizzle' });
    console.log('Migration completed successfully.');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
};

main();
