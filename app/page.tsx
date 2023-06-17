import { About, Skills, Footer, Header, Work, Testimonials } from '@/container';
import { Navbar } from "@/components";
const Home = () => {
    return (
        <>
            <div className='app'>
                <Navbar />
                <Header />
                <About />
                <Work />
                <Skills />
                <Testimonials />
                <Footer />
            </div>
        </>
    );
};

export default Home;