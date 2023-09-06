import BlogList from "./BlogList";
import SingleBlog from "./SingleBlog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/single-blog/:id' element={<SingleBlog />} />
        <Route path='/blog-list' element={<BlogList />} />
        <Route path='/' element={<BlogList />} />
      </Routes>
    </Router>
  );
}

export default App;
