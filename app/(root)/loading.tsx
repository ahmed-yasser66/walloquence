import { Skeleton } from "@/components/ui/skeleton";
import Wrapper from "@/components/web/wrapper";

export default function loading() {
  const rows = [4, 4, 5, 5, 6];
  return (
    <>
      <section className="relative mb-10 h-screen px-8 pt-20 pb-16">
        {/* Header Skeleton */}
        <div className="relative z-10 mx-auto max-w-5xl space-y-10 text-center">
          <div className="space-y-4">
            <Skeleton className="mx-auto h-16 w-3/4 md:h-20 lg:h-24" />
            <Skeleton className="mx-auto h-16 w-2/3 md:h-20 lg:h-24" />
          </div>
        </div>
        {/* Search Skeleton */}
        <div className="relative mx-auto mt-10 max-w-3xl">
          <div className="dark:bg-surface-dark/80 relative flex items-center overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-700/50">
            <div className="px-6">
              <Skeleton className="h-6 w-6" />
            </div>
            <Skeleton className="my-5 h-6 w-48" />
            <div className="absolute right-2 rounded-xl border border-gray-100 bg-gray-50 p-1.5 dark:border-gray-700 dark:bg-gray-800/80">
              <Skeleton className="h-9 w-20 rounded-lg" />
            </div>
          </div>
        </div>
        {/* Tags Skeleton */}
        <Wrapper className="mt-10 flex w-full flex-wrap justify-center gap-5">
          {Array.from({ length: 22 }).map((_, index) => (
            <Skeleton
              key={index}
              className="h-10 rounded-full"
              style={{
                width: `${Math.floor(Math.random() * (160 - 80) + 80)}px`,
              }}
            />
          ))}
        </Wrapper>
      </section>
      <Wrapper>
        <p className="mb-7 text-2xl font-black sm:text-3xl">
          Toplist wallpapers
        </p>
        <div className="grid-container space-y-5">
          {rows.map((count, rowIndex) => (
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
    </>
  );
}
