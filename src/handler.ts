export async function handleRequest(request: Request): Promise<Response> {
  const url = 'https://github.com/Tak-Iwamoto'
  const res = await fetch(url)
  return new Response(res.body, {
    headers: { 'content-type': 'text/html' },
  })
}
