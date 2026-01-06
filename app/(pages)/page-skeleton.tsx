import { Skeleton } from "@/components/ui/skeleton";
import Wrapper from "@/components/web/wrapper";
export default function PageSkeleton() {
  return (
    <>
      <section>
        <Wrapper>
          <div className="mt-5 pt-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {/* Generate skeletons matching your grid exactly */}
              {Array.from({ length: 24 }).map((_, i) => (
                <Skeleton
                  key={i}
                  className="relative aspect-video w-full animate-pulse overflow-hidden rounded-sm"
                  style={{
                    // Reserve exact space to prevent shift
                    minHeight: "0",
                    paddingBottom: "56.25%", // 16:9 aspect ratio
                  }}
                />
              ))}
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
