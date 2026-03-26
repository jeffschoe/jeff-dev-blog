import { getAllPosts } from "@/lib/posts";
import Link from "next/link"; //handles client-side navigation


//When someone visits /blog, this function runs.
export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <title>Blog Posts</title>
      
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      {posts.map((post) =>(
        <div key={post.slug} className="mb-6 border-b pb-4">
          <Link href={`/blog/${post.slug}`}  className="text-xl font-semibold text-blue-600 hover:underline">
            {post.title}
          </Link>
          <p className="text-sm text-gray-500">{post.date}</p>
          <p className="text-gray-700 mt-1">
            {post.content.slice(0, 150)}{post.content.length > 150 ? "..." : ""}
          </p>
        </div>
      ))}
      <Link
            href="/"
            className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white dark:bg-white dark:text-black"
          >
            Home
          </Link>
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