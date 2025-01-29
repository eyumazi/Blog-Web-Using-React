import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleListPage from "./pages/ArticlesList.jsx";
import ArticlePage from "./pages/Article.jsx";
import HomePage from "./pages/home.jsx";
import NotFoundPage from "./pages/NotFound.jsx";
import AboutPage from "./pages/About.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>My Awesome Blog</h1>
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticleListPage />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
