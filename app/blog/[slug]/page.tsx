import { markdownToHtml } from "@/lib/markdown";
import { getAllPosts } from "@/lib/posts";


export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  // incoming arg must be of object shape: { params: { slug: string } } 
  // directly destructure the incoming argument, "{ params }". 
  // Means, "take the params property off the incoming object and give it to me directly.”
  // left with params = { slug: string }, so can do params.slug = "string"
  const { slug } = await params; // destructuring
  const posts =  getAllPosts();
  const post = posts.find((p) => p.slug === slug); //returns the first post where the post.slug === param.slug. slug = markdown file name, like: "my-first-post.md" → slug = "my-first-post"
  if (!post) {
    return <div>Not found</div>;
  }

  const htmlContent = await markdownToHtml(post.content);

  return  (
    <div>
      <title>{post.title}</title>
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm mb-4 text-gray-500">{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}