import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Feed from "./pages/Feed";
import Login from "./pages/Login";



function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/Feed" element={<Feed/>}></Route>
        </Routes>
      </Router>
      
    );
  }

  export default App;