export default function Marquee() {
  const logos = [
    { src: '/images/agoda.jpg', alt: 'agoda-logo' },
    { src: '/images/genie.jpeg', alt: 'genie-logo' },
    { src: '/images/tame.jpeg', alt: 'tame-logo' },
    { src: '/images/tiket-com.jpg', alt: 'tiket-com-logo' },
    { src: '/images/traveloka.jpeg', alt: 'traveloka-logo' },
    { src: '/images/tripadsor.jpeg', alt: 'tripadsor-logo' },
    { src: '/images/wonderful-indonesia.jpeg', alt: 'wonderful-logo' },
  ];

  return (
    <div className="main__container">
      <section className="enable-animation">
        <div className="marquee">
          {[...Array(2)].map((_, index) => (
            <ul key={index} className="marquee__content" aria-hidden={index === 1}>
              {logos.map((logo, idx) => (
                <div key={idx} className="marquee__item">
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </ul>
          ))}
        </div>
      </section>
    </div>
  );
}
