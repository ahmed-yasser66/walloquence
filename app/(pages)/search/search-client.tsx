"use client";
import Image from "next/image";
import Link from "next/link";
import { RefObject } from "react";

import { IImage } from "@/app/(root)/home-grid";
import { InfiniteScrollGrid } from "@/components/InfiniteScrollGrid";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import ROUTES from "@/routes/routes";
import { useSearchParams } from "next/navigation";

interface ToplistInfiniteScrollProps {
  enabled: boolean;
}

export default function ToplistInfiniteScroll({
  enabled,
}: ToplistInfiniteScrollProps) {
  // Start from page 2 since page 1 is already server-rendered
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const { data, meta, isLoading, hasMore, observerTarget, currentPage } =
    useInfiniteScroll<IImage>({
      fetchData: async (page) => {
        const response = await fetch(`/api/search?q=${q}&page=${page}`);
        return await response.json();
      },
      initialPage: 2, // Start from page 2
      enabled,
    });

  if (!enabled) return null;

  return (
    <InfiniteScrollGrid
      data={data}
      meta={meta}
      isLoading={isLoading}
      hasMore={hasMore}
      observerTarget={observerTarget as RefObject<HTMLDivElement>}
      initialPage={1}
      currentPage={currentPage}
      renderItem={(img: IImage, index: number) => (
        <Link
          href={ROUTES.IMAGE_DETAILS(img.id)}
          className="relative aspect-video w-full overflow-hidden rounded-sm"
          aria-label={`View image ${img.id}`}
        >
          <Image
            src={img.thumbs.small}
            alt={img.id || ""}
            fill
            className="object-cover object-top transition-transform hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            quality={75}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsjvlWDwAFtQJeRS1JBAAAAABJRU5ErkJggg=="
          />
        </Link>
      )}
    />
  );
}
