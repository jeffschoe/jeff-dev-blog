import fs from "fs";
import path from "path";
import matter from "gray-matter";


const postsDirectory = path.join(process.cwd(), "content");
//process -> the root directory where the app was started”

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(".md", ""); //"first-post.md" → "first-post"
    const fullPath = path.join(postsDirectory, fileName); // /content/first-post.md
    const fileContents = fs.readFileSync(fullPath, "utf8"); //get raw markdown text

    const { data, content } = matter(fileContents); // destructuring

    return {
      slug,
      title: data.title,
      date: data.date,
      content,
    };
  
  });

}