import Footer from "@/components/Footer";
import Link from "next/link";
import config from "./config";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-24">
        <div className="max-w-3xl text-center space-y-8 w-full">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
              {config.siteName}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
              Gìn giữ và lưu truyền những giá trị, cội nguồn và truyền thống tốt
              đẹp của dòng họ cho các thế hệ mai sau. Nơi kết nối các thành viên
              trong gia đình.
            </p>
          </div>

          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4 sm:px-0">
            <Link
              href="/login"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-amber-700 hover:bg-amber-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 w-full sm:w-auto"
            >
              Đăng nhập để xem thông tin
            </Link>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left border-t border-stone-200 pt-12 sm:pt-16">
            <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm flex flex-col items-start">
              <div className="p-2 bg-amber-50 rounded-lg mb-4">
                <span className="text-xl">👥</span>
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-2">
                Quản lý Thành viên
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Cập nhật thông tin chi tiết, tiểu sử và hình ảnh của từng thành
                viên trong dòng họ.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm flex flex-col items-start">
              <div className="p-2 bg-amber-50 rounded-lg mb-4">
                <span className="text-xl">🌳</span>
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-2">
                Cây Gia Phả
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Xem trực quan sơ đồ phả hệ, các thế hệ và mối quan hệ gia đình
                một cách rõ ràng.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm flex flex-col items-start sm:col-span-2 md:col-span-1">
              <div className="p-2 bg-amber-50 rounded-lg mb-4">
                <span className="text-xl">🔒</span>
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-2">
                Bảo mật Thông tin
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Thông tin riêng tư được bảo vệ nghiêm ngặt, chỉ được truy cập
                bởi những thành viên được cấp quyền.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer className="bg-stone-50" />
    </div>
  );
}
