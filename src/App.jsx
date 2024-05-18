
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
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar />
      <section className='relative w-full h-screen mx-auto'>
        <div className={`${styles.paddingX} absolute inset-0 top-[160px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          {blogs.slice().reverse().map((blog, index) => (
            <ArticleCard key={`blog-${index}`} {...blog} />
          ))}
        </div>
      </section>
    </div>
    
    
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
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        
        <Content />
      </div>
    </BrowserRouter>
  );
};

export default App;
