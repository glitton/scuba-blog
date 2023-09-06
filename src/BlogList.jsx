/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { createClient } from "contentful";
import Bio from "./Bio";

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const client = createClient({
    space: import.meta.env.VITE_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  });

  useEffect(() => {
    const getAllBlogEntries = async () => {
      try {
        const entries = await client.getEntries({
          content_type: "blog",
          order: "-fields.createDate",
        });
        // console.log(typeof entries.items[0].fields.createDate);
        setBlogPosts(entries);
      } catch (error) {
        console.log("error");
      }
    };
    getAllBlogEntries();
  }, []);

  return (
    <div className='global-wrapper'>
      <header className='global-header'>
        <h1 className='main-heading'>
          <a href='/blog/'>Scuba Diving Adventures</a>
        </h1>
      </header>
      <div className='back-to-home'>
        <a href='https://glcodeworks.com'>Back to Home</a>
      </div>
      <main>
        <div className='bio'>
          <Bio />
        </div>
        <ol style={{ listStyle: "none" }}>
          <li>
            {blogPosts?.items?.map((post) => {
              return (
                <article className='post-list-item' key={post.sys.id}>
                  <header>
                    <h2>
                      <span>{post.fields.blogTitle}</span>
                    </h2>
                    <small>{post.fields.createDate}</small>
                  </header>
                  <section>
                    <p>{post.fields.blogSummary}</p>
                  </section>
                </article>
              );
            })}
          </li>
        </ol>
      </main>
      <footer>
        &copy; {new Date().getFullYear()}. Built with React using Vite.
      </footer>
    </div>
  );
};
export default BlogList;
