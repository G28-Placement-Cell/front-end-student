import React from 'react';
import './AboutUs.css'
import Devs from './developer';
import logo from './logo.svg';

function AboutUs() {
  return (<>
  <div className="page">
    {/* <div className="card-header">
                            <h1 className="title">Director's Message</h1>
    </div>
    <div className="row">
      <div className="form-group">
      <p className="lead">
              DA-IICT is the first University in the country to offer Undergraduate and
              Postgraduate Programs in Information and Communication
              Technology. The curricula of these programs are reviewed continuously
              and fine-tuned to meet the needs of the versatile industry and the latest
              research areas.
            </p>
            <p className="lead">
                The students are not only given rigorous academic exposure in every
                way possible but are also encouraged to develop as ethically and
                morally strong individuals. The rigorous learning process at DAIICT is
                based on the current and emerging needs of the industry and research
                areas, which in turn enables the students to take up diverse roles in
                industry and research organizations. The learning environment
                exposes the students to every opportunity that would help them gain
                an edge an edge over others and help them succeed in their profession.
              </p>
          </div> */}
    {/* </div> */}

    {/* <div className="card-header">
      <h1 className="title">About Us</h1>
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
    </div> */}
          
    <div className="card-header">
      <h1 className="title">Placement Highlights</h1>
    </div>
    <div className="rows">
        <div className="form-group-dd">
          <img
            src="http://placement.daiict.ac.in/img/2016/statistics/stats19-20/highest_package.png"
            alt="Highest Package"
          />
        </div>
        <div className="form-group-dd">
          <img
            src="http://placement.daiict.ac.in/img/2016/statistics/stats19-20/students_placed.png"
            alt="Students Placed"
          />
        </div>
        <div className="form-group-dd">
          <img
            src="http://placement.daiict.ac.in/img/2016/statistics/stats19-20/average_package.png"
            alt="Students Placed"
          />
        </div>
        <div className="form-group-dd">
          <img
            src="http://placement.daiict.ac.in/img/2016/statistics/stats19-20/dream_offers.png"
            alt="Students Placed"
          />
        </div>
    </div>

    <h1  className = "heading_style">Our Team</h1>
    <div className = "row1">
          <Devs
            imgsrc = {logo}
            Name = "Mike Ross"
            title = "ID"
            email = "abc@gmail.com"
          />

          <Devs
            imgsrc = {logo}
            Name = "Mike Ross"
            title = "ID"
            email = "abc@gmail.com"
          />

          <Devs
            imgsrc = {logo}
            Name = "Mike Ross"
            title = "ID"
            email = "abc@gmail.com"
          />

          <Devs
            imgsrc = {logo}
            Name = "Mike Ross"
            title = "ID"
            email = "abc@gmail.com"
          />

          <Devs
            imgsrc = {logo}
            Name = "Mike Ross"
            title = "ID"
            email = "abc@gmail.com"
          />

          <Devs
            imgsrc = {logo}
            Name = "Mike Ross"
            title = "ID"
            email = "abc@gmail.com"
          />

          <Devs
            imgsrc = {logo}
            Name = "Mike Ross"
            title = "ID"
            email = "abc@gmail.com"
          />

          <Devs
            imgsrc = {logo}
            Name = "Mike Ross"
            title = "ID"
            email = "abc@gmail.com"
          />

          <Devs
            imgsrc = {logo}
            Name = "Mike Ross"
            title = "ID"
            email = "abc@gmail.com"
          />

          <Devs
            imgsrc = {logo}
            Name = "Mike Ross"
            title = "ID"
            email = "abc@gmail.com"
          />

          <Devs
            imgsrc = {logo}
            Name = "Mike Ross"
            title = "ID"
            email = "abc@gmail.com"
          />

    </div>
    </div>
  </>);
  
}

export default AboutUs;