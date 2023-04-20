import React from 'react';
import { About, Skills, Footer, Header, Work, Testimonials } from './container';
import { Navbar } from "./components";
import "./App.scss";
const App = () => {
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

export default App;