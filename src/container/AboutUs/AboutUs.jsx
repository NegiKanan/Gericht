import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Founded with a vision to celebrate bold flavors and local ingredients, we have become a destination for those seeking artistry on their plates. Over the years, Gericht has grown into a beloved space where timeless elegance and impeccable service create unforgettable moments for every guest.</p>
        <a href="#awards">
        <button type="button" className="custom__button">Know More</button>
        </a>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Established in 2010, Gericht has been a cornerstone of fine dining, blending tradition with innovation to deliver exceptional culinary experiences.</p>
        <a href='#about'>
        <button type="button" className="custom__button">Know More</button>
        </a>
      </div>
    </div>
  </div>
);

export default AboutUs;