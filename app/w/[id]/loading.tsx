import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default function loading() {
  return (
    <main className="flex w-full flex-col-reverse gap-10 lg:flex-row">
      {/* Sidebar Skeleton */}
      <section className="bg-surface-light dark:bg-surface-dark flex h-screen flex-col items-center overflow-auto px-7 py-10 shadow-xl xl:w-1/4">
        {/* Logo */}
        <Link
          href={"/"}
          className="border-b-accent-foreground w-full border-b-2 pb-2 text-center text-2xl font-bold"
        >
          Walloquence
        </Link>

        {/* Download Button Skeleton */}
        <Skeleton className="mt-6 h-20 w-full rounded-2xl" />

        {/* Colors Skeleton */}
        <div className="mt-5 flex w-full gap-1">
          {[...Array(5)].map((_, idx) => (
            <Skeleton key={idx} className="h-10 w-full rounded-lg" />
          ))}
        </div>

        {/* Uploader Info Skeleton */}
        <div className="mt-5 w-full">
          <Skeleton className="h-5 w-32" />
          <div className="mt-2 flex gap-3">
            <Skeleton className="size-11 rounded-full" />
            <div className="flex flex-col gap-2">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
        </div>

        {/* Tags Skeleton */}
        <Skeleton className="mt-5 h-5 w-20" />
        <div className="mt-5 flex w-full flex-wrap gap-3">
          {[...Array(10)].map((_, idx) => (
            <Skeleton key={idx} className="h-10 w-20 rounded-xl" />
          ))}
        </div>

        {/* Info Skeleton */}
        <Skeleton className="mt-5 h-5 w-16" />
        <div className="mt-5 w-full space-y-4">
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="flex justify-between">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-16" />
            </div>
          ))}
        </div>
      </section>

      {/* Image Skeleton */}
      <section className="relative aspect-square shadow-xl lg:h-screen lg:w-3/4">
        <Skeleton className="h-full w-full" />
      </section>
    </main>
  );
}
