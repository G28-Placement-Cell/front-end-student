// import React from 'react';
// import '../CSS_files/aboutUs.css';
// import Devs from '../Components/Devs';
// import logo from '../Components/logo.svg';
// import { useState } from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
// import { Carousel } from 'react-responsive-carousel';

// function AboutUs() {
//     const slides = [
//         {
//           url: 'https://picsum.photos/800/500',
//           text: 'Slide 1 Text',
//         },
//         {
//           url: 'https://picsum.photos/799/500',
//           text: 'Slide 2 Text',
//         },
//         {
//           url: 'https://picsum.photos/798/500',
//           text: 'Slide 3 Text',
//         },
//         {
//           url: 'https://picsum.photos/797/500',
//           text: 'Slide 4 Text',
//         },
//       ];
    
//       const [currentIndex, setCurrentIndex] = useState(0);
    
//       const onChange = (index) => {
//         setCurrentIndex(index);
//       };
//   return (<>
//   <div className="page">
//   {/* </div><div className="card-header" style={{boxSizing: 'border-box', padding: 0,margin: 0,backgroundColor: '#ffffff'}}> */}
//       <h1 className="title2" style={{paddingLeft: '1vw'}}>About Us</h1>
  
//     <div className="row">
//         <div className="form-group">
//           <p className="lead">
//                     Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT) is a University
//                     established under an Act of Gujarat State Legislature and recognized by the University Grants
//                     Commission and Association of Indian Universities. It is a university devoted to the Information and
//                     Communication Technology. Established by the Reliance Group, DA-IICT is widely seen as an
//                     institution 'with a difference' in terms of its academic programs, faculty profiles and overall
//                     ambience. In a short period of fifteen years, it is consistently ranked as one of the best
//                     technological institutes in the country in the fields of <b>computer science, electronics and
//                     communication engineering and information technology</b>.
//           </p>

//           <p className="lead">
//                     DA-IICT offers a unique B. Tech. Program in Information and Communication Technology, B. Tech (ICT with minors in Computational Science) and four
//                     post-graduate programs - M.Tech. (ICT), M.Sc. (IT), M.Sc. (ICT - ARD) and M.Des. (CD). The
//                     curriculum of theses programs are carefully designed in consultation with industry experts to ensure
//                     that they are relevant to industry and society. DA-IICT is also deeply committed to seeing its
//                     students as responsible citizens and its social science courses and the rural internship program are
//                     designed to give a strong sense of cultural roots and social questions to the students.
//           </p>

//             <p className="lead">
//                     The Placement Cell at DA-IICT works professionally with the Industry to explore opportunities for
//                     DA-IICT graduates for placements. The Cell makes its best efforts to reach out to all sub-sectors of
//                     the industry in order to ensure that DA-IICT graduates spread across the industry.
//             </p>
//         </div>
//     </div>
//         <div className='slides1' style={{width:'75vw', marginLeft: '12vw',marginTop: '3vh'}}>
//           <Carousel
//             selectedItem={currentIndex}
//             showArrows={false}
//             showStatus={false}
//             showThumbs={false}
//             onChange={onChange}
//             infiniteLoop={true}
//             emulateTouch={false}
//           >
//             {slides.map((slide, slideIndex) => (
//               <div key={slideIndex}>
//                 <img src={slide.url} alt={`Slide ${slideIndex}`} />
//               </div>
//             ))}
//           </Carousel>
//         </div>
    
    
//     <div className="card-header">
//       <h1 className="title">Placement Highlights</h1>
//     </div>
//     <div className="rows">
//         <div className="form-group-dd">
//           <img
//             src="http://placement.daiict.ac.in/img/2016/statistics/stats19-20/highest_package.png"
//             alt="Highest Package"
//           />
//         </div>
//         <div className="form-group-dd">
//           <img
//             src="http://placement.daiict.ac.in/img/2016/statistics/stats19-20/students_placed.png"
//             alt="Students Placed"
//           />
//         </div>
//         <div className="form-group-dd">
//           <img
//             src="http://placement.daiict.ac.in/img/2016/statistics/stats19-20/average_package.png"
//             alt="Students Placed"
//           />
//         </div>
//         <div className="form-group-dd">
//           <img
//             src="http://placement.daiict.ac.in/img/2016/statistics/stats19-20/dream_offers.png"
//             alt="Students Placed"
//           />
//         </div>
//     </div>

//     <h1  className = "heading_style">Our Team</h1>
//     <div className = "row1">
//           <Devs
//             imgsrc = {logo}
//             Name = "Mike Ross"
//             title = "ID"
//             email = "abc@gmail.com"
//           />

//           <Devs
//             imgsrc = {logo}
//             Name = "Mike Ross"
//             title = "ID"
//             email = "abc@gmail.com"
//           />

//           <Devs
//             imgsrc = {logo}
//             Name = "Mike Ross"
//             title = "ID"
//             email = "abc@gmail.com"
//           />

//           <Devs
//             imgsrc = {logo}
//             Name = "Mike Ross"
//             title = "ID"
//             email = "abc@gmail.com"
//           />

//           <Devs
//             imgsrc = {logo}
//             Name = "Mike Ross"
//             title = "ID"
//             email = "abc@gmail.com"
//           />

//           <Devs
//             imgsrc = {logo}
//             Name = "Mike Ross"
//             title = "ID"
//             email = "abc@gmail.com"
//           />

//           <Devs
//             imgsrc = {logo}
//             Name = "Mike Ross"
//             title = "ID"
//             email = "abc@gmail.com"
//           />

//           <Devs
//             imgsrc = {logo}
//             Name = "Mike Ross"
//             title = "ID"
//             email = "abc@gmail.com"
//           />

//           <Devs
//             imgsrc = {logo}
//             Name = "Mike Ross"
//             title = "ID"
//             email = "abc@gmail.com"
//           />

//           <Devs
//             imgsrc = {logo}
//             Name = "Mike Ross"
//             title = "ID"
//             email = "abc@gmail.com"
//           />

//           <Devs
//             imgsrc = {logo}
//             Name = "Mike Ross"
//             title = "ID"
//             email = "abc@gmail.com"
//           />
//     </div>
//     </div>
//   </>);
  
// }

// export default AboutUs;

import React, { useState } from 'react';
import { useTransition, a } from 'react-spring';
import '../style/aboutUs.css'
import campus from '../images/campus.svg';
import img1 from '../images/access_time.svg'
import img2 from '../images/update.svg'
import img3 from '../images/education.svg'
import img4 from '../images/wallet.svg'
import img5 from '../images/forum.svg'
import img6 from '../images/feedback.svg'
import ProfileCard from '../components/ProfileCard';
import { HStack, VStack } from '@chakra-ui/react';
const slides = [
  // {
  //   id: 1,
  //   name: "John Doe",
  //   role: "Frontend Developer",
  //   image: "https://via.placeholder.com/150",
  // },
  // {
  //   id: 2,
  //   name: "Alice Brown",
  //   role: "Backend Developer",
  //   image: "https://via.placeholder.com/150",
  // },
  // {
  //   id: 3,
  //   name: "David Lee",
  //   role: "AI Modeler",
  //   image: "https://via.placeholder.com/150",
  // },
  // {
  //   id: 4,
  //   name: "Grace Robinson",
  //   role: "Tester",
  //   image: "https://via.placeholder.com/150",
  // },
  // {
  //   id: 5,
  //   name: "Mark Turner",
  //   role: "Documentation Specialist",
  //   image: "https://via.placeholder.com/150",
  // },
  // Add more team members here
];


const AboutUs = () => {
  const [index, set] = useState(0);

  const profiles = [
    {
      name: 'Julie L. Arsenault',
      username: 'Programmer',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },
        { icon: 'fa-instagram', url: '#' },
      ],
    },
    {
      name: 'Frank A. Lopes',
      username: 'Programmer',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(30).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },
        { icon: 'fa-instagram', url: '#' },
      ],
    },
    {
      name: 'James M. Hinkle',
      username: 'Programmer',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(28).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },
        { icon: 'fa-instagram', url: '#' },
      ],
    },
    {
      name: 'Maria C. Boucher',
      username: 'Programmer',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(27).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },
        { icon: 'fa-instagram', url: '#' },
      ],
    },
    {
      name: 'Rasheed A. Harrison',
      username: 'Programmer',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },
        { icon: 'fa-instagram', url: '#' },
      ],
    },
    {
      name: 'Karen I. McCluskey',
      username: 'Programmer',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(25).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },
        { icon: 'fa-instagram', url: '#' },
      ],
    },
    {
      name: 'Michael K. Bayne',
      username: 'Programmer',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(24).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },
        { icon: 'fa-instagram', url: '#' },
      ],
    },
    {
      name: 'Josephine S. Darakjy',
      username: 'Programmer',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },
        { icon: 'fa-instagram', url: '#' },
      ],
    },
    {
      name: 'Eddie L. Johnson',
      username: 'Programmer',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(22).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },
        { icon: 'fa-instagram', url: '#' },
      ],
    },
    {
      name: 'Chloe A. Roberts',
      username: 'Programmer',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(20).jpg',
      socialLinks: [
        { icon: 'fa-github', url: '#' },
        { icon: 'fa-linkedin', url: '#' },
        { icon: 'fa-instagram', url: '#' },
      ],
    },
    {
      name: 'Thomas A. Anderson',
      username: 'Programmer',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).jpg',
      socialLinks: [{ icon: 'fa-github', url: '#' }, { icon: 'fa-linkedin', url: '#' }, { icon: 'fa-instagram', url: '#' }],
    },
    {
      name: 'Cynthia J. Olson',
      username: 'Programmer',
      imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(16).jpg',
      socialLinks: [{ icon: 'fa-github', url: '#' }, { icon: 'fa-linkedin', url: '#' }, { icon: 'fa-instagram', url: '#' }],

    }

  ];




  const transitions = useTransition(slides[index], {
    from: { opacity: 0, transform: 'translate3d(-50%, 0, -200px) scale(0.8)' },
    enter: { opacity: 1, transform: 'translate3d(0%, 0, 0) scale(1)' },
    leave: { opacity: 0, transform: 'translate3d(50%, 0, -200px) scale(0.8)' },
  });

  const nextSlide = () => set((state) => (state + 1) % slides.length);
  const prevSlide = () => set((state) => (state - 1 + slides.length) % slides.length);

  return (
    <div>
      <div class="a">
      <h1>Bridging Dreams with Careers</h1>
      <p>At DA-IICT, we believe in fostering excellence in education and empowering our students to achieve their full potential. We are committed to providing a world-class learning environment that nurtures innovation, creativity, and problem-solving skills.
      </p>
  </div>

      {/* <div className='b' >
        <p>
                     Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT) is a University
                     established under an Act of Gujarat State Legislature and recognized by the University Grants
                     Commission and Association of Indian Universities. It is a university devoted to the Information and
                     Communication Technology. Established by the Reliance Group, DA-IICT is widely seen as an
                     institution 'with a difference' in terms of its academic programs, faculty profiles and overall
                     ambience. In a short period of fifteen years, it is consistently ranked as one of the best
                     technological institutes in the country in the fields of <b>computer science, electronics and
                     communication engineering and information technology</b>.
        </p>

        <p>
                     DA-IICT offers a unique B. Tech. Program in Information and Communication Technology, B. Tech (ICT with minors in Computational Science) and four
                     post-graduate programs - M.Tech. (ICT), M.Sc. (IT), M.Sc. (ICT - ARD) and M.Des. (CD). The
                     curriculum of theses programs are carefully designed in consultation with industry experts to ensure
                     that they are relevant to industry and society. DA-IICT is also deeply committed to seeing its
                     students as responsible citizens and its social science courses and the rural internship program are
                     designed to give a strong sense of cultural roots and social questions to the students.
        </p>
        <p>
                     The Placement Cell at DA-IICT works professionally with the Industry to explore opportunities for
                     DA-IICT graduates for placements. The Cell makes its best efforts to reach out to all sub-sectors of
                     the industry in order to ensure that DA-IICT graduates spread across the industry.
        </p>
      </div> */}
    <div class="main-content">
      <h2>About DA-IICT</h2>
      <p>DA-IICT is a premier institution of higher education dedicated to the Information and Communication Technology. Established by the Reliance Group, DA-IICT is widely recognized for its academic rigor, cutting-edge research, and strong industry connections.</p>

      <p>The university offers a comprehensive range of undergraduate, postgraduate, and doctoral programs in the fields of computer science, electronics and communication engineering, and information technology. Our curriculum is designed to meet the evolving needs of the industry, ensuring that our graduates are equipped with the skills and knowledge to succeed in a dynamic and competitive global marketplace.</p>

      <p>DA-IICT is proud of its strong placement record, with graduates consistently securing coveted positions in leading multinational corporations and start-ups. Our Placement Cell actively collaborates with industry partners to provide our students with valuable internship opportunities and access to the latest industry trends.</p>

      <p>Beyond academics, DA-IICT fosters a vibrant campus life that encourages students to explore their interests and participate in a variety of extracurricular activities. Our students are actively involved in research, community engagement, and student organizations, gaining valuable experience that enriches their overall learning experience.</p>

      <p>If you are seeking a challenging and rewarding academic journey that will prepare you for a successful career in the technology industry, DA-IICT is the ideal place for you. Join us and embark on a journey of innovation, collaboration, and personal growth.</p>

      <h2>Our Programs</h2>
      <div class="imagec">
        <img src={campus} alt="DA-IICT Campus Life" className='img2'></img>
      </div>

      <p>DA-IICT offers a diverse range of undergraduate and postgraduate programs in the field of Information and Communication Technology. Our programs are designed to provide students with a strong foundation in the latest theoretical and practical advancements in the field.</p>

      <h3>Undergraduate Programs</h3>
      <ul>
        <li>B.Tech. (Information and Communication Technology)</li>
        <li>B.Tech. (ICT with minors in Computational Science)</li>
      </ul>
    </div>
  

      {/* <div className='c'>
        <img src={line} alt="line" className='line'></img>
      </div> */}

      <div className='d'>
      Your future is our priority. Join DA-IICT for a world of opportunities and Gujarat's unrivaled placements.
      </div>

      <div className='e'>
        We are a team of passionate students from DAIICT College, embarking on this software project assigned by our professor, Saurabh Tiwari. While we may not have years of professional experience, we are enthusiastic and dedicated to delivering a great product under our professor's guidance
      </div>


      <div className='f'>

        <div className='card'>
          <img src={img1} alt="img1" className='img1'></img>
          <h3 className='title'>
            <b>  Use Anytime: </b>
          </h3>
          <p className='disc'>Our website is accessible 24/7, allowing you to check stock patterns and predictions at your convenience. Whether you're an early bird or a night owl, you can access valuable insights whenever it suits you.</p>
        </div>


        <div className='card'>
          <img src={img2} alt="img1" className='img1'></img>
          <h3 className='title'>
            <b>  Real-time Updates: </b>
          </h3>
          <p className='disc'>Stay informed about the latest stock trends and predictions as our platform provides real-time data and analysis, enabling you to make timely decisions.</p>
        </div>


        <div className='card'>
          <img src={img3} alt="img1" className='img1'></img>
          <h3 className='title'>
            <b> Educational Resource:  </b>
          </h3>
          <p className='disc'>Utilize our Newbie Manual to enhance your stock market knowledge. It's a valuable resource for both beginners and experienced investors, offering insights, tips, and tutorials to help you make informed choices.</p>
        </div>


        <div className='card'>
          <img src={img4} alt="img1" className='img1'></img>
          <h3 className='title'>
            <b> Personalized Portfolio: </b>
          </h3>
          <p className='disc'> Create and manage your personalized portfolio effortlessly. Monitor your investments and track their performance over time, all in one place.</p>
        </div>


        <div className='card'>
          <img src={img5} alt="img1" className='img1'></img>
          <h3 className='title'>
            <b> Interactive Community: </b>
          </h3>
          <p className='disc'> Engage with a vibrant community of fellow investors. Share your thoughts, get feedback, and discuss strategies with like-minded individuals through our Comments and Feedback sections.</p>
        </div>



        <div className='card'>
          <img src={img6} alt="img1" className='img1'></img>
          <h3 className='title'>
            <b> User-driven Improvements: </b>
          </h3>
          <p className='disc'>Your feedback matters. We are constantly working to enhance the website based on user input. Your suggestions and comments play a crucial role in shaping the future of our platform.</p>
        </div>
      </div>



      <div className='g'>
        Our Team Members
        </div>


      <div className='h'>

      <section className="vh-400" style={{ backgroundColor: 'white' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
          ))}
        </div>
      </div>
    </section>



      </div>





    </div>
  );
};

export default AboutUs;