import React, {useEffect} from 'react';
import AOS from 'aos';
import './index.css';
import 'aos/dist/aos.css';
import Header from './components/Header'
import Home from "./components/Hero"
import Cards from './components/Cards'
import Portal from './components/Portal'
import Contact from './Contact.js'


const App = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className=''>
            <Portal />
            <Header />
            <Home />
            <Contact />
            <Cards />

        </div>
    )
}

export default App;