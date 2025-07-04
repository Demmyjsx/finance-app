import { createClient } from '@supabase/supabase-js'
import env from ".env";

const process=env.config();
const supabaseUrl=process.env.DB_URL;
const supabaseKey=process.env.DB_KEY;

const supabase=createClient(supabaseUrl, supabaseKey)