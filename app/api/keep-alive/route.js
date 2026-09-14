import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  
  // Chỉ cần lấy 1 dòng để đánh thức database
  const { data, error } = await supabase.from('persons').select('id').limit(1);

  if (error) return res.status(500).json({ status: 'Error', error });
  return res.status(200).json({ status: 'Supabase is awake!', data });
}
