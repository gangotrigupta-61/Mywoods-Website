import { Routes, Route, Link } from "react-router-dom";
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

function App(){
  return(
    <>

    <Header/>

    <hr />

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