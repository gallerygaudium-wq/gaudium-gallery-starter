// src/pages/collect/detail.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import COLLECT_DATA from "../../data/collectData";

export default function CollectDetailPage() {
  const { id } = useParams();
  const work = COLLECT_DATA.find((w) => w.id === id);

  if (!work) {
    return (
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-neutral-600">작품을 찾을 수 없습니다.</p>
          <Link to="/collect" className="mt-4 inline-block underline">
            목록으로
          </Link>
        </div>
      </section>
    );
  }

  // ✅ 메인 이미지 상태
  const gallery = Array.from(new Set([work.image, ...(work.photos ?? [])]));
  const [mainImage, setMainImage] = useState(gallery[0]);

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* LEFT: 메인 + 썸네일 */}
          <div className="lg:col-span-3">
            {/* 메인 이미지 */}
            <figure className="rounded-xl overflow-hidden border border-neutral-200">
              <img
                src={mainImage}
                alt={work.title}
                className="w-full h-auto object-cover"
              />
            </figure>

            {/* 썸네일 */}
            {gallery.length > 1 && (
              <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 gap-3">
                {gallery.map((src, i) => (
                  <button
                    key={src + i}
                    onClick={() => setMainImage(src)}
                    className={`border-2 rounded-lg overflow-hidden ${
                      mainImage === src
                        ? "border-neutral-900"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={src}
                      alt={`${work.title} detail ${i + 1}`}
                      className="w-full aspect-square object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: 작품 정보 */}
          <aside className="lg:col-span-2">
            <h1 className="text-2xl font-semibold">{work.title}</h1>
            <p className="mt-1 text-neutral-600">{work.artist}</p>

            {work.note && (
              <p className="mt-4 text-neutral-700 leading-relaxed whitespace-pre-line">
                {work.note}
              </p>
            )}

            <dl className="mt-8 space-y-1 text-sm text-neutral-700">
              <div>
                <dt className="inline font-medium">년도: </dt>
                <dd className="inline">{work.year}</dd>
              </div>
              <div>
                <dt className="inline font-medium">재료: </dt>
                <dd className="inline">{work.material}</dd>
              </div>
              <div>
                <dt className="inline font-medium">사이즈: </dt>
                <dd className="inline">{work.size}</dd>
              </div>
              <div>
                <dt className="inline font-medium">가격: </dt>
                <dd className="inline">{work.price}</dd>
              </div>
            </dl>

            <Link
              to="/collect"
              className="inline-block mt-8 text-sm underline text-neutral-700 hover:text-neutral-900"
            >
              목록으로
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
