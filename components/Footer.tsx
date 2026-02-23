export interface FooterProps {
  className?: string;
  showDisclaimer?: boolean;
}

export default function Footer({
  className = "",
  showDisclaimer = false,
}: FooterProps) {
  return (
    <footer className={`py-6 text-center text-sm text-stone-500 ${className}`}>
      {showDisclaimer && (
        <p className="mb-2">
          Nội dung có thể cũ hoặc có sai sót, vui lòng góp ý để thông tin được
          chính xác hơn.
        </p>
      )}
      <p className="flex items-center justify-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
        <a
          href="https://github.com/homielab/giapha-os"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-amber-700 hover:text-amber-800 transition-colors inline-flex items-center gap-1.5"
        >
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          Gia Phả OS
        </a>
      </p>
    </footer>
  );
}
