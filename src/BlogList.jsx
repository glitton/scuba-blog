import Bio from "./Bio";
import SingleBlog from "./SingleBlog";

const BlogList = () => {
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
          <SingleBlog />
        </ol>
      </main>
      <footer>
        &copy; {new Date().getFullYear()}. Built with React and Vite.
      </footer>
    </div>
  );
};
export default BlogList;
