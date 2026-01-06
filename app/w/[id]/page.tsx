import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import api from "@/lib/api";
import { formatRelativeDate } from "@/lib/format-date";
import { formatToMB } from "@/lib/format-file-size";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const url = `${process.env.NEXT_BASE_URL}/w/${id}`;
  const { data: post } = await api.get.WallpaperDetails(id);

  // 1. Generate a meaningful title from tags
  // We take the first 3 tags to create a descriptive string
  // Example result: "Rutger van de Steeg, trees, snow Wallpaper"
  const tagTitle = post.tags
    .slice(0, 3)
    .map((t: any) => t.name)
    .join(", ");

  const pageTitle = `${tagTitle || "HD Wallpaper"} (${post.resolution}) | Walloquence`;

  // 2. Create a human-readable description
  // Example: "Download this 3500x1907 Rutger van de Steeg wallpaper featuring trees, snow, and mountains. High-quality digital art background."
  const tagList = post.tags
    .slice(0, 5)
    .map((t: any) => t.name)
    .join(", ");
  const description = `Download this ${post.resolution} wallpaper featuring ${tagList}. High-quality ${post.category} background.`;


  return {
    title: pageTitle,
    description: description,
    alternates: { canonical: url },
    openGraph: {
      type: "website", // 'website' is usually safer than 'article' for image pages
      url,
      title: pageTitle,
      description: description,
      siteName: "Walloquence",
    },
    // 4. Add Twitter Card specifically for large preview
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: description,
    },
  };
}

export default async function page({ params }: { params: any }) {
  const { id } = await params;
  const { data } = await api.get.WallpaperDetails(id);
  console.log(data);
  return (
    <main className="flex w-full flex-col-reverse lg:flex-row">
      <section className="bg-surface-light dark:bg-surface-dark lg:2/6 flex flex-col items-center overflow-auto px-4 py-10 shadow-xl lg:h-screen xl:w-1/4">
        <Link
          href={"/"}
          className="border-b-accent-foreground w-full border-b-2 pb-2 text-center text-2xl font-bold"
        >
          Walloquence
        </Link>
        <a
          href={`/api/download?q=${data.path}&file-type=${data.file_type}`}
          className="bg-primary hover:bg-primary-foreground mt-6 flex h-20 w-full items-center justify-between rounded-2xl px-5 py-7 text-xl text-white duration-300"
        >
          <p className="flex flex-col items-start">
            <span>Download</span>
            <span>{data.resolution}</span>
          </p>
          <DownloadIcon className="!size-10" />
        </a>
        {/* COLORS */}
        <div className="border-surface-dark *:border-surface-dark dark:border-surface-light dark:*:border-surface-light mt-5 flex w-full rounded-2xl border-4 *:not-last:border-r-4 *:first:rounded-l-lg *:last:rounded-r-lg">
          {data.colors.map((color: any, idx: number) => (
            <Link
              href={`/search?q=${color}`}
              key={idx}
              className="block h-10 w-full hover:scale-150 hover:rounded-xl hover:border-0"
              style={{
                backgroundColor: color,
              }}
            ></Link>
          ))}
        </div>
        {/* UPLOADER INFO */}
        <div className="mt-5 w-full">
          <h3 className="block w-full text-start font-semibold text-gray-600 dark:text-gray-400">
            UPLOADED BY
          </h3>
          <div className="mt-2 flex gap-3">
            <div className="relative block size-11">
              <Image
                src={data.uploader.avatar["128px"]}
                alt={data.uploader.username}
                fill
                sizes="44px"
                quality={75}
                className="rounded-full object-cover"
              />
            </div>
            <p className="flex flex-col">
              <span className="text-xl font-semibold">
                {data.uploader.username}
              </span>
              <span className="text-base text-gray-600 dark:text-gray-400">
                {formatRelativeDate(data.created_at)}
              </span>
            </p>
          </div>
        </div>
        {/* TAGS */}
        <h3 className="mt-5 block w-full text-start font-semibold text-gray-600 dark:text-gray-400">
          TAGS
        </h3>
        <div className="*:bg-accent *:hover:bg-primary-dark mt-5 flex w-full flex-wrap gap-3 text-base *:rounded-xl *:p-3">
          {data.tags.slice(0, 10).map((tag: any) => (
            <Link href={`/search?q=${tag.name}`} key={tag.id}>
              {tag.name}
            </Link>
          ))}
        </div>
        <h3 className="mt-5 block w-full text-start font-semibold text-gray-600 dark:text-gray-400">
          Info
        </h3>
        <div className="mt-5 w-full space-y-4">
          <p className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">
              &mdash;Purity
            </span>
            <span className="text-primary">{data.purity}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">
              &mdash;Views
            </span>
            <span>{data.views}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">
              &mdash;File-Size
            </span>
            <span>{formatToMB(data.file_size)}</span>
          </p>
        </div>
      </section>
      <section className="relative mx-10 aspect-square shadow-xl lg:h-screen lg:w-3/4">
        <Image
          src={data.path}
          alt="wallpaper"
          fill
          priority
          sizes="auto"
          className="object-contain"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsjvlWDwAFtQJeRS1JBAAAAABJRU5ErkJggg=="
        />
      </section>
    </main>
  );
}
