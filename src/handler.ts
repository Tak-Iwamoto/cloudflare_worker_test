export async function handleRequest(request: Request): Promise<Response> {
  const url = 'https://github.com/Tak-Iwamoto'
  const res = await fetch(url)
  return new Response('test', {
    headers: { 'content-type': 'text/html' },
  })
}
