import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './MQ.css';
import Home from './Pages/Home/Home';
import MyIp from "./MyIp"
import NotFound from './Pages/NotFound/NotFound';
import Header from './components/Navber/Navber';
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {/* <Route path='/portfolio' exact element={<Home />} /> */}
                <Route path='/portfolio' exact element={<MyIp />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;