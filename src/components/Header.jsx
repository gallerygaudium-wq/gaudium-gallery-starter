// src/components/Header.jsx
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

// 공통 스타일 (너가 쓰던 토큰 유지)
const base = "transition-colors hover:text-accent";
const link = "text-sm md:text-[15px] " + base;
const active = "text-ink font-semibold";

// 내비 구조(필요 시 하위 항목 추가/수정 가능)
const NAV = [
  {
    label: "Exhibition",to: "/exhibition",
  },
  {
    label: "Artist", to: "/artist",
  },
  {
    label: "Information", to: "/information",
  },
  { label: "About", to: "/about" },
];


export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIdx, setOpenIdx] = useState(null); // 모바일 서브메뉴 토글

  // 모바일에서 링크 눌렀을 때 메뉴 닫기
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-line">
      <div className="max-w-7xl mx-auto px-5">
        <div className="h-14 flex items-center gap-6">
          {/* 로고 */}
          <Link to="/" className="font-semibold tracking-wide text-ink">
            GalleryGAUDIUM
          </Link>

          {/* 데스크톱 내비 */}
          <nav className="hidden md:flex items-center gap-5">
            {NAV.map((item) => (
              <div key={item.label} className="relative group">
                <NavLink
                  to={item.to}
                  className={({ isActive }) => (isActive ? active : link)}
                  end
                >
                  {item.label}
                </NavLink>

                {/* 데스크톱 드롭다운 (hover) */}
                {item.children && (
                  <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border border-line rounded-xl shadow-lg min-w-[12rem] z-[60]">
                    {item.children.map((c) => (
                      <NavLink
                        key={c.label}
                        to={c.to}
                        className={({ isActive }) =>
                          "block px-4 py-2 text-sm " +
                          (isActive ? "text-ink " : "text-ink/80 hover:bg-gray-50 ")
                        }
                        onClick={closeMobile}
                      >
                        {c.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* 우측 끝: Collect */}
          <div className="ml-auto flex items-center">
            <span className="hidden md:inline-block w-12 h-px bg-line mr-4 align-middle" />
            <NavLink
              to="/collect"
              className={({ isActive }) =>
                "text-[15px] font-semibold " +
                (isActive ? "text-ink" : "text-ink/80 hover:text-accent")
              }
              onClick={closeMobile}
            >
              Collect
            </NavLink>

            {/* 모바일 햄버거 버튼 */}
            <button
              aria-controls="mobile-menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden ml-2 inline-flex items-center justify-center w-10 h-10 rounded-xl border border-line"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 (클릭-토글 아코디언) */}
        <div
          id="mobile-menu"
          className={`md:hidden border-t border-line ${mobileOpen ? "block" : "hidden"} relative z-50 bg-white`}
        >
          <ul className="py-2">
            {NAV.map((item, i) => {
              const hasChildren = !!item.children;
              const opened = openIdx === i;
              return (
                <li key={item.label} className="px-2">
                  <div className="flex items-center justify-between">
                    <NavLink
                      to={item.to}
                      end
                      className={({ isActive }) => (isActive ? active : link) + " py-3 px-1"}
                      onClick={closeMobile}
                    >
                      {item.label}
                    </NavLink>

                    {hasChildren && (
                      <button
                        aria-expanded={opened}
                        onClick={() => setOpenIdx(opened ? null : i)}
                        className="p-2"
                      >
                        <svg
                          className={`w-4 h-4 transition-transform ${opened ? "rotate-180" : ""}`}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {hasChildren && (
                    <div className={`pb-2 pl-3 ${opened ? "block" : "hidden"}`}>
                      {item.children.map((c) => (
                        <NavLink
                          key={c.label}
                          to={c.to}
                          className="block py-2 text-sm text-ink/80 hover:text-ink"
                          onClick={closeMobile}
                        >
                          {c.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}

            {/* 모바일 하단에 Collect도 노출 */}
            <li className="px-2">
              <NavLink
                to="/collect"
                className={({ isActive }) =>
                  "block py-3 px-1 text-sm md:text-[15px] " +
                  (isActive ? "text-ink font-semibold" : base + " text-ink/80")
                }
                onClick={closeMobile}
              >
                Collect
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
