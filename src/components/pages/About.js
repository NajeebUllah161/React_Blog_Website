import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/about.jpg';
import Timeline from '../Common/Timeline';

class About extends Component {

    render() {
        return (
            //  About
            <div>
                {!(this.props.showHeader) &&
                    <Header
                        title="About Us!"
                        subtitle="IT'S A GREAT STORY"
                        showButton={false}
                        image={image}
                    />
                }

                <Timeline />
                
            </div>
        );
    }
}

export default About;