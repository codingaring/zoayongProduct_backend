import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

export const loadEnv = (envFileName = '.env.local') => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // .env 파일 경로 계산
  const envPath = path.resolve(__dirname, `../../${envFileName}`);

  dotenv.config({ path: envPath });

  console.log(`Environment variables loaded from: ${envPath}`);
};
