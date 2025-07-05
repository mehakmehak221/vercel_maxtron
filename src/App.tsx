import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbars";
// import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Service from "./components/Services";
import AboutUs from "./components/pages/AboutUs";
import Insights from "./components/pages/Insights";
import Industries from "./components/pages/Industries";
import StaffAugmentation from "./components/pages/staffAugmentation";

import "./page.css";
import CaseStudyPage from "./components/pages/CaseStudyPage";
// import InternalPage from "./components/pages/InternalPage";
import { caseStudies } from "./components/elementalComponent/caseStudyData";
import CaseStudy from "./components/pages/CaseStudy";
import InternalPageDetails from "./components/pages/InternalPageDetails";
import Careers from "./components/pages/Careers";
import TokenizePage from "./components/pages/TokenizePage";
import NewHomePage from "./components/pages/NewHomePage";
import FundRaising from "./components/pages/FundRaising";
import AffiliateProgramPage from "./components/pages/AffiliateProgramPage";
import OurTeam from "./components/pages/OurTeam";

const Home: React.FC = () => (
  <div>
    <NewHomePage />
  </div>
);

const About: React.FC = () => (
  <div>
    <AboutUs />
  </div>
);

const Services: React.FC = () => (
  <div>
    <Service />
  </div>
);

const CareersPage: React.FC = () => (
  <div>
    <Careers />
  </div>
);

const Solutions: React.FC = () => <div>Solutions Page</div>;
const Blog: React.FC = () => <div>Blog Page</div>;
const Contact: React.FC = () => (
  <div>
    <ContactForm />
  </div>
);
const Book: React.FC = () => <div>Book a Meeting Page</div>;

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/case-study" element={<CaseStudyPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/fund-raising" element={<FundRaising />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/case-studies" element={<CaseStudy />} />
        <Route path="/tokenization" element={<TokenizePage />} />
        <Route path="/staff-augmentation" element={<StaffAugmentation />} />
        <Route path="/affiliate" element={<AffiliateProgramPage />} />
        {/* <Route
          path="/Maxtron/:title/:id"
          element={<InternalPage caseStudies={caseStudies} />}
        /> */}
        <Route
          path="/Maxtron.ai/case-study/:casestudyName"
          element={<InternalPageDetails caseStudies={caseStudies} />}
        />

        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
