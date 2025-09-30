// src/components/Header.jsx
import { useState } from "react";

const NAV = [
  {
    label: "Exhibition",
    href: "/exhibition",
    children: [
      { label: "Current", href: "/exhibition#current" },
      { label: "Upcoming", href: "/exhibition#upcoming" },
      { label: "Past", href: "/exhibition#past" },
    ],
  },
  {
    label: "Artist",
    href: "/artist",
    children: [
      { label: "Roster", href: "/artist#roster" },
      { label: "Apply", href: "/artist#apply" },
    ],
  },
  {
    label: "Information",
    href: "/information",
    children: [
      { label: "대관 안내", href: "/information#rent" },
      { label: "그룹전 안내", href: "/information#group" },
      { label: "Visit Us", href: "/information#visit" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Collect", href: "/collect" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIdx, setOpenIdx] = useState(null); // 모바일 서브메뉴 토글

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4">
        <div className="h-16 flex items-center justify-between">
          <a href="/" className="font-semibold tracking-wide">Gallery GAUDIUM</a>

          {/* 데스크톱 내비 */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV.map((item) => (
              <div key={item.label} className="relative group">
                <a href={item.href} className="py-2 hover:opacity-80">{item.label}</a>

                {/* 데스크톱 드롭다운: hover로 표시 */}
                {item.children && (
                  <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border border-black/5 rounded-xl shadow-lg min-w-[12rem] z-[60]">
                    {item.children.map((c) => (
                      <a
                        key={c.label}
                        href={c.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-50"
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* 모바일 토글 버튼 */}
          <button
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-black/10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        <div
          id="mobile-menu"
          className={`md:hidden border-t border-black/5 ${mobileOpen ? "block" : "hidden"}`}
        >
          <ul className="py-2">
            {NAV.map((item, i) => {
              const hasChildren = !!item.children;
              const opened = openIdx === i;
              return (
                <li key={item.label} className="px-2">
                  <div className="flex items-center justify-between">
                    <a href={item.href} className="py-3 px-1 block">{item.label}</a>
                    {hasChildren && (
                      <button
                        aria-expanded={opened}
                        onClick={() => setOpenIdx(opened ? null : i)}
                        className="p-2"
                      >
                        <svg
                          className={`w-4 h-4 transition-transform ${opened ? "rotate-180" : ""}`}
                          viewBox="0 0 24 24" fill="none"
                        >
                          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {hasChildren && (
                    <div className={`pb-2 pl-3 ${opened ? "block" : "hidden"}`}>
                      {item.children.map((c) => (
                        <a
                          key={c.label}
                          href={c.href}
                          className="block py-2 text-sm text-gray-700"
                        >
                          {c.label}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
