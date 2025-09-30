// src/components/Header.jsx
import { NavLink } from "react-router-dom";

const base =
  "transition-colors hover:text-accent";
const link =
  "text-sm md:text-[15px] " + base;
const active =
  "text-ink font-semibold"; // 활성 메뉴 강조

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-line">
      <div className="max-w-7xl mx-auto flex items-center gap-6 px-5 h-14">
        {/* 로고 / 브랜드 */}
        <a href="/" className="font-semibold tracking-wide text-ink">
          GalleryGAUDIUM
        </a>

        {/* 가운데 메뉴 */}
        <nav className="hidden md:flex items-center gap-5">
          <NavLink to="/" end className={({ isActive }) => (isActive ? active : link)}>
            Home
          </NavLink>
          <NavLink to="/exhibition" className={({ isActive }) => (isActive ? active : link)}>
            Exhibition
          </NavLink>
          <NavLink to="/artist" className={({ isActive }) => (isActive ? active : link)}>
            Artist
          </NavLink>
          <NavLink to="/information" className={({ isActive }) => (isActive ? active : link)}>
            Information
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? active : link)}>
            About
          </NavLink>
        </nav>

        {/* 우측 끝으로 밀기 */}
        <div className="ml-auto flex items-center">
          {/* 구분용 얇은 선 */}
          <span className="hidden md:inline-block w-12 h-px bg-line mr-4 align-middle" />
          {/* Collect(Shop) */}
          <NavLink
            to="/collect"
            className={({ isActive }) =>
              "text-[15px] font-semibold " +
              (isActive ? "text-ink" : "text-ink/80 hover:text-accent")
            }
          >
            Collect
          </NavLink>
        </div>
      </div>
    </header>
  );
}
