import "./App.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ScrollableCard from "./components/ScrollableCard";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="App">
            <Contact />
            <Nav />
            <Banner />
            <main className="px-20">
                <ScrollableCard />
                <Services />
                <Cards title="Portfolio / Case Study" />
                <Cards title="Developers On Demand" />
            </main>
            <Newsletter />
            <Footer />
        </div>
    );
}

export default App;
