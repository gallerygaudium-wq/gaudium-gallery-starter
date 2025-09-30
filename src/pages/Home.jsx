// src/pages/Home.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";

export default function Home() {
  // 슬라이드 이미지
  const slides = useMemo(
    () => [
      "/images/home_1.jpg",
      "/images/home_2.jpg",
      "/images/home_3.jpg",
      "/images/home_4.jpg",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [isHover, setHover] = useState(false);
  const [allowAuto, setAllowAuto] = useState(true);
  const timerRef = useRef(null);

  // 이미지 프리로드
  useEffect(() => {
    slides.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [slides]);

  // 모션 줄이기 선호 반영
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAllowAuto(!mql.matches);
    const onChange = (e) => setAllowAuto(!e.matches);
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, []);

  // 탭 비활성화 시 정지
  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden && timerRef.current) clearInterval(timerRef.current);
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  // 자동재생
  useEffect(() => {
    if (!allowAuto || isHover || document.hidden) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => timerRef.current && clearInterval(timerRef.current);
  }, [slides.length, isHover, allowAuto]);

  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((i) => (i + 1) % slides.length);
  const goTo = (i) => setIndex(i);

  // 모바일 스와이프
  const touchStartX = useRef(0);
  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx > 0 ? goPrev() : goNext());
  };

  // 히스토리 데이터
  const historyItems = [
    "2024.10 : 갤러리 개관",
    "2024.10 : 구지희 개인전",
    "2025.04 : 이하 작가 초대전",
    "2025.05~12 : 갤러리 기획 그룹전, 9인9색전",
    "2025.07 : 제주국제아트페어", 
    "2025.12(예정) : 이하 작가 개인전",
    "2025.12(예정) : Gaudium Prelude",
    "2025.12(예정) : 서울아트쇼, COEX",
  ];
  const [showAll, setShowAll] = useState(false);
  const visibleHistory = showAll ? historyItems : historyItems.slice(0, 7);

  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-center py-20">
            <h1 className="text-5xl font-bold text-neutral-900 mb-6">
              Gallery GAUDIUM
            </h1>
            <p className="text-lg text-neutral-600">
              Joy of Art · 갤러리 가우디움
            </p>
          </div>

          {/* Slider */}
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Gallery images"
            className="relative rounded-xl shadow-lg overflow-hidden"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="relative h-[380px] md:h-[460px]">
              {slides.map((src, i) => (
                <img
                  key={src + i}
                  src={src}
                  alt={`gallery slide ${i + 1}`}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                  draggable={false}
                />
              ))}
            </div>

            {/* 좌/우 */}
            <button
              onClick={goPrev}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white w-9 h-9 grid place-items-center hover:bg-black/60"
            >
              ‹
            </button>
            <button
              onClick={goNext}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white w-9 h-9 grid place-items-center hover:bg-black/60"
            >
              ›
            </button>

            {/* 인디케이터 */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-white" : "w-2.5 bg-white/60 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Director’s Message */}
          <div className="flex flex-col justify-between bg-neutral-50 rounded-xl shadow p-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Director’s Message</h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                “예술이 머무는 곳, 갤러리 가우디움에 오신 것을 환영합니다.
                가우디움(Gaudium)은 라틴어로 ‘기쁨’을 뜻하며, 저희 갤러리는
                예술을 통해 그 기쁨을 함께 나누는 공간입니다. 갤러리 가우디움은
                다양한 전시회를 통해 창의적 가치를 알리고, 예술가와 관객이 함께
                호흡하는 연결의 장이 되고자 합니다. 작은 그림 한 점, 한 사람의
                이야기가 모여 큰 울림을 만들어내듯 이곳에서의 만남이 여러분께
                따뜻한 기억이 되기를 바랍니다. 늘 열려 있는 이 공간에서 예술이
                주는 기쁨과 영감을 함께 나누시길 바랍니다.”
              </p>
            </div>
          </div>

          {/* History */}
          <div className="flex flex-col justify-between bg-neutral-50 rounded-xl shadow p-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">History</h2>
              <ul className="text-neutral-600 text-sm space-y-2">
                {visibleHistory.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            {historyItems.length > 7 && (
              <button
                onClick={() => setShowAll((v) => !v)}
                className="mt-4 self-start inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-3 py-1.5 text-sm hover:bg-neutral-100"
              >
                {showAll ? "접기" : "더 보기"}
              </button>
            )}
          </div>

          {/* Visit Us */}
          <div className="flex flex-col justify-between bg-neutral-50 rounded-xl shadow p-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                주소: 서울 성동구 성수일로 77, 서울숲 IT밸리 207호 <br />
                운영: 평일 12:00~18:30 · 토 12:00~17:00 (일/공휴일 휴무)
                <br />
                <br />
                문의: 010-4789-7697 <br />
                gallery_gaudium@naver.com
              </p>
            </div>
            <a
              href="https://map.naver.com/p/search/%EA%B0%A4%EB%9F%AC%EB%A6%AC%20%EA%B0%80%EC%9A%B0%EB%94%94%EC%9B%80"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-100"
            >
             네이버 지도 길찾기 →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
