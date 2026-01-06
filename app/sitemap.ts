
export default async function sitemap() {
  const routes = [
    "",
  ].map((route) => ({
    url: `${process.env.NEXT_BASE_URL}/${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));


  return [...routes];
}