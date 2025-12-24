// Cloudflare Pages middleware for Next.js static export
export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  // Handle trailing slashes
  if (!url.pathname.endsWith('/') && !url.pathname.includes('.')) {
    return Response.redirect(`${url.pathname}/`, 301);
  }
  
  // Continue to static assets
  return context.next();
}
