// src/pages/exhibition/page.jsx
import React, { useState, useEffect, useRef } from "react";

/* ===============================
   데이터 (요청하신 CURRENT/UPCOMING 그대로 반영)
   =============================== */
const CURRENT_EXHIBITIONS = [
  {
    id: "2025-solo-Leeh",
    title: "바다가 길을 알려줄거야 · Lee Haa",
    subtitle: "Group Exhibition",
    dates: "Sep. 04 〜 Sep. 08, 2025",
    location: "Gallery GAUDIUM, Seoul",
    poster: "/images/exhibitions/current/poster.jpg", // 포스터 1장
    photos: [
      "/images/exhibitions/current/scene_1.jpg",
      "/images/exhibitions/current/scene_2.jpg",
      "/images/exhibitions/current/scene_3.jpg",
      "/images/exhibitions/current/scene_4.jpg",
      "/images/exhibitions/current/scene_5.jpg",
    ],
    description:
      "바다가 길을 알려줄거야 온라인 전시에 이어 오프라인전시가 갤러리 가우디움에서 연결됩니다.",
  },
];

const UPCOMING_EXHIBITIONS = [
  {
    id: "2025-solo-12",
    title: "Lee Haa Solo Exhibition",
    dates: "Dec. 2025",
    body: "이하작가의 ‘이방인과 여행자’ 시리즈외 다수의 신작들이 선보일 예정입니다.",
  },
  {
    id: "2025-Group-12",
    title: "Gaudium Prelude",
    dates: "Dec. 2025",
    body:
      "이하, 타이미, 오지우, 김성우, 윤주휘 강채화, 김상현, 김지향, 박기람, 박은경, 신승혜, 오현정, 이채묵, 장도경, Cecil Kim",
  },
];

/* Past는 국제갤러리 스타일: 카드 → 클릭 시 모달(Introduction/Photos 탭) */
const PAST_EXHIBITIONS = [
  {
    id: "2025-09-leehaa",
    title: "9인 9색전, 25.09",
    period: "Sep 4 〜 Sep 8, 2025",
    poster: "/images/exhibitions/past/250904.jpg",
    intro: "갤러리 가우디움의 기획 그룹전으로 9명의 작가가 참여했습니다.",
    photos: [
      
       "/images/exhibitions/past/past_photo/250904/250904_1.jpg",
        "/images/exhibitions/past/past_photo/250904/250904_2.jpg",
         "/images/exhibitions/past/past_photo/250904/250904_3.jpg",
          "/images/exhibitions/past/past_photo/250904/250904_4.jpg",
           "/images/exhibitions/past/past_photo/250904/250904_5.jpg",
            "/images/exhibitions/past/past_photo/250904/250904_6.jpg",
    ],
  },
   {
    id: "2025-06-9colors",
    title: "9인 9색전, 25.08",
    period: "Aug 28 〜 Sep 1, 2025",
    poster: "/images/exhibitions/past/250828.jpg",
    intro: "갤러리 가우디움의 기획 그룹전으로 9명의 작가가 참여했습니다.",
    photos: [
       "/images/exhibitions/past/past_photo/250828/250828_1.jpg",
      "/images/exhibitions/past/past_photo/250828/250828_2.jpg",
       "/images/exhibitions/past/past_photo/250828/250828_3.jpg",
    ],
    
  },

    {
    id: "2025-06-9colors",
    title: "9인 9색전, 25.07",
    period: "Jul 11 〜 Jul 15, 2025",
    poster: "/images/exhibitions/past/250711.jpg",
    intro: "갤러리 가우디움의 기획 그룹전으로 9명의 작가가 참여했습니다.",
    photos: [
      "/images/exhibitions/past/past_photo/250711/250711_1.jpg",
      "/images/exhibitions/past/past_photo/250711/250711_2.jpg",
      "/images/exhibitions/past/past_photo/250711/250711_3.jpg",
    ],
  },
    {
    id: "2025-06-9colors",
    title: "9인 9색전, 25.06",
    period: "Jun 27 〜 Jul 1, 2025",
    poster: "/images/exhibitions/past/250627.jpg",
    intro: "갤러리 가우디움의 기획 그룹전으로 9명의 작가가 참여했습니다.",
    photos: [
     "/images/exhibitions/past/past_photo/250627/250627_1.jpg",
      "/images/exhibitions/past/past_photo/250627/250627_2.jpg",
       "/images/exhibitions/past/past_photo/250627/250627_3.jpg",
       
    ],
  },
    {
    id: "2025-06-9colors",
    title: "9인 9색전, 25.05",
    period: "May 16  〜 May 20, 2025",
    poster: "/images/exhibitions/past/250516.jpg",
    intro: "갤러리 가우디움의 기획 그룹전으로 9명의 작가가 참여했습니다.",
    photos: [
       "/images/exhibitions/past/past_photo/250516/250516_1.jpg",
      "/images/exhibitions/past/past_photo/250516/250516_2.jpg",
      "/images/exhibitions/past/past_photo/250516/250516_3.jpg",
      "/images/exhibitions/past/past_photo/250516/250516_4.jpg",  
     "/images/exhibitions/past/past_photo/250516/250516_5.jpg",
      "/images/exhibitions/past/past_photo/250516/250516_6.jpg",
    
      
    ],
  },
    {
    id: "2025-06-9colors",
    title: "태동을 막지 마라",
    period: "Apr 25 〜 Apr 30, 2025",
    poster: "/images/exhibitions/past/250425.jpg",
    intro: "이하작가 초대전",
    photos: [
      "/images/exhibitions/past/past_photo/250425/250425_1.jpg",
      "/images/exhibitions/past/past_photo/250425/250425_2.jpg",
      "/images/exhibitions/past/past_photo/250425/250425_3.jpg",
      "/images/exhibitions/past/past_photo/250425/250425_4.jpg",
      "/images/exhibitions/past/past_photo/250425/250425_5.jpg",
       "/images/exhibitions/past/past_photo/250425/250425_6.jpg",
       "/images/exhibitions/past/past_photo/250425/250425_7.jpg",
     "/images/exhibitions/past/past_photo/250425/250425_8.jpg",
     "/images/exhibitions/past/past_photo/250425/250425_9.jpg",
     
    ],
  },
    {
    id: "2025-06-9colors",
    title: "봄이 오는 속삭임",
    period: "Mar 28 〜 Apr 1, 2025",
    poster: "/images/exhibitions/past/250328.jpg",
    intro: "일러스트레이터 그양 초대전 ",
    photos: [
      "/images/exhibitions/past/past_photo/250328/250328_1.jpg",
      "/images/exhibitions/past/past_photo/250328/250328_2.jpg",
      "/images/exhibitions/past/past_photo/250328/250328_3.jpg",
    ],
  },
    {
    id: "2025-06-9colors",
    title: "해피 묘 이어",
    period: "Jan 16  〜 Jan 31, 2025",
    poster: "/images/exhibitions/past/250116.jpg",
    intro: "한국화 기법의 고양이 그림 작가 전시입니다.",
    photos: [
     "/images/exhibitions/past/past_photo/250116/250116_1.jpg",
      "/images/exhibitions/past/past_photo/250116/250116_2.jpg",  
       "/images/exhibitions/past/past_photo/250116/250116_3.jpg",  
        "/images/exhibitions/past/past_photo/250116/250116_4.jpg",  
         "/images/exhibitions/past/past_photo/250116/250116_5.jpg",  
          "/images/exhibitions/past/past_photo/250116/250116_6.jpg",  
     
    ],
  },
    {
    id: "2024-11-group",
    title: "오색빛, 다섯개의 시선",
    period: "Nov 22  〜 Nov 26, 2024",
    poster: "/images/exhibitions/past/241122.jpg",
    intro: "갤러리 가우디움의 기획 그룹전으로 5명의 작가가 참여했습니다.",
    photos: [
      "/images/exhibitions/past/past_photo/241122/241122_1.jpg",
     "/images/exhibitions/past/past_photo/241122/241122_2.jpg",
     "/images/exhibitions/past/past_photo/241122/241122_3.jpg",
     "/images/exhibitions/past/past_photo/241122/241122_4.jpg",
     "/images/exhibitions/past/past_photo/241122/241122_5.jpg",
     "/images/exhibitions/past/past_photo/241122/241122_6.jpg",
     
    ],
  },
    {
    id: "2024-10-solo",
    title: "고양이와의 시간",
    period: "Oct 4 〜 Oct 10, 2024",
    poster: "/images/exhibitions/past/241004.jpg",
    intro: "갤러리 가우디움의 개관기획 전시는 구지희대표의 개인전 '고양이와의 시간, 일상의 기적'입니다.\n작가는 오랜 시간 함께해온 고양이들과의 교감을 통해,\n일상의 사소한 순간 속에서 발견되는 따뜻한 기적을 화폭에 담았습니다.\n 작품 속 고양이의 시선과 몸짓은 단순한 반려동물을 넘어,\n삶을 비추는 거울이자 예술적 영감의 원천이 됩니다.\n이번전시는 '예술이 머무는 곳, 기쁨이 머무는 곳'이라는 갤러리 가우디움의 철학과 맞닿아 있으며,\n관람객들에게도 소소환 일상 속에서 발견할 수 있는 특별한 감동을 전합니다. ",
    photos: [
      "/images/exhibitions/past/past_photo/241004/241004_1.jpg",
      "/images/exhibitions/past/past_photo/241004/241004_2.jpg",
      "/images/exhibitions/past/past_photo/241004/241004_3.jpg",
      "/images/exhibitions/past/past_photo/241004/241004_4.jpg",
      "/images/exhibitions/past/past_photo/241004/241004_5.jpg",
      "/images/exhibitions/past/past_photo/241004/241004_6.jpg",
    ],
  },
];

/* ===============================
   메인 페이지
   =============================== */
export default function ExhibitionPage() {
  const [tab, setTab] = useState("current"); // 'current' | 'upcoming' | 'past'

  return (
    <section className="bg-white">
      {/* 헤더 */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-6">
        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-neutral-900">
          Exhibitions
        </h1>
      </div>

      {/* 탭 */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="mt-6 flex gap-8 text-sm md:text-[15px] font-medium">
          {[
            { key: "current", label: "Current" },
            { key: "upcoming", label: "Upcoming" },
            { key: "past", label: "Past" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`relative pb-2 transition-colors ${
                tab === t.key
                  ? "text-neutral-900"
                  : "text-neutral-500 hover:text-neutral-800"
              }`}
            >
              {t.label}
              <span
                className={`absolute left-0 -bottom-[2px] h-[2px] w-full transition-all ${
                  tab === t.key ? "bg-neutral-900" : "bg-transparent"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* 본문 */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        {tab === "current" && <CurrentList data={CURRENT_EXHIBITIONS} />}
        {tab === "upcoming" && <UpcomingList data={UPCOMING_EXHIBITIONS} />}
        {tab === "past" && <PastExhibitions data={PAST_EXHIBITIONS} />}
      </div>
    </section>
  );
}

/* ===============================
   Current — 포스터 + 슬라이드 + 설명
   =============================== */
function CurrentList({ data = [] }) {
  if (!data.length) {
    return <EmptyState text="현재 진행 중인 전시가 없습니다." />;
  }

  return (
    <div className="space-y-16">
      {data.map((ex) => (
        <article
          key={ex.id}
          className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* 포스터 */}
           <figure className="lg:col-span-4 flex items-center mt-24">
  <div className="overflow-hidden rounded-xl border border-neutral-200 w-full max-w-[420px] mx-auto">
    <img
      src={ex.poster}
      alt={`${ex.title} poster`}
      className="w-full h-auto object-cover"
      draggable={false}
    />
  </div>
  <figcaption className="sr-only">{ex.title}</figcaption>
</figure>


            {/* 슬라이더 + 정보 */}
            <div className="lg:col-span-8 relative rounded-xl overflow-hidden">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-neutral-900">
                {ex.title}
              </h2>
              <p className="mt-1 text-neutral-600">
                {ex.subtitle} · {ex.location}
              </p>
              <p className="text-neutral-600">{ex.dates}</p>

              <div className="mt-6">
                <FadeCarousel images={ex.photos} />
              </div>

              {ex.description && (
                <p className="mt-6 text-neutral-700 leading-relaxed">
                  {ex.description}
                </p>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

/* 간단한 페이드 슬라이드 */
function FadeCarousel({ images = [] }) {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (hover || images.length <= 1) return;
    timerRef.current = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      4000
    );
    return () => timerRef.current && clearInterval(timerRef.current);
  }, [images.length, hover]);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  if (!images.length) return null;

  return (
    <div
      className="relative rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative h-[320px] md:h-[420px]">
        {images.map((src, i) => (
          <img
            key={src + i}
            src={src}
            alt={`exhibition scene ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === i ? "opacity-100" : "opacity-0"
            }`}
            draggable={false}
            loading="lazy"
          />
        ))}
      </div>

      {/* 좌/우 버튼 */}
      <button
        onClick={prev}
        aria-label="previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 grid place-items-center rounded-full bg-black/40 text-white hover:bg-black/60"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 grid place-items-center rounded-full bg-black/40 text-white hover:bg-black/60"
      >
        ›
      </button>

      {/* 인디케이터 */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`go to ${i + 1}`}
            className={`h-2.5 rounded-full ${
              i === index ? "w-6 bg-white" : "w-2.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ===============================
   Upcoming — 텍스트 카드 리스트
   =============================== */
function UpcomingList({ data = [] }) {
  if (!data.length) return <EmptyState text="예정된 전시가 없습니다." />;

  return (
    <div className="space-y-6">
      {data.map((ex) => (
        <article
          key={ex.id}
          className="rounded-xl border border-neutral-200 bg-white p-6 md:p-8"
        >
          <h3 className="text-xl md:text-2xl font-serif font-semibold text-neutral-900">
            {ex.title}
          </h3>
          <p className="mt-1 text-sm text-neutral-600">{ex.dates}</p>
          <p className="mt-4 text-neutral-700 leading-relaxed">{ex.body}</p>
        </article>
      ))}
    </div>
  );
}

/* ===============================
   Past — 포스터 그리드 + 모달(Introduction/Photos)
   =============================== */
function PastExhibitions({ data = [] }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null); // {title, period, intro, photos, poster}
  const [tab, setTab] = useState("intro"); // 'intro' | 'photos'

  const onOpen = (ex) => {
    setCurrent(ex);
    setTab("intro");
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
    setCurrent(null);
  };

  if (!data.length) return <EmptyState text="지난 전시가 아직 없습니다." />;

  return (
    <>
      {/* 카드 그리드 */}
      <section className="my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((ex) => (
            <article
              key={ex.id}
              className="group rounded-xl border border-neutral-200 bg-white overflow-hidden hover:shadow-lg transition"
            >
              {/* 포스터 버튼 */}
              <button
                type="button"
                onClick={() => onOpen(ex)}
                aria-label={`${ex.title} 보기`}
                title={`${ex.title} 보기`}
                className="block w-full text-left"
              >
                <div className="aspect-[3/4] overflow-hidden bg-neutral-100">
                  <img
                    src={ex.poster}
                    alt={`${ex.title} poster`}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </button>

              {/* 텍스트 */}
              <div className="p-4">
                <h4 className="font-semibold text-neutral-900 line-clamp-1">
                  {ex.title}
                </h4>
                <p className="mt-1 text-sm text-neutral-500">{ex.period}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 모달 */}
      {open && current && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="absolute left-1/2 top-1/2 w-[min(1100px,92vw)] max-h-[92vh] -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl overflow-auto p-5"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* 헤더 */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-neutral-900">
                  {current.title}
                </h3>
                <p className="text-sm text-neutral-500">{current.period}</p>
              </div>
              <button
                onClick={close}
                className="rounded-md px-3 py-1.5 text-sm border border-neutral-200 hover:bg-neutral-50"
              >
                Close
              </button>
            </div>

            {/* 탭 */}
            <div className="mt-6 border-b border-neutral-200 flex items-center gap-6">
              {[
                { key: "intro", label: "Introduction" },
                { key: "photos", label: "Photos" },
              ].map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`relative pb-3 text-sm ${
                    tab === t.key
                      ? "text-neutral-900"
                      : "text-neutral-500 hover:text-neutral-800"
                  }`}
                >
                  {t.label}
                  <span
                    className={`absolute left-0 -bottom-[1px] h-[2px] w-full ${
                      tab === t.key ? "bg-neutral-900" : "bg-transparent"
                    }`}
                  />
                </button>
              ))}
            </div>

           {/* 탭 컨텐츠 */}
{tab === "intro" && (
  <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-6">
    <div className="md:col-span-2">
      <div className="aspect-[3/4] overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100">
        <img
          src={current.poster}
          alt={`${current.title} poster`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <div className="md:col-span-3">
      <p className="whitespace-pre-line text-neutral-700 leading-relaxed">
        {current.intro}
      </p>
    </div>
  </div>
)}


            {tab === "photos" && (
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                {(current.photos ?? []).map((src, i) => (
                  <div
                    key={src + i}
                    className="aspect-square overflow-hidden rounded-lg border"
                  >
                    <img
                      src={src}
                      alt={`past photo ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

/* 공통 빈 상태 */
function EmptyState({ text }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-10 text-center text-neutral-600">
      {text}
    </div>
  );
}
