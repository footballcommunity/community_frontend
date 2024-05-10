import './App.css';
import {Route, Routes} from "react-router-dom";
import BoardList from "./routes/BoardList";
import Home from "./routes/Home";
import Signin from './routes/Signin';
import ArticleDetails from './routes/ArticleDetails';
import CategoryBoardList from './routes/CategoryBoardList';
import MyPage from './routes/MyPage';
import SearchedBoardList from './routes/SearchedBoardList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/mypage" element={<MyPage/>}/>
      <Route path="/board" element={<BoardList/>}/>
      <Route path="/board/:boardId" element={<CategoryBoardList/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path='/article/:articleId' element={<ArticleDetails/>}/>
      <Route path='/board/search' element={<SearchedBoardList/>}></Route>
    </Routes>
  );
}

export default App;
