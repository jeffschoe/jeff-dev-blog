import { getAllPosts } from "@/lib/posts";
import Link from "next/link"; //handles client-side navigation


//When someone visits /blog, this function runs.
export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-3xl font-semibold">Blog</h1>
      {posts.map((post) =>(
        <div key={post.slug}>
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

/*
User visits /blog
BlogPage() runs
getAllPosts() reads markdown files
You get an array of posts
.map() turns each into a link
Page renders
*/