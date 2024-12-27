import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Product from './pages/Product';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App(){
    return (
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                 <Route index element={<Home />} />
                 <Route path="Login" element={<Login />} />
                 <Route path="contact" element={<Contact />} />
                 <Route path="*" element={<Product />} />
                </Route>
            </Routes>
          </BrowserRouter>
          );
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)