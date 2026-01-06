import { useCallback, useEffect, useRef, useState } from "react";

interface UseInfiniteScrollProps<T> {
  fetchData: (page: number) => Promise<{
    data: T[];
    meta: {
      total: number;
      per_page: number;
      last_page: number;
      current_page: number;
    };
  }>;
  initialPage?: number;

  enabled?: boolean;
}

export function useInfiniteScroll<T>({
  fetchData,
  initialPage = 1,
  enabled = true,
}: UseInfiniteScrollProps<T>) {
  const [data, setData] = useState<T[]>([]);
  const [meta, setMeta] = useState<any>({});
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef<HTMLDivElement>(null);

  // Initial data fetch
  useEffect(() => {
    // if (!enabled) return;

    const fetchInitialData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchData(initialPage);
        setData(result.data);
        setMeta(result.meta);
        setCurrentPage(initialPage);
        setHasMore(initialPage < result.meta.last_page);
      } catch (error) {
        console.error("Failed to load initial results:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // fetchInitialData();
  }, [enabled, initialPage]);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const nextPage = currentPage + 1;
      const result = await fetchData(nextPage);

      setData((prev) => [...prev, ...result.data]);
      setMeta(result.meta);
      setCurrentPage(nextPage);
      setHasMore(nextPage < result.meta.last_page);
    } catch (error) {
      console.error("Failed to load more results:", error);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, hasMore, isLoading, enabled, fetchData]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [loadMore, hasMore, isLoading]);

  return {
    data,
    meta,
    isLoading,
    hasMore,
    observerTarget,
    currentPage,
  };
}
