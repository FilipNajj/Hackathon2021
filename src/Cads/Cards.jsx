import React, {Componenet, Component} from 'react'
import Card from './CardUI';

import img1 from '../assets/city.jpg';
import img2 from "../assets/tree.jpg";
import img3 from "../assets/maps.jpg";

class Cards extends Component {
    
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
             <div className="row"> 
                    <div className="col md-4">      
                        <Card imgsrc={img1} title="Text1"/> 
                    </div>
                    <div className="col md-4"> 
                    <Card imgsrc={img2}  title="Text2"/>
                    </div>
                    <div className="col md-4"> 
                    <Card imgsrc={img3}  title="Text3"/>
                    </div>
                </div>
            </div>

        );
    }
}

export default Cards;