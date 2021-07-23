import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

// Re-usable components
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import About from '../pages/About';
import Team from '../pages/Team';

// Common Component
import Clients from '../Common/Clients';
import Contact from './Contact';

class Home extends Component {
    render() {
        return (
            <div>
                <Header
                    title="Welcome to Our Studio!"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image={image}
                />

                <Services
                    showHeader={true}
                />

                <Portfolio
                    showHeader={true}
                />

                <About
                    showHeader={true}
                />

                <Team
                    showHeader={true}
                />

                <Clients />

                <Contact
                    showHeader={true}
                />

            </div>
        );
    }
}

export default Home;