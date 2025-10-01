// src/pages/collect/page.jsx (또는 CollectListPage가 있는 파일)
import { Link } from "react-router-dom";
import COLLECT_DATA from "../../data/collectData";

// id에서 숫자만 뽑아내는 헬퍼
const idNum = (id) => Number((id.match(/\d+/) || [0])[0]);

export default function CollectListPage() {
  // 오름차순(4 → 5 → 6 → 7)
  const items = [...COLLECT_DATA].sort((a, b) => idNum(a.id) - idNum(b.id));
  // 최신이 먼저(내림차순) 원하면 위 줄 대신 아래 줄 사용
  // const items = [...COLLECT_DATA].sort((a, b) => idNum(b.id) - idNum(a.id));

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Collect</h1>
      <h1 className="text-2xl font-bold mb-6">작품 구매를 원하시는 분은 갤러리로 문의주세요</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <Link key={item.id} to={`/collect/${item.id}`} className="block">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover rounded shadow"
            />
            <h2 className="mt-2 font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-500">{item.artist}</p>
            <p className="text-sm">{item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
