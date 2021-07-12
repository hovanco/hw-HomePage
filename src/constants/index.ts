import dotenv from 'dotenv';

dotenv.config();

export const INSA_GOOGLE_SHEET_API = <string>process.env.INSA_GOOGLE_SHEET_API;
export const INSA_BLOG_API = <string>process.env.INSA_BLOG_API_PRO;
export * from './packages';
