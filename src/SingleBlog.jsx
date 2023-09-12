import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { createClient } from "contentful";
import Bio from "./Bio";

const SingleBlog = () => {
  const client = createClient({
    space: import.meta.env.VITE_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  });
  const { id } = useParams();

  const [singleBlogPost, setSingleBlogPost] = useState([]);

  useEffect(() => {
    const getSingleBlogById = async () => {
      try {
        const entry = await client.getEntry(id);
        setSingleBlogPost(entry);
      } catch (error) {
        console.log("error");
      }
    };
    getSingleBlogById();
  }, []);

  console.log("single blog", singleBlogPost);
  const { blogTitle, createDate, blogPostContent } =
    singleBlogPost?.fields ?? {};
  // const {
  //   fields: {
  //     blogImage: {
  //       fields: { file: url },
  //     },
  //   },
  // } = singleBlogPost;
  return (
    <div className='global-wrapper'>
      <header className='global-header'>
        <Link to='/blog-list' className='header-link-home'>
          Back to Blog Posts
        </Link>
      </header>
      <div className='back-to-home'>
        <a href='https://glcodeworks.com'>Back to Home</a>
      </div>

      <article className='blog-post'>
        <header>
          <h1>{blogTitle}</h1>

          <p>{createDate}</p>
          <img
            className='blog-image'
            src={singleBlogPost?.fields?.blogImage?.fields?.file.url}
            alt={singleBlogPost?.fields?.blogImage?.fields?.description}
          />
        </header>

        <ReactMarkdown>{blogPostContent}</ReactMarkdown>
        <hr />
        <Link to='/blog-list' className='header-link-home'>
          Back to Blog Posts
        </Link>
        <div className='footer-bio'>
          <Bio />

          <a href='https://www.glcodeworks.com'>Back to Home</a>
        </div>
      </article>

      <nav className='blog-post-nav'>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>previous</li>
          <li>next</li>
        </ul>
      </nav>
      <footer>
        &copy; {new Date().getFullYear()}. Built with React using Vite
      </footer>
    </div>
  );
};
export default SingleBlog;
