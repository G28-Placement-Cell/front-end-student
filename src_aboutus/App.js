// import './AboutUs.css'; // Import the CSS file
// import './App.css';
// import React, { useState } from 'react';
// import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';  
// import {RxDotFilled} from 'react-icons/rx';


// import AboutUs from './AboutUs';

// function App() {
//   const slides = [
//     {
//      url: 'https://picsum.photos/800/500'
//     },
//     {
//       url: 'https://picsum.photos/799/500'
//     },
//     {
//       url: 'https://picsum.photos/798/500'
//     },
//     {
//       url: 'https://picsum.photos/797/500'
//     },
// ];
// const [currentIndex, setCurrentIndex] = useState(2);

// const prevSlide = () => {
//   const isFirstSlide = currentIndex === 0;
//   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//   setCurrentIndex(newIndex);
// };

// const nextSlide = () => {
//   const isLastSlide = currentIndex === slides.length - 1;
//   const newIndex = isLastSlide ? 0 : currentIndex + 1;
//   setCurrentIndex(newIndex);
// };

// const goToSlide = (slideIndex) => {
//   setCurrentIndex(slideIndex);
// };



 
//   return (<>
//  <div className='max-w-[800px] h-[500px] w-full m-auto y-16 px-4 relative'>
//  <div style = {{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
//   {/* {left arrow} */}
//   <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//     <BsChevronCompactLeft onClick={prevSlide} size={30}/>
//   </div>
//   {/* {right arrow} */}
//   <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//     <BsChevronCompactRight onClick={nextSlide} size={30}/>
//   </div>
//   </div>
//   <div className='flex top-4 justify-center py-2'>
//   {slides.map((slide,slideIndex) => (
//     <div
//       key={slideIndex}
//       onClick={() => goToSlide(slideIndex)} 
//       className='text-2xl cursor-pointer'>
//       <RxDotFilled/>
//     </div>
//   ))}
//   </div>
// </div>


//     <div className="app">
//       <main>
//         <AboutUs /> 
//       </main>
//     </div>
//     </>
//   );
// }
// // return (
// //   
// // );
// export default App;

import './AboutUs.css'; // Import the CSS file
import './App.css';
import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';

import AboutUs from './AboutUs';

function App() {
  const slides = [
    {
      url: 'https://picsum.photos/800/500',
      text: 'Slide 1 Text',
    },
    {
      url: 'https://picsum.photos/799/500',
      text: 'Slide 2 Text',
    },
    {
      url: 'https://picsum.photos/798/500',
      text: 'Slide 3 Text',
    },
    {
      url: 'https://picsum.photos/797/500',
      text: 'Slide 4 Text',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const onChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='app'>
      {/* <div className='page-container'> */}
        {/* Slideshow taking 75% of the page */}
        <div className="card-header" style={{boxSizing: 'border-box', padding: 0,margin: 0,backgroundColor: '#ffffff'}}>
      <h1 className="title" style={{paddingLeft: '1vw'}}>About Us</h1>
    </div>
    <div className="row">
        <div className="form-group">
          <p className="lead">
                    Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT) is a University
                    established under an Act of Gujarat State Legislature and recognized by the University Grants
                    Commission and Association of Indian Universities. It is a university devoted to the Information and
                    Communication Technology. Established by the Reliance Group, DA-IICT is widely seen as an
                    institution 'with a difference' in terms of its academic programs, faculty profiles and overall
                    ambience. In a short period of fifteen years, it is consistently ranked as one of the best
                    technological institutes in the country in the fields of <b>computer science, electronics and
                    communication engineering and information technology</b>.
          </p>

          <p className="lead">
                    DA-IICT offers a unique B. Tech. Program in Information and Communication Technology, B. Tech (ICT with minors in Computational Science) and four
                    post-graduate programs - M.Tech. (ICT), M.Sc. (IT), M.Sc. (ICT - ARD) and M.Des. (CD). The
                    curriculum of theses programs are carefully designed in consultation with industry experts to ensure
                    that they are relevant to industry and society. DA-IICT is also deeply committed to seeing its
                    students as responsible citizens and its social science courses and the rural internship program are
                    designed to give a strong sense of cultural roots and social questions to the students.
          </p>

            <p className="lead">
                    The Placement Cell at DA-IICT works professionally with the Industry to explore opportunities for
                    DA-IICT graduates for placements. The Cell makes its best efforts to reach out to all sub-sectors of
                    the industry in order to ensure that DA-IICT graduates spread across the industry.
            </p>
        </div>
    </div>
        <div className='' style={{width:'75vw', marginLeft: '12vw',marginTop: '3vh'}}>
          <Carousel
            selectedItem={currentIndex}
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            onChange={onChange}
            infiniteLoop={true}
            emulateTouch={false}
          >
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex}>
                <img src={slide.url} alt={`Slide ${slideIndex}`} />
                <p className='slide-text'>{slide.text}</p>
              </div>
            ))}
          </Carousel>
        </div>
        {/* Content taking the remaining 25% of the page */}
        <div className='content'>
          <AboutUs />
        </div>
      {/* </div> */}
    </div>
  );
}

export default App;

