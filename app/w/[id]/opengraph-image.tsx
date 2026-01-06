import api from '@/lib/api';
import { ImageResponse } from 'next/og';
// Import your API function

// 1. REMOVE 'edge' runtime. Use default Node.js for better compatibility with APIs/Buffers
// export const runtime = 'edge'; 

export const alt = 'Wallpaper Preview';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: { id: string } }) {
  const { id } = await params;

  // 1. Fetch Data
  const { data: post } = await api.get.WallpaperDetails(id);
  
  // Use Large thumb. Fallback to full path.
  // CRITICAL: Ensure this URL is accessible!
  const targetImage = post.thumbs.small || post.path;

  // 2. MANUALLY FETCH THE IMAGE (Bypass Hotlink Protection)
  // We fetch it here server-side, then convert to buffer
  let imageBuffer: ArrayBuffer | null = null;
  
  try {
    const res = await fetch(targetImage);
    if (res.ok) {
      imageBuffer = await res.arrayBuffer();
    } else {
      console.error("Failed to fetch image from Wallhaven:", res.status);
    }
  } catch (e) {
    console.error("Error fetching image:", e);
  }

  // 3. Convert to Data URL (Base64)
  // This embeds the image data directly, so the ImageResponse engine doesn't need to fetch it again.
  const imgData = imageBuffer 
    ? `data:image/jpeg;base64,${Buffer.from(imageBuffer).toString('base64')}`
    : null; // If fetch failed, we will show a fallback

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1a1a1a', // Dark background
          position: 'relative',
        }}
      >
        {/* BACKGROUND IMAGE */}
        {imgData ? (
          <img
            src={imgData}
            alt={post.id}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.6, // Dim it so text is readable
            }}
          />
        ) : (
          // Fallback if Wallhaven blocks us completely
          <div style={{ color: 'white', fontSize: 20 }}>No Image Available</div>
        )}

        {/* TEXT OVERLAY */}
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            textShadow: '0 4px 20px rgba(0,0,0,0.9)',
          }}
        >
          <div style={{ fontSize: 70, fontWeight: 900, letterSpacing: '-0.02em' }}>
            {post.resolution}
          </div>
          <div style={{ fontSize: 30, marginTop: 10, opacity: 0.9, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
             Walloquence
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}