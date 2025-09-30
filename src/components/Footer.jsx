// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 py-6 text-sm text-neutral-600">
      <div className="max-w-7xl mx-auto px-5 flex flex-wrap items-center justify-between gap-4">
        <p>© 2025 Gallery Gaudium</p>
        <div className="flex items-center gap-6">
          <a href="mailto:gallery_gaudium@naver.com" className="hover:underline">
            Email
          </a>
          <span>010-4789-7697</span>
          <a href="/information" className="hover:underline">
            Information
          </a>
        </div>
      </div>
    </footer>
  );
}
