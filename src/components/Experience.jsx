import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'; // Only this is needed
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800 text-white min-h-screen flex flex-col">
      <div className="container mx-auto text-center flex-grow">
        <h2 className="text-4xl font-bold mb-6">Experience</h2>
        
        {/* Vertical Timeline */}
        <VerticalTimeline>
          {/* First Experience */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="flex flex-col">
              <h3 className="vertical-timeline-element-title text-2xl font-bold text-left">{`Web Development Intern`}</h3>
              <h4 className="vertical-timeline-element-subtitle font-semibold text-left">{`Instiparty Online Pvt Ltd, Viskhapatnam`}</h4>
            </div>
            <p className="text-left">Developed many Web Applications using React js | Reactjs,Tailwind,Nodejs,Expressjs,MongoDB</p>
          </VerticalTimelineElement>

          {/* Second Experience */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="flex flex-col">
              <h3 className="vertical-timeline-element-title text-2xl font-bold text-left">{`Java FullStack Developer Intern`}</h3>
              <h4 className="vertical-timeline-element-subtitle font-semibold text-left">{`Kodnest, Remote`}</h4>
            </div>
            <p className="text-left">Shopnest E-commerce Website | Html,Css,Bootstrap,Javascript,Java,Jdbc,MySQL</p>
          </VerticalTimelineElement>

          {/* Third Experience */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="flex flex-col">
              <h3 className="vertical-timeline-element-title text-2xl font-bold text-left">{`Web Development Intern`}</h3>
              <h4 className="vertical-timeline-element-subtitle font-semibold text-left">{`Internshala, Remote`}</h4>
            </div>
            <p className="text-left">PG Life Website | Html,Css,Bootstrap,MySQL</p>
          </VerticalTimelineElement>

          {/* Fourth Experience */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="flex flex-col">
              <h3 className="vertical-timeline-element-title text-2xl font-bold text-left">{`FullStack Development J2EE Intern`}</h3>
              <h4 className="vertical-timeline-element-subtitle font-semibold text-left">{`RINL-Steel Plant, Viskhapatnam`}</h4>
            </div>
            <p className="text-left">Yard Mangement System | Frontend Development | Html,Css,Bootstrap,Javascript</p>
          </VerticalTimelineElement>

        </VerticalTimeline>

        {/* Back to Home Button */}
        <Link
          to="/"
          className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300 mt-10"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default Experience;
