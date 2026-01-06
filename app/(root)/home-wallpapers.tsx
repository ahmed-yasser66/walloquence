import Wrapper from "@/components/web/wrapper";
import api from "@/lib/api";
import HomeGrid from "./home-grid";
import { Skeleton } from "@/components/ui/skeleton";

export default async function HomeWallpapers() {
  const data = await api.get.topList();
  return (
    <section>
      <Wrapper>
        <p className="mb-7 text-2xl font-black sm:text-3xl">
          Toplist wallpapers
        </p>
        <HomeGrid images={data.data} />
      </Wrapper>
    </section>
  );
}
export function HomeWallpapersSkeleton() {
  return (
    <Wrapper>
      <p className="mb-7 text-2xl font-black sm:text-3xl">Toplist wallpapers</p>
      <div className="grid-container space-y-5">
        {[4, 4, 5, 5, 6].map((count, rowIndex) => (
          <div
            key={rowIndex}
            className="row"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${count}, 1fr)`,
              gap: "18px",
            }}
          >
            {Array.from({ length: count }).map((_, i) => (
              <div
                key={i}
                className="relative aspect-video w-full overflow-hidden rounded-sm"
              >
                <Skeleton className="h-full w-full" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
