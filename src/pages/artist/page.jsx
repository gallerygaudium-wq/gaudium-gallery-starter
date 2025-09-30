import React, { useEffect, useRef, useState } from "react";

{/* ===== Artist 헤더 ===== */}
<header className="max-w-6xl mx-auto px-6 pt-16 pb-8">
  <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-neutral-900">
    Artist
  </h1>

  <nav className="mt-3 flex items-center gap-4 text-sm md:text-base text-neutral-600">
    {/* 앵커로 두 섹션으로 스크롤 이동하고 싶으면 href를 #exclusive / #projects 로 유지 */}
    <a href="#exclusive" className="font-medium hover:text-neutral-900">
      Exclusive Artists
    </a>
    <span className="h-3 w-px bg-neutral-300" />
    <a href="#projects" className="hover:text-neutral-900">
      Projects With
    </a>
  </nav>
</header>



export default function Artist() {

  
  // 대표작 슬라이드 이미지들
  const slides = [
    "/images/leehaa_1.jpg",
    "/images/leehaa_2.jpg",
    "/images/leehaa_3.jpg",
    "/images/leehaa_4.jpg",
    "/images/leehaa_5.jpg",
  ];

  const [i, setI] = useState(0);
  const timerRef = useRef(null);

  const go = (dir) => {
    setI((prev) => (prev + dir + slides.length) % slides.length);
  };

  // 자동재생 (5초)
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setI((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  // 사용자 조작시 자동재생 리셋
  const poke = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setI((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        {/* ===== Exclusive Artist ===== */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink mb-8 text-center">
          Exclusive Artist
        </h2>

        {/* 좌: 작가카드 / 우: 대표작 슬라이드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start mb-16">
          {/* 작가 카드 */}
          <div className="justify-self-center md:justify-self-start w-full max-w-sm">
            <div className="overflow-hidden rounded-xl border border-line mb-3">
              <img
                src="/images/leehaa_portrait.jpg"
                alt="Lee Haa"
                className="w-full h-64 object-cover"
              />
            </div>
            <h4 className="text-lg font-semibold text-ink">Lee Haa</h4>
          </div>

          {/* 대표작 슬라이드 */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-xl border border-line shadow-sm">
              {/* 슬라이드 트랙 */}
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${i * 100}%)` }}
              >
                {slides.map((src, idx) => (
                  <div key={idx} className="min-w-full">
                    <img
                      src={src}
                      alt={`Lee Haa Work ${idx + 1}`}
                      className="w-full h-[360px] md:h-[420px] object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* 좌우 버튼 */}
              <button
                onClick={() => {
                  go(-1);
                  poke();
                }}
                aria-label="Previous"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white shadow p-2"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
              <button
                onClick={() => {
                  go(1);
                  poke();
                }}
                aria-label="Next"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white shadow p-2"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>

              {/* 도트 인디케이터 */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setI(idx);
                      poke();
                    }}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      i === idx ? "bg-purple-700" : "bg-neutral-300"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            <p className="mt-3 text-sm text-soft">
              * 대표작 5점 – 자동재생(5초), 클릭으로 이동 가능
            </p>
          </div>
        </div>

        {/* Projects With */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink mb-10 text-center">
          Projects With
        </h2>
        <div className="space-y-10">
          {/* 5월 그룹전 */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-700">
              2025.05 Group Exhibition
            </h3>
            <p className="text-ink/80">
              이상미, 채현정, 강채화, 윤지영, 최정희, 이현정, 박가람, 박지원, 구지희
            </p>
          </div>

          {/* 6월 그룹전 */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-700">
              2025.06 Group Exhibition 
            </h3>
            <p className="text-ink/80">
              백혜숙, 박예반, 최금곤, 윤혜성, 권미선, 신승혜, 양현숙, 박주현, 이해민
            </p>
          </div>

          {/* 7월 그룹전 */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-700">
              2025.07 Group Exhibition
            </h3>
            <p className="text-ink/80">
              이지성, 권영심, 김성우, 이수향, 천미진, 정다솜, 정현준, 서한나, 구지희
            </p>
          </div>

          {/* 8월 그룹전 */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-700">
              2025.08 Group Exhibition
            </h3>
            <p className="text-ink/80">
              김섭인, 남주희, 김이엘, 박은정, 이미애, 김지향, 신윤지, 김상현, 이유림
            </p>
          </div>

          {/* 9월 그룹전 */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-700">
              2025.09 Group Exhibition
            </h3>
            <p className="text-ink/80">
              이 하, 장도경, 이승비, 이채목, 오현정, 김희정, 오정숙, 박재영, 김윤기
            </p>
          </div>

          {/* 10월 그룹전 */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-700">
              2025.10 Group Exhibition
            </h3>
            <p className="text-ink/80">
              타이미, 박정현, 조유진, 최희주, 윤지선, 김은진, 김란수, 이수연, 안형준
            </p>
          </div>

          {/* 11월 그룹전 */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-700">
              2025.11 Group Exhibition
            </h3>
            <p className="text-ink/80">
              오지우, 백희경, 고희진, 양경혜, 김정은, 문혜영, 함효린, 김은재, 김경원
            </p>
          </div>


          {/* 서울아트쇼 */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-700">
              2025.12 Seoul Art Show
            </h3>
            <p className="text-ink/80">
              이하,타이미, 오지우, 김성우, 윤주휘, 오현정, 박은정, 김지향, 신승혜, 이채목, 장도경, 김상현, 강채화, 박가람, Cecil Kim
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
