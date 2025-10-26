import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './MQ.css';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Header from './components/Navber/Navber';
import { useEffect } from 'react';
function App() {
    useEffect(() => {
        // تأكد أن gtag موجود
        if (window.gtag) {
            window.gtag("event", "page_view", {
                page_path: window.location.pathname,
            });
            console.log("✅ Sent manual page_view event");
        } else {
            console.warn("⚠️ gtag not found yet");
        }
    }, []);
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/portfolio' exact element={<Home />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;