import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import About from "./routes/About";
import Contact from "./routes/Contact";
import Woods from "./routes/Woods/pages";
import Home from "./routes/Home";
import Header from "./components/compound/Header";
import Footer from "./components/compound/Footer";
import CMS from "./routes/cms";
import CMS2 from "./routes/cms2";
import CMS3 from "./routes/cms3";
import Login from "./routes/login";
import Pagesmain from "./routes/Woods/[id]/pages";
import Register from "./routes/register";

function App(){
  return(
    <>

    <Header/>

    <hr />
         <ToastContainer
        position="top-right"
        autoClose={2000}
      />

    <Routes> 
      
      
   <Route path="/" element={<Home/>}/> 
       <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/woods" element={<Woods/>}/>
      <Route
    path="/woods/:id"
    element={<Pagesmain />}
/>

       {/* <Route path="/cms" element={<CMS/>}/>  */}

       <Route path="/cms2" element={<CMS2/>}/> 

        {/* <Route path="/cms3" element={<CMS3/>}/>  */}
        
          <Route path="/login" element={<Login/>}/>
           <Route path="/register" element={<Register/>}/> 
     
    </Routes>

   <Footer/>

   
   
    </>
  )
}

export default App;


// function App() {
//   return <h1>Hello React</h1>;
// }

// export default App;