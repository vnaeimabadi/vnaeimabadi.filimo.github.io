import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ryihvbdagydtvkzvyonz.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTkwMTI4NSwiZXhwIjoxOTU3NDc3Mjg1fQ.PtUK-pimm1Ucqsmv7U8YPcVhcXHNbGjx5dqU2LkxJWE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
