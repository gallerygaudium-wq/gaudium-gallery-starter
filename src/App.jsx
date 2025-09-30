// src/App.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// 실제 헤더/푸터 사용 (경로는 프로젝트에 맞게)
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// ✅ 페이지 컴포넌트는 전부 lazy 로 통일 (중복 선언 방지)
const Home         = lazy(() => import("./pages/Home.jsx"));
const Exhibition   = lazy(() => import("./pages/exhibition/page.jsx"));
const Artist       = lazy(() => import("./pages/artist/page.jsx"));
const Information  = lazy(() => import("./pages/information/page.jsx"));
const About        = lazy(() => import("./pages/about/page.jsx"));

// Collect 목록/상세 라우트
const CollectListPage   = lazy(() => import("./pages/collect/page.jsx"));
const CollectDetailPage = lazy(() => import("./pages/collect/detail.jsx"));

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header />
      <main className="max-w-7xl mx-auto px-5 pt-4">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="p-10 text-center">Loading…</div>}>
        <Routes>
          <Route path="/"            element={<Home />} />
          <Route path="/exhibition"  element={<Exhibition />} />
          <Route path="/artist"      element={<Artist />} />
          <Route path="/information" element={<Information />} />
          <Route path="/about"       element={<About />} />

          {/* Collect: 목록 & 상세 */}
          <Route path="/collect"        element={<CollectListPage />} />
          <Route path="/collect/:id"    element={<CollectDetailPage />} />

          {/* 기타 경로는 홈으로 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
