import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  Blog,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        {/* <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div> */}

<div className="relative bg-tech bg-cover bg-center bg-no-repeat w-full">
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

  {/* Content (not blurred) */}
  <div className="relative z-10">
    <Tech />
  </div>
</div>

        <Projects />

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
          </div>
        </div>

         {/* Blog section */}
        <div className="bg-blog bg-cover bg-center bg-no-repeat py-10">
          <Blog />
        </div>

        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

