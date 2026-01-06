import Image from "next/image";
import Link from "next/link";
import { Gem } from "lucide-react";
import Wrapper from "@/components/web/wrapper";
import ROUTES from "@/routes/routes";
import ToplistInfiniteScroll from "./toplist-client";
import api from "@/lib/api";
import { IImage } from "@/app/(root)/home-grid";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import PageSkeleton from "../page-skeleton";

export default async function Page() {
  return (
    <>
      {/* Header shows immediately */}
      <header>
        <Wrapper>
          <div className="flex flex-col justify-center gap-3 pt-7">
            <p className="flex items-center gap-3 text-3xl font-bold">
              <Gem
                size={45}
                color="#b760f0"
                className="-rotate-[21deg]"
                aria-hidden="true"
              />
              <span className="dark:text-shadow-[1px_2px_4px_black]">
                Toplist
              </span>
            </p>
            <p className="text-base font-semibold">
              Last month's most popular uploads.
            </p>
          </div>
        </Wrapper>
      </header>

      {/* Grid with data - no suspense, no loading state, no shift */}
      <Suspense fallback={<PageSkeleton />}>
        <RenderResult />
      </Suspense>
    </>
  );
}

async function RenderResult() {
  const initialResponse = await api.get.topList();
  const initialData = initialResponse.data || [];

  return (
    <section>
      <Wrapper>
        <div className="mt-5 pt-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {initialData.map((img: IImage, index: number) => (
              <Link
                key={img.id}
                href={ROUTES.IMAGE_DETAILS(img.id)}
                className="relative aspect-video w-full overflow-hidden rounded-sm"
                aria-label={`View image ${img.id}`}
              >
                <Image
                  src={img.thumbs.small}
                  alt=""
                  fill
                  className="object-cover object-top transition-transform hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  quality={75}
                  priority={index < 4}
                  fetchPriority={index === 0 ? "high" : undefined}
                  loading={index < 4 ? "eager" : "lazy"}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsjvlWDwAFtQJeRS1JBAAAAABJRU5ErkJggg=="
                />
              </Link>
            ))}
          </div>

          <ToplistInfiniteScroll enabled={initialData.length > 0} />
        </div>
      </Wrapper>
    </section>
  );
}
