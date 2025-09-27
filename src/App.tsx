import "./App.css";
import Body from "./body";
import Login from "./login";
import Profile from "./profile";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./feed";
import { Connections } from "./connections";
import { Reuqests } from "./requests";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/requests" element={<Reuqests />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
