import Home from "./pages/Home";
import Memo from "./pages/Memo";
import MenuList from "./pages/MenuList";
import Navbar from "./components/Navbar";
import { HashRouter, Switch, Route } from "react-router-dom";
// 沒有後端就使用 HashRouter
// 有後端就使用 BrowserRouter
export default function App() {
  return (
    <div>
      {/* <Memo /> */}
      {/* HashRouter -> Switch -> Route */}
      <HashRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
          {/* 只有訪問 / 時才顯示 Home，訪問 /menu-list 就不會顯示 */}
            <Home />
          </Route>
          <Route path="/menu-list">
            <MenuList />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}
