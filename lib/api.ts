import fetchHandler from "./fetchHandler";

const baseUrl = 'https://wallhaven.cc/api/v1'
const api = {
  get: {
    latest: () => fetchHandler(`${baseUrl}/search?apikey=${process.env.NEXT_PUBLIC_API_KEY}`),
    topList: () => fetchHandler(`${baseUrl}/search?apikey=${process.env.NEXT_PUBLIC_API_KEY}&sorting=toplist`,),
    hot: () => fetchHandler(`${baseUrl}/search?apikey=${process.env.NEXT_PUBLIC_API_KEY}&sorting=hot`),
    searchResults: (q: string, page: number = 1) => fetchHandler(`${baseUrl}/search?q=${q}&page=${page}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`),
    WallpaperDetails: (id: string) => fetchHandler(`${baseUrl}/w/${id}?apikey=${process.env.NEXT_PUBLIC_API_KEY}`),
    random: () => fetchHandler(`https://wallhaven.cc/api/v1/search?sorting=random&apikey=${process.env.NEXT_PUBLIC_API_KEY}`),
    search: (q: string, page: number) => fetchHandler(
      `https://wallhaven.cc/api/v1/search?q=${q}&page=${page}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
    )
  }
}
export default api;