// src/pages/information/page.jsx
import React, { useState } from "react";

export default function InformationPage() {
  const [tab, setTab] = useState("open"); // <- JS로 수정

  return (
    <main className="bg-neutral-100 min-h-screen">
      {/* 헤더 */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-neutral-900">
          Information
        </h1>
        <p className="mt-3 text-neutral-600">
          갤러리 가우디움의 그룹전 참여 안내와 대관 정보를 확인하세요.
        </p>
      </header>

      {/* 탭 네비게이션 */}
      <nav className="max-w-6xl mx-auto px-6">
        <div className="flex gap-8 text-sm md:text-[15px] font-medium border-b border-neutral-200">
          {[
            { key: "open", label: "Open Call for Artists" },
            { key: "fair", label: "Art Fair Participation" },
            { key: "rental", label: "Space Rental Guide" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)} // <- JS로 수정
              className={`relative pb-3 transition-colors ${
                tab === t.key
                  ? "text-neutral-900"
                  : "text-neutral-500 hover:text-neutral-800"
              }`}
            >
              {t.label}
              <span
                className={`absolute left-0 -bottom-[1px] h-[2px] w-full transition-all ${
                  tab === t.key ? "bg-neutral-900" : "bg-transparent"
                }`}
              />
            </button>
          ))}
        </div>
      </nav>

      {/* 본문 */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        {tab === "open" && <OpenCallCard />}
        {tab === "fair" && <ArtFairCard />}
        {tab === "rental" && <RentalCard />}
      </section>
    </main>
  );
}

/* ---------------- Tabs Content ---------------- */

function Card({ children }) { // <- JS로 수정
  return (
    <div className="rounded-2xl bg-white border border-neutral-200 shadow p-7 md:p-10 mb-8">
      {children}
    </div>
  );
}

function OpenCallCard() {
  return (
    <Card>
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900">
        Open Call for Artists
      </h2>

      <p className="mt-4 text-[15px] md:text-base leading-relaxed text-neutral-700">
        갤러리 가우디움은 정기적인 그룹전 개최를 통하여 다양한 시각과 언어를 가진
        동시대 작가들을 상시 모집합니다. 개인전/그룹전, 프로젝트 전시 등 협업
        형태로 함께할 작가님의 포트폴리오 제안을 기다립니다.
      </p>

      <ul className="mt-6 list-disc pl-5 space-y-2 text-neutral-700">
        <li>작가노트(Statement), 최근 작업 이미지 8–15점 / 캡션 포함</li>
        <li>이력(학력·전시·수상) 및 연락처</li>
        <li>PDF 또는 웹 포트폴리오 링크 제출</li>
      </ul>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="mailto:gallery_gaudium@naver.com?subject=[Portfolio]%20Open%20Call"
          className="inline-flex items-center rounded-md px-4 py-2 text-sm border border-neutral-300 hover:bg-neutral-50"
        >
          이메일 제출
        </a>
        <a
          href="https://www.instagram.com/gallery_gaudium/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-md px-4 py-2 text-sm border border-neutral-300 hover:bg-neutral-50"
        >
          Instagram 문의
        </a>
      </div>
    </Card>
  );
}

function ArtFairCard() {
  return (
    <Card>
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900">
        Art Fair Participation
      </h2>

      <p className="mt-4 text-[15px] md:text-base leading-relaxed text-neutral-700">
        갤러리 가우디움은 국내외 아트페어에 정기적으로 참여하여 소속 및 협업 작가의
        작품을 소개합니다. 갤러리 가우디움의 아트페어 참여 작가는 그룹전을 같이한
        작가들 중에서 선정합니다. 갤러리 가우디움과 아트페어 참여를 원하시면,
        먼저 그룹전에 신청해주세요.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="mailto:gallery_gaudium@naver.com?subject=[Inquiry]%20Art%20Fair"
          className="inline-flex items-center rounded-md px-4 py-2 text-sm border border-neutral-300 hover:bg-neutral-50"
        >
          이메일 문의
        </a>
        <span className="inline-flex items-center rounded-md px-4 py-2 text-sm border border-neutral-300 text-neutral-700">
          010-4789-7697
        </span>
      </div>
    </Card>
  );
}

function RentalCard() {
  return (
    <Card>
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900">
        Space Rental Guide
      </h2>

      <p className="mt-4 text-[15px] md:text-base leading-relaxed text-neutral-700">
        갤러리 가우디움은 성수동에 위치한 26평 규모의 공간으로 채광이 좋고,
        18충 건물에 위치하고 있어, 건물 유동인구가 많습니다. 개인전, 단체전, 학원회원전 등 다양한 목적의
        대관이 가능합니다. 공간 도면, 대관료, 이용 가능 장비 및 일정 등 자세한
        안내는 아래 링크에서 확인하실 수 있습니다.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="/files/gaudium_floorplan.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-md px-4 py-2 text-sm border border-neutral-300 hover:bg-neutral-50"
        >
          공간도면 PDF 보기
        </a>
        <a
          href="https://smartstore.naver.com/gallery_gaudium"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-md px-4 py-2 text-sm border border-neutral-300 hover:bg-neutral-50"
        >
          대관 안내 (Naver Smart Store)
        </a>
        <a
          href="mailto:gallery_gaudium@naver.com?subject=[Inquiry]%20Rental"
          className="inline-flex items-center rounded-md px-4 py-2 text-sm border border-neutral-300 hover:bg-neutral-50"
        >
          이메일 문의
        </a>
      </div>

      <div className="mt-6 text-sm text-neutral-600">
        <p>주소 : 서울 성동구 성수일로 77, 서울숲 IT밸리 207호 · 갤러리 가우디움</p>
        <p>운영 : 평일 12:00–18:30 · 토 12:00–17:00 (일/공휴일 휴무)</p>
      </div>
      <a
              href="https://map.naver.com/p/search/%EA%B0%A4%EB%9F%AC%EB%A6%AC%20%EA%B0%80%EC%9A%B0%EB%94%94%EC%9B%80"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-100"
            >
             네이버 지도 길찾기 →
            </a>

    </Card>
  );
}
