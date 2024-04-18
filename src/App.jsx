import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Character from './components/Character'
import CharacterList from "./components/CharacterList";
import Home from "./components/Home"
const App = () => {
  // const [searchQuery, setSearchQuery] = useState('');
  return (
   <Router>
    <Navbar /> {/*searchQuery={searchQuery} setSearchQuery={setSearchQuery}  */}
    <Routes>
      <Route path="/home" element={<Home />} />
       <Route path="/character" element={<CharacterList />} />{/*searchQuery={searchQuery} */}
      <Route path="/character/:characterId" element={<Character />} />
    </Routes>
   </Router>
  // <div>Home</div>
  )
}
export default App ;