
export default function Marquee() {
    return (
      <div className=" main__container">
        <section className="enable-animation">
          <div className="marquee">
            <ul className="marquee__content">
              <div className=" marquee__item">
                <img src='/public/images/agoda.jpg' alt="agoda-logo" />
              </div>
              <div className=" marquee__item">
                <img src='/public/images/genie.jpeg' alt="genie-logo" />
              </div>
              <div className=" marquee__item">
                <img src='/public/images/tame.jpeg' alt="tame-log" />
              </div>
              <div className=" marquee__item">
                <img src='/public/images/tiket-com.jpg' alt="tiket-com-logo" />
              </div>
              <div className=" marquee__item">
                <img src='/public/images/traveloka.jpeg' alt="traveloka-logo" />
              </div>
              <div className=" marquee__item">
                <img src='/public/images/tripadsor.jpeg' alt="tripadsor-logo" />
              </div>
              <div className=" marquee__item">
                <img src='/public/images/wonderful-indonesia.jpeg' alt="wonderful-logo" />
              </div>
            </ul>
  
            <ul aria-hidden="true" className="marquee__content">
            <div className=" marquee__item">
                <img src='/public/images/agoda.jpg' alt="agoda-logo" />
              </div>
              <div className=" marquee__item">
                <img src='/public/images/genie.jpeg' alt="genie-logo" />
              </div>
              <div className=" marquee__item">
                <img src='/public/images/tame.jpeg' alt="tame-log" />
              </div>
              <div className=" marquee__item">
                <img src='/public/images/tiket-com.jpg' alt="tiket-com-logo" />
              </div>
              <div className=" marquee__item">
                <img src='/public/images/traveloka.jpeg' alt="traveloka-logo" />
              </div>
              <div className=" marquee__item">
                <img src='/public/images/tripadsor.jpeg' alt="tripadsor-logo" />
              </div>
              <div className=" marquee__item">
                <img src='/public/images/wonderful-indonesia.jpeg' alt="wonderful-logo" />
              </div>
            </ul>
          </div>
        </section>
      </div>
    );
  }