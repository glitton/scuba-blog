import BlogList from "./BlogList";
import SingleBlog from "./SingleBlog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/singleBlog/:id' element={<SingleBlog />} />
        <Route path='/blogList' element={<BlogList />} />
        <Route path='/' element={<BlogList />} />
      </Routes>
    </Router>
  );
}

export default App;
