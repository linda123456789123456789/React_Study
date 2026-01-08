import Home from "./pages/Home";
import Memo from "./pages/Memo";
import MenuList from "./pages/MenuList";
import MenuItem from "./pages/MenuItem";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { HashRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      {/* <Memo /> */}
      <HashRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/menu-list">
            <MenuList />
          </Route>
          <Route path="/menu-item/:id">
            <MenuItem />
          </Route>
          <Route path="*">
            {/* '*'表示除了以上路由之外的所有路由 */}
            <NotFound />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}
