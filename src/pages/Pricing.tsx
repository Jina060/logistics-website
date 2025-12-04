import Header from "../components/Header";
import Priceh from "../components/Priceh";
import Footer from "../components/Footer";
import PriceCards from "../components/PriceCards";


const Pricing: React.FC = () => {
    return (
        <main>
            <Header />
            <Priceh />
            <PriceCards />
            <Footer />
        </main>
    )
}

export default Pricing;