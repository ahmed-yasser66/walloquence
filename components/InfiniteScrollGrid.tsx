import { ReactNode } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface InfiniteScrollGridProps<T> {
  data: T[];
  meta: any;
  isLoading: boolean;
  hasMore: boolean;
  observerTarget: React.RefObject<HTMLDivElement>;
  renderItem: (item: T, index: number) => ReactNode;
  loadingSkeletonCount?: number;
  gridCols?: string;
  showPageIndicators?: boolean;
  initialPage?: number;
  currentPage: number;
}

export function InfiniteScrollGrid<T>({
  data,
  meta,
  isLoading,
  hasMore,
  observerTarget,
  renderItem,
  loadingSkeletonCount = 12,
  gridCols = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  showPageIndicators = true,
  initialPage = 1,
}: InfiniteScrollGridProps<T>) {
  const itemsPerPage = meta?.per_page || 20;

  return (
    <>
      <div className={`grid ${gridCols} gap-4`}>
        {data.map((item, i) => {
          const itemPage = Math.floor(i / itemsPerPage) + initialPage;
          const isFirstItemOfPage = i % itemsPerPage === 0;
          return (
            <div key={itemPage + "-" + i} className="contents">
              {showPageIndicators && isFirstItemOfPage && (
                <div className="col-span-full my-4 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="h-px flex-1 bg-gray-300 dark:bg-gray-700" />
                  <span className="font-medium">
                    Page {itemPage + 1} of {meta.last_page}
                  </span>
                  <div className="h-px flex-1 bg-gray-300 dark:bg-gray-700" />
                </div>
              )}
              {renderItem(item, i)}
            </div>
          );
        })}
      </div>

      {isLoading && (
        <>
          <div className="py-4">
            <Skeleton className="h-5" />
          </div>

          <div className={`grid ${gridCols} gap-4`}>
            {Array.from({ length: loadingSkeletonCount }).map((_, i) => (
              <Skeleton key={i} className="aspect-video w-full rounded-sm" />
            ))}
          </div>
        </>
      )}

      <div ref={observerTarget} className="h-10" />

      {!hasMore && data.length > 0 && (
        <div className="py-8 text-center text-gray-600 dark:text-gray-400">
          You've reached the end of the results
        </div>
      )}
    </>
  );
}
