import HeaderPage from "../components/Main/Header"
import Gallery from "../components/Main/Gallery"
import Summary from "../components/Main/Summary"
import PromoImage from "../components/Promo/PromoImage"
export default function Layout() {
    return (
        <div>
            <HeaderPage/>
            <Gallery/>
            <Summary/>
            <PromoImage/>
        </div>
    )
}