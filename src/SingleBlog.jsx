import Bio from "./Bio";

const SingleBlog = () => {
  return (
    <>
      <article className='blog-post'>
        <header>
          <h1>Blog Post Title</h1>
          <p>blog post date</p>
        </header>
        <section>Blog post content</section>
        <hr />
        <footer>
          <Bio />
        </footer>
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
    </>
  );
};
export default SingleBlog;
