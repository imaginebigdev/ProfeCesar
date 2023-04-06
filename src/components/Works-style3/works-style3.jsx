/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import ModalVideo from "react-modal-video";

const WorksStyle3 = () => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio-cr section-padding pb-50">
      <div className="container">
        <div className="row">
          <div className="gallery-mons full-width">
            <div className="items graphic wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <img
                  src="/img/portfolio/cr/1.jpg"
                  alt="image"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(true);
                  }}
                  style={{ cursor: "pointer" }}
                />
                {typeof window !== "undefined" && (
                  <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="link"
                    onClose={() => setOpen(false)}
                  />
                )}
              </div>
            </div>

            <div className="items web brand wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <img
                  src="/img/portfolio/cr/2.jpg"
                  alt="image"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(true);
                  }}
                  style={{ cursor: "pointer" }}
                />
                {typeof window !== "undefined" && (
                  <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="link"
                    onClose={() => setOpen(false)}
                  />
                )}
              </div>
            </div>

            <div
              className="items width2 brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <img
                  src="/img/portfolio/cr/3.jpg"
                  alt="image"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(true);
                  }}
                  style={{ cursor: "pointer" }}
                />
                {typeof window !== "undefined" && (
                  <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="link"
                    onClose={() => setOpen(false)}
                  />
                )}
              </div>
            </div>

            <div
              className="items width2 graphic wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <img
                  src="/img/portfolio/cr/4.jpg"
                  alt="image"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(true);
                  }}
                  style={{ cursor: "pointer" }}
                />
                {typeof window !== "undefined" && (
                  <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="link"
                    onClose={() => setOpen(false)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle3;
