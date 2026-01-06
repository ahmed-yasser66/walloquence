import { Suspense } from "react";
import Hero from "./hero";
import HomeWallpapers, { HomeWallpapersSkeleton } from "./home-wallpapers";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Suspense fallback={<HomeWallpapersSkeleton />}>
          <HomeWallpapers />
        </Suspense>
      </main>
    </>
  );
}
