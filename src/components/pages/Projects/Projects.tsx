import React from 'react';

import Glow from "../../UI/Glow/Glow";
import Footer from "../../elements/Footer/Footer";
import Hero from "../../elements/Hero/Hero";
import Works from "./Works/Works";

import { useAppSelector } from "../../../hooks/common/redux";
import { SELECTED_COLOR } from "../../../configs/config";

import styles from './Projects.module.scss';

const Projects: React.FC = () => {
  const webp = useAppSelector((state) => state.userReducer.webp);

  const filters = ['All', 'Vehicle Wrapping', 'Outdoor Branding', 'Building Wrapping', 'Indoor Branding', 'Exhibition', '3D Signage', 'Event Branding', 'Interior Design', 'Menu Design', '3D Printing & Robotic Milling', 'Identity', 'bar & Restaurants Renovations'];

  const [currentFilter, setCurrentFilter] = React.useState(filters[0]);

  const bgImage1 = webp ? "/services/webp/bg-rectangles-1.webp" : "/services/png/bg-rectangles-1.png";
  const bgImage2 = webp ? "/services/webp/bg-rectangles-3.webp" : "/services/png/bg-rectangles-3.png";
  const bgImage3 = webp ? "/services/webp/bg-rectangles-4.webp" : "/services/png/bg-rectangles-4.png";

  const changeFilter = (filter: string) => {
    setCurrentFilter(filter);
  }

  return (
    <div className={styles.projects}>
      <Hero>
        <img className="bgObject" id={styles.bgObject1} src={bgImage1} alt="bg-rectangles-1"/>
        <img className="bgObject" id={styles.bgObject2} src={bgImage2} alt="bg-rectangles-3"/>
        <img className="bgObject" id={styles.bgObject3} src={bgImage3} alt="bg-rectangles-4"/>
        <Glow customClassName={styles.glow}/>
        <div className={styles.content}>
          <h1 className={`title ${styles.title}`}>Work that we have done</h1>
          <div className={styles.filters}>
            {filters.map((filter) => (
              <div
                className={styles.filter}
                key={filter}
                style={{ backgroundColor: currentFilter === filter ? SELECTED_COLOR : '' }}
                onClick={() => changeFilter(filter)}
              >
                {filter}
              </div>
            ))}
          </div>
        </div>
      </Hero>
      <Works/>
      <Footer/>
    </div>
  );
};

export default Projects;
