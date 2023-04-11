import React from "react";
import NavbarArch from "../../components/Navbar-arch/navbar-arch";
import IntroWithSlider from "../../components/Intro-with-slider/intro-with-slider";
import Numbers from "../../components/Numbers/numbers";
import Blogs2 from "../../components/blogs/Blogs2/blogs2";
import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import Services4 from "../../components/Services4/services4";

import WorksStyle3 from "../../components/Works-style3/works-style3";
import FullTestimonials from "../../components/Full-testimonials/full-testimonials";
import AboutIntro from "../../components/About-intro";
import AboutUs from "../../components/About-us/about-us";
import AboutUs2 from "../../components/About-us2/about-us2";
import AboutUs3 from "../../components/About-us3/about-us3";
import AboutUs4 from "../../components/About-us4/about-us4";
import AboutUs5 from "../../components/About-us5/about-us5";
import AboutUs6 from "../../components/About-us6/about-us6";
import Works4 from "../../components/Works4/works4";
import ContactForm from "../../components/Contact-form/contact-form";
import ContactArch from "../../components/Contact-arch/contact-arch";
import ShowcasesFullScreenCircleSlide from "../../components/Showcases-full-screen-circle-slide/showcases-full-screen-circle-slide";
import PageHeader from "../../components/Page-header/page-header";
import Video2 from "../../components/Video2/video2";
import Projects from "../../components/Projects/Projects";
const Homepage1 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <DarkTheme>
      <NavbarArch navbarRef={navbarRef} theme="themeD" />
      <IntroWithSlider sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <AboutIntro />
        <WorksStyle3 />
        <Projects />
        <ContactArch />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default Homepage1;
