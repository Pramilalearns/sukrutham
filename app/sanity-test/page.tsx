import { client } from "@/lib/sanity"

async function getPosts() {
  return await client.fetch(`*[_type == "post"]{
    title,
    excerpt
  }`)
}

export default async function SanityTestPage() {
  const posts = await getPosts()

  return (
    <div style={{ padding: "40px" }}>
      <h1>Sanity Test Page</h1>

      {posts.map((post: any, index: number) => (
        <div key={index} style={{ marginTop: "20px" }}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  )
}