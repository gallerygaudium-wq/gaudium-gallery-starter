import { Link } from "react-router-dom";
import COLLECT_DATA from "../../data/collectData";

export default function CollectListPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Collect</h1>
      <h1 className="text-2xl font-bold mb-6">작품 구매를 원하시는 분은 갤러리로 문의주세요</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {COLLECT_DATA.map((item) => (
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
