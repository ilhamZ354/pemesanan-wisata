import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function NavbarLayout() {
  const navbarRef = useRef(null);
  const homeSection = useRef(null);
  const gallerySection = useRef(null);
  const summarySection = useRef(null);
  const promoSection = useRef(null);
  const destinationSection = useRef(null)

  useEffect(() => {
    const navbar = navbarRef.current;
    const homePage = homeSection.current;
    const galleryPage = gallerySection.current;
    const summaryPage = summarySection.current;
    const promoPage = promoSection.current;
    const destinationPage = destinationSection.current;

    const scrollHandler = () => {
      const scrollY = window.scrollY;

      const home = document.querySelector(".home .bg-header")
      const homeTop = home.offsetTop;
      const homeHeight = home.offsetHeight;

      const gallery = document.querySelector(".gallery");
      const galleryTop = gallery.offsetTop;
      const galleryHeight = gallery.offsetHeight;

      const summary = document.querySelector(".summary");
      const summaryTop = summary.offsetTop;
      const summaryHeight = summary.offsetHeight;

      const promo = document.querySelector(".promo");
      const promoTop = promo.offsetTop;
      const promoHeight = promo.offsetHeight;

      const destination = document.querySelector(".destination");
      const destinationTop = destination.offsetTop;
      const destinationHeight = destination.offsetHeight;

      if (scrollY > 0) {
        gsap.to(navbar, {
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          duration: 0.1,
        });
      } else {
        gsap.to(navbar, {
          backgroundColor: "transparent",
          boxShadow: "none",
          duration: 0.1,
        });
      }

      if (scrollY >= homeTop - 100 && scrollY < homeTop + homeHeight) {
        gsap.to(homePage, { color: "rgb(14 165 233)", duration: 0.3 });
      } else {
        gsap.to(homePage, { color: "rgb(55 65 81)", duration: 0.3 });
      }

      if (scrollY >= galleryTop - 100 && scrollY < galleryTop + galleryHeight) {
        gsap.to(galleryPage, { color: "rgb(14 165 233)", duration: 0.3 });
      } else {
        gsap.to(galleryPage, { color: "rgb(55 65 81)", duration: 0.3 });
      }

      if (scrollY >= summaryTop - 200 && scrollY < summaryTop + summaryHeight) {
        gsap.to(summaryPage, { color: "rgb(14 165 233)", duration: 0.3 });
      } else {
        gsap.to(summaryPage, { color: "rgb(55 65 81)", duration: 0.3 });
      }

      if (scrollY >= promoTop - 100 && scrollY < promoTop + promoHeight) {
        gsap.to(promoPage, { color: "rgb(14 165 233)", duration: 0.3 });
      } else {
        gsap.to(promoPage, { color: "rgb(55 65 81)", duration: 0.3 });
      }

      if (scrollY >= destinationTop - 200 && scrollY < destinationTop + destinationHeight) {
        gsap.to(destinationPage, { color: "rgb(14 165 233)", duration: 0.3 });
      } else {
        gsap.to(destinationPage, { color: "rgb(55 65 81)", duration: 0.3 });
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="fixed w-full z-50 top-0 start-0 transition-all"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/images/logo.png" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-sans text-sky-700 font-semibold whitespace-nowrap">
            MasTRIP
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-black outline-1 border border-black hover:bg-black hover:text-white focus:outline-none font-medium rounded-xl text-sm px-4 py-2 text-center transition animation-300"
          >
            Login
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                ref={homeSection}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                ref={gallerySection} // Tambahkan referensi untuk menu Gallery
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#"
                ref={summarySection}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Summary
              </a>
            </li>
            <li>
              <a
                href="#"
                ref={promoSection}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Promo
              </a>
            </li>
            <li>
              <a
                href="#"
                ref={destinationSection}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Destination
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
