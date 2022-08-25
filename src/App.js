
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Home} from "./pages/Home";
import {Contact} from "./pages/Contact";
import {Profile} from "./pages/Profile";
import { Navbar } from './pages/Navbar';
import {QueryClient,QueryClientProvider} from "@tanstack/react-query";



function App() {
  const client=new QueryClient({
    defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
 });

  return (
    <div className="App">
    <QueryClientProvider client={client}>
     <Router>
     <Navbar/>
    
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/profile" element={<Profile/> }/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="*" element={<h1> Page Not Found</h1>}/>
      </Routes>
   
     </Router>
    </QueryClientProvider>
    
    
   
    </div>
  );
}

export default App;
