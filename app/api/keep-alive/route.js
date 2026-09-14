import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// BẮT BUỘC phải viết hoa chữ GET
export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  // Sử dụng đúng tên biến bạn đang có trên Vercel
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;
  
  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json(
      { error: 'Thiếu biến môi trường' }, 
      { status: 500 }
    );
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  // Gọi tới một bảng bất kỳ (nhớ đổi 'ten_bang' thành bảng thật trong dự án của bạn)
  const { error } = await supabase.from('persons').select('*').limit(1);

  if (error) {
    // Ngay cả khi lỗi quyền truy cập RLS, Supabase vẫn ghi nhận đã bị ping, nên ta vẫn trả về 200
    return NextResponse.json(
      { success: true, note: 'Ping thành công nhưng có lỗi RLS', error: error.message }, 
      { status: 200 }
    );
  }

  return NextResponse.json(
    { success: true, message: 'Đã ping Supabase thành công' }, 
    { status: 200 }
  );
}
