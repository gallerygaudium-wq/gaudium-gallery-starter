// src/pages/about/page.jsx
import React, { useRef } from "react";
import { FaInstagram } from "react-icons/fa";
import { SiNaver } from "react-icons/si"; // 네이버 로고

export default function About() {
  const slides = [
    "/images/about_1.jpg",
    "/images/about_2.jpg",
    "/images/about_3.jpg",
    "/images/about_4.jpg",
    "/images/about_5.jpg",
    "/images/about_6.jpg",
    "/images/about_7.jpg",
    "/images/about_8.jpg",
  ];

  const trackRef = useRef(null);

  const scrollByPage = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  const wheelToHorizontal = (e) => {
    const el = trackRef.current;
    if (!el) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    }
  };

  const historyItems = [
    "2024.10 · Gallery Opening",
    "2024.10 · Solo Exhibition: Koo Jee-Hee, <Everyday Miracles>",
    "2025.04 · Invitational Exhibition: Lee Haa, <Don't Disturbe Me>",
    "2025.05–12 · Gallery Project: 9인9색전 (group exhibition series)",
    "2025.07 · Jeju International Art Fair",
    "2025.12 (Planned) · Solo Exhibition: Lee Haa",
    "2025.12 (Planned) · Gaudium Prelude",
    "2025.12 (Planned) · Seoul Art Show, COEX",
  ];

  const programs = [
    {
      img: "/images/exhibition_1.jpg",
      title: "Solo Exhibitions",
      desc:
        "다양한 분야 작가들의 개인전을 정기적으로 개최하여 새로운 시각을 선보입니다.",
    },
    {
      img: "/images/exhibition_2.jpg",
      title: "Group Exhibitions",
      desc:
        "여러 작가들이 함께하는 그룹전을 통해 폭넓은 담론을 제시합니다.",
    },
    {
      img: "/images/exhibition_3.jpg",
      title: "Art Fairs",
      desc:
        "국내외 아트페어에 참여하여 한국 현대미술의 가치를 확장합니다.",
    },
  ];

  return (
    <section className="bg-white">
      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 py-20 text-left" id="about">
        <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-neutral-900">
          About
        </h2>
          <div className="max-w-5xl mx-auto px-6 py-6 text-center" id="about"></div>
        <h2 className="text-3xl md:text-4xl font-bold font-bold text-ink mb-6">
          예술이 머무는 곳, 갤러리 가우디움
        </h2>
        <p className="text-[17px] text-ink/80 leading-relaxed max-w-3xl mx-auto">
          성수동에 위치한 갤러리 가우디움은 2024년 개관 이래, 현대미술의 다양한
          스펙트럼을 소개하며, 예술가와 관람객을 잇는 열린 플랫폼으로 성수동의 문화적 가치를 확장해 나갑니다.
        </p>
      </div>

      {/* Sub Nav */}
      <nav className="sticky top-0 z-20 bg-white/85 backdrop-blur border-y border-line">
        <div className="max-w-6xl mx-auto px-6 h-12 flex items-center gap-6 overflow-x-auto">
         
          <a href="#space" className="text-sm text-ink hover:underline whitespace-nowrap">
            Explore Our Space
          </a>
          <a href="#history" className="text-sm text-ink hover:underline whitespace-nowrap">
            History
          </a>
          <a href="#programs" className="text-sm text-ink hover:underline whitespace-nowrap">
            Programs
          </a>
          <a href="#contact" className="text-sm text-ink hover:underline whitespace-nowrap">
            Contact
          </a>
        </div>
      </nav>

      {/* Space Tour */}
      <div className="bg-gray-50 py-14" id="space">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-serif text-center mb-8">Explore Our Space</h3>
          <div className="relative rounded-2xl shadow-xl bg-white p-5">
            <div
              ref={trackRef}
              onWheel={wheelToHorizontal}
              className="flex flex-nowrap gap-5 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
            >
              {slides.map((src, i) => (
                <div key={i} className="flex-none w-[85%] sm:w-2/3 md:w-1/2 lg:w-1/3 min-w-[260px] snap-start">
                  <div className="overflow-hidden rounded-xl border border-gray-200">
                    <img
                      src={src}
                      alt={`gallery space ${i + 1}`}
                      className="w-full h-[36vh] md:h-[42vh] lg:h-[46vh] object-cover hover:scale-[1.03] transition-transform duration-300"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Nav Buttons */}
            <button
              aria-label="previous"
              onClick={() => scrollByPage(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full w-10 h-10 grid place-items-center shadow z-20"
            >
              ‹
            </button>
            <button
              aria-label="next"
              onClick={() => scrollByPage(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full w-10 h-10 grid place-items-center shadow z-20"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* History */}
      <div id="history" className="max-w-6xl mx-auto px-20 py-16 text-center">
        <h3 className="text-2xl md:text-3xl font-serif mb-6 ">History</h3>
        <ul className="space-y-2.5 text-[15px] text-ink/80 leading-relaxed">
          {historyItems.map((item) => (
            <li key={item} className="border-b border-line/60 pb-2 text-left">{item}</li>
          ))}
        </ul>
      </div>

      {/* Programs */}
      <div id="programs" className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-2xl md:text-3xl font-serif text-center mb-10">Programs</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map(({ img, title, desc }, i) => (
            <article key={i} className="rounded-2xl border border-line bg-white p-6 hover:shadow-md transition flex flex-col">
              <figure className="overflow-hidden rounded-xl mx-auto w-[70%] max-w-[360px]">
                <img src={img} alt={title} className="w-full h-[200px] md:h-[220px] object-cover" loading="lazy" />
              </figure>
              <div className="mt-5 text-center">
                <h4 className="font-semibold text-gray-900 mb-2 text-lg">{title}</h4>
                <p className="text-[15px] text-ink/80 leading-relaxed">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="max-w-5xl mx-auto px-6 pb-16 text-center">
        <h3 className="text-2xl md:text-3xl font-serif mb-6">Contact</h3>
        <p className="text-[15px] text-ink/80 leading-relaxed">
          <b>주소</b> 서울 성동구 성수일로 77, 서울숲 IT밸리 207호
        </p>
           <a
              href="https://map.naver.com/p/search/%EA%B0%A4%EB%9F%AC%EB%A6%AC%20%EA%B0%80%EC%9A%B0%EB%94%94%EC%9B%80"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1 rounded-lg border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-100"
            >
             네이버 지도 길찾기 →
            </a>

        <p className="text-[15px] text-ink/80 leading-relaxed">
          <b>운영 시간</b> 평일 12:00–18:30 · 토요일 12:00–17:00 · 일/공휴일 휴무
        </p>
        <p className="text-[15px] text-ink/80 leading-relaxed">
          <b>문의</b> 010-4789-7697 · gallery_gaudium@naver.com
        </p>
      </div>

      {/* Follow Us */}
      <div className="max-w-5xl mx-auto px-6 pb-20 text-center">
        <h3 className="text-xl font-serif mb-6">Follow Us</h3>
        <div className="flex justify-center gap-8">
          <a
            href="https://www.instagram.com/gallery_gaudium"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-neutral-700 hover:text-pink-600 transition"
          >
            <FaInstagram className="w-6 h-6" />
            Instagram
          </a>
          <a
            href="https://blog.naver.com/gallery_gaudium"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-neutral-700 hover:text-green-600 transition"
          >
            <SiNaver className="w-6 h-6" />
            Blog
          </a>
        </div>
      </div>
    </section>
  );
}
