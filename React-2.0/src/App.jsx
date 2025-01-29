import "./App.css";
import ArticleListPage from "./pages/ArticlesList.jsx";
import ArticlePage from "./pages/Article.jsx";
import HomePage from "./pages/home.jsx";
import NotFoundPage from "./pages/NotFound.jsx";
import AboutPage from "./pages/About.jsx";

function App() {
  return (
    <div className="App">
      <h1>My Awesome Blog</h1>
      <div id="page-body">
        <HomePage />
        <AboutPage />
        <ArticleListPage />
        <ArticlePage />
        <NotFoundPage />
      </div>
    </div>
  );
}

export default App;
