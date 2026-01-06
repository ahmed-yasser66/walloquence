import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IImage } from "@/app/(root)/home-grid";
import Wrapper from "@/components/web/wrapper";
import ROUTES from "@/routes/routes";
import api from "@/lib/api";
import SearchInfiniteScroll from "./search-client";
import { Suspense } from "react";
import PageSkeleton from "../page-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const { q } = await searchParams;

  return (
    <>
      <Suspense
        fallback={
          <>
            <header>
              <Wrapper>
                <div className="flex items-center gap-3 py-3.5">
                  <Skeleton className="h-[45px] w-[45px] rounded-full" />

                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-7 w-[280px]" />
                    <Skeleton className="h-7 w-[180px]" />
                  </div>
                </div>
              </Wrapper>
            </header>
            <PageSkeleton />
          </>
        }
      >
        <RenderResult q={q} />
      </Suspense>
    </>
  );
}

async function RenderResult({ q }: { q: string }) {
  const { data, meta } = await api.get.search(q, 1);

  return (
    <>
      <header className="[background:radial-gradient(400px_80px_at_0px_top,_rgba(108,_92,_231,_.3),_transparent)]">
        <Wrapper>
          <div className="flex items-center gap-3 py-3.5">
            <Search size={45} color="#6c5ce7" />
            <p className="text-3xl font-semibold">
              <span>{meta.total || 0} Wallpapers found for </span>
              <span className="text-primary-dark dark:text-primary before:content-['“'] after:content-['”']">
                {q}
              </span>
            </p>
          </div>
        </Wrapper>
      </header>
      <section>
        <Wrapper>
          <div className="mt-5 pt-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {data.map((img: IImage, index: number) => (
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

            {/* Infinite scroll for remaining pages */}
            <SearchInfiniteScroll enabled={data.length > 0} />
          </div>
        </Wrapper>
      </section>
    </>
  );
}
