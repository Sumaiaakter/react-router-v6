import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Countries from "./components/Countries/Countries";
import CountryDetail from "./components/CountryDetail/CountryDetail";
import FriendDetails from "./components/FriendDetails/FriendDetails";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import PostDetail from "./components/PostDetail/PostDetail";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="friends" element={<Friends></Friends>} />
        <Route path="friend/:friendId" element={<FriendDetails />} />
        <Route path="posts" element={<Posts></Posts>}>
          <Route path=":postId" element={<PostDetail></PostDetail>}></Route>
        </Route>
        <Route path="countries" element={<Countries></Countries>}></Route>
        <Route
          path="country/:detail"
          element={<CountryDetail></CountryDetail>}
        ></Route>
        <Route path="about" element={<About></About>} />
        <Route path="contact" element={<Contact></Contact>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
