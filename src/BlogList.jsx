/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
// import { createClient } from "contentful";
import Bio from "./Bio";
import { Link } from "react-router-dom";

const blogQuery = `
query {
  blogCollection {
    items {
      blogTitle
      createDate
      blogSummary
    }
  }
}
`;

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  // const client = createClient({
  //   space: import.meta.env.VITE_SPACE_ID,
  //   accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  // });
  const spaceId = import.meta.env.VITE_SPACE_ID;
  const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ blogQuery }),
      })
      .then((response) => response.json())
      .then((json) => console.log("data", json.data));
  }, []);

  if (!blogPosts) {
    return "Loading ...";
  }

  // useEffect(() => {
  //   const getAllBlogEntries = async () => {
  //     try {
  //       const entries = await client.getEntries({
  //         content_type: "blog",
  //         order: "-fields.createDate",
  //       });
  //       // console.log(typeof entries.items[0].fields.createDate);
  //       setBlogPosts(entries);
  //     } catch (error) {
  //       console.log("error");
  //     }
  //   };
  //   getAllBlogEntries();
  // }, []);

  return (
    <div className='global-wrapper'>
      <header className='global-header'>
        <h1 className='main-heading'>Scuba Diving Adventures</h1>
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
              const { blogTitle, createDate, blogSummary } = post.fields;
              return (
                <article className='post-list-item' key={post.sys.id}>
                  <header>
                    <Link to={`/single-blog/${post.sys.id}`}>
                      <h2>
                        <span>{blogTitle}</span>
                      </h2>
                    </Link>

                    <small>{createDate}</small>
                  </header>
                  <section>
                    <p>{blogSummary}</p>
                  </section>
                </article>
              );
            })}
          </li>
        </ol>
      </main>
      <footer>
        &copy; {new Date().getFullYear()}. Built with React using Vite
      </footer>
    </div>
  );
};
export default BlogList;
