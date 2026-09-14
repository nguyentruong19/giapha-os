import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET() {
  // Sử dụng Service Role Key thay vì Anon Key để đảm bảo có quyền truy cập
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  // Truy vấn giới hạn 1 dòng từ một bảng bất kỳ (ví dụ bảng chứa dữ liệu chính)
  const { data, error } = await supabase.from('persons').select('id').limit(1);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, message: 'Đã ping Supabase thành công' }, { status: 200 });
}
