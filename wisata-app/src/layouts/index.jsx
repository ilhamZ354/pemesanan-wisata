import HeaderPage from "../components/Main/Header"
import Gallery from "../components/Main/Gallery"
import Summary from "../components/Main/Summary"
import PromoImage from "../components/Promo/PromoImage"
import Carusoul from "../components/Main/Carusoul"
import Bottom from "../components/Main/Bottom"
import NavbarLayout from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
export default function Layout() {
    return (
        <div>
            <NavbarLayout/>
            <HeaderPage/>
            <Gallery/>
            <Summary/>
            <PromoImage/>
            <Carusoul/>
            <Bottom/>
            <Footer/>
        </div>
    )
}