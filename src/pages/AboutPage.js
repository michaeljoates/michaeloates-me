import React from 'react';
import Header from '../components/Header';
import Footer from "../components/Footer";
import EducationalHistory from '../components/aboutPageComponents/EducationalHistory';
import ProfessionalHistory from '../components/aboutPageComponents/ProfessionalHistory';


function AboutPage() {
  return (
    <div >
      <Header/>
      <ProfessionalHistory/>
      <EducationalHistory/>
      <Footer/>
    </div>
  );
}

export default AboutPage;
