import ROUTES from "@/routes/routes";
import Image from "next/image";
import Link from "next/link";

export interface IImage {
  id: string;
  url: string;
  short_url: string;
  views: number;
  favorites: number;
  source: string;
  purity: string;
  category: string;
  dimension_x: number;
  dimension_y: number;
  resolution: string;
  ratio: string;
  file_size: number;
  file_type: string;
  created_at: string;
  colors: string[];
  path: string;
  thumbs: {
    large: string;
    original: string;
    small: string;
  };
}
export interface IImages {
  images: IImage[];
}

const rows = [4, 4, 5, 5, 6];
export default function HomeGrid({ images }: IImages) {
  return (
    <div className="grid-container space-y-5">
      {rows.map((count, rowIndex) => {
        // calculate start and end based on previous row counts
        const start = rows.slice(0, rowIndex).reduce((sum, c) => sum + c, 0);
        const rowImages = images.slice(start, start + count);
        return (
          <div
            key={rowIndex}
            className="row grid gap-5"
            style={{
              gridTemplateColumns: `repeat(${count}, 1fr)`,
            }}
          >
            {rowImages.map((img, i) => (
              <Link
                href={ROUTES.IMAGE_DETAILS(img.id)}
                className="shadow-l relative aspect-video w-full overflow-hidden rounded-sm hover:scale-105 duration-300"
                key={i}
                aria-label="image"
              >
                <Image
                  src={img.thumbs.small}
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="auto"
                  priority
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsjvlWDwAFtQJeRS1JBAAAAABJRU5ErkJggg=="
                />
              </Link>
            ))}
          </div>
        );
      })}
    </div>
  );
}
