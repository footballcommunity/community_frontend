import "./App.css";
import { Route, Routes } from "react-router-dom";
import BoardPage from "./pages/BoardPage";
import HomePage from "./pages/HomePage.js";
import SigninPage from "./pages/SigninPage.js";
import SignupPage from "./pages/SignupPage.js";
import BoardDetailPage from "./pages/BoardDetailPage";
import MyPage from "./pages/MyPage";
import PostPage from "./pages/PostPage.js";
import MatchPostPage from "./pages/MatchPostPage.js";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/board" element={<BoardPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/post" element={<PostPage />} />
      <Route path="/match/post" element={<MatchPostPage />} />
      <Route path="/article/:articleId" element={<BoardDetailPage />} />
    </Routes>
  );
}

export default App;
