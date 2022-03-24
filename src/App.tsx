import "./App.css";
import theme from "./Theme";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyLibraryPage from "./components/Pages/MyLibraryPage/MyLibraryPage";
import EnterpreneurshipPage from "./components/Pages/EnterpreneurshipPage/EnterpreneurshipPage";
import BookDetailsPage from "./components/Pages/BookDetailsPage/BookDetailsPage";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<MyLibraryPage />}></Route>
            <Route path="/book" element={<BookDetailsPage />}></Route>
            <Route path="/enterpreneurship" element={<EnterpreneurshipPage />}></Route>
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
