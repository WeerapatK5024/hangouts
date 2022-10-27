import Hangout from "./pages/hangout";
import "./App.css";
import { FirebaseContextProvider } from "./firebase/Firebase";
import { BrowserRouter, Routes, Route, useParams, Outlet } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <FirebaseContextProvider>
          <Routes>
            <Route path="*" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="hangout" element={<Hangout />} />
              <Route path="*" element={<>ERROR 404</>} />
            </Route>
          </Routes>
        </FirebaseContextProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;