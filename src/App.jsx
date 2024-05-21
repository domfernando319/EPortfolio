
// import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
// import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

// const App = () => {

//   const MainContent = () => {
//     <>
//       <Hero/>
//       <About/>
//       <Experience/>
//       <Tech/>
//       <Works/>
//       {/* <Feedbacks/> */}
//       <div className='relative z-0'>
//         <Contact/>
//         <StarsCanvas />

//       </div>
//     </>
//   }
//   const location = useLocation();

//   return (

//     <BrowserRouter>
//       <div className='relative z-0 bg-primary'>
//         <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
//           <Navbar/>
//           {/* <Hero/> */}
//         </div>
//         {/* <Hero/>
//         <About/>
//         <Experience/>
//         <Tech/>
//         <Works/> */}
//         {/* <Feedbacks/> */}
//         {/* <div className='relative z-0'>
//           <Contact/>
//           <StarsCanvas />

//         </div> */}
//         <Routes>
//           <Route path="/">
//             {location.hash === '#blog' ? <div>Blog</div> : <MainContent />}
//           </Route>
//         </Routes>
//       </div>
//     </BrowserRouter>
//   )
// }

// export default App

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, ArticleCard } from './components';
import { styles } from './styles';
import { blogs } from './constants';
import { motion } from 'framer-motion';

const MainContent = () => (
  <>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
    {/* <Feedbacks /> */}
    <div className='relative z-0'>
      <Contact />
      <StarsCanvas />
    </div>
  </>
);

const Blog = () => (
  <>
    <div className='bg-hero-pattern bg-cover bg-repeat bg-center flex-grow bg-repeat-y'>
      <Navbar />
      <section className='relative w-full mx-auto height-[100%] width-[100%]'>
        <div className={`${styles.paddingX} max-w-7xl max-h-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-24 p-20 justify-items-center`}>
          {blogs.slice().reverse().map((blog, index) => (
            <ArticleCard key={`blog-${index}`} {...blog} />
          ))}
        </div>
      </section>
      
    </div>
   
    {/* max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-20 
      absolute inset-0 top-[160px] max-w-7xl mx-auto flex flex-row items-start gap-5
    */}
  </>
);

const Content = () => {
  const location = useLocation();
  
  return (
    <Routes>
      <Route path="/" element={location.hash === '#blog' ? <Blog/> : <MainContent />} />
    </Routes>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          
          <Content />
        </div>
        
      </BrowserRouter>
      <div>
        <footer style={{ background: 'white', height: '100px' }}></footer>
      </div>
    </>
  );
};

export default App;
