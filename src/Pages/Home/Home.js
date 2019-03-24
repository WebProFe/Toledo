import React, { Component } from 'react';
import Hero from '../../Components/Hero/Hero';
import hero from '../../Images/academics.jpeg';
import Footer from '../../Components/Footer/Footer';
import FourCols from '../../Components/FourCol/FourColSection';
import ThreeCol from '../../Components/ThreeCol/ThreeCol';
import Calendar from '../../Components/Calendar/Calendar';
import Collage from '../../Components/Collage/Collage';

export default class extends Component {
  
    render(){
        return(
            <div>
                <Hero
                    image={hero}
                    heading="Educating the Mind and the Heart"
                    description="Inscribciones Abiertas"
                />
                <FourCols/>
                <ThreeCol/>
                <Calendar/>
                <Collage/>
                <Footer/>
            </div>
        )
    }
}
