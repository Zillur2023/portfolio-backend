import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default { 
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  client_url:process.env.CLIENT_URL,
  server_url:process.env.SERVER_URL,
  database_url: process.env.DATABASE_URL,
  cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
  cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
  send_email_secret: process.env.SEND_EMAIL_SECRET
};