import React, {Component} from 'react';
import {TweenLite} from 'gsap';

class Page1 extends Component{

    componentDidMount(){
        TweenLite.set(".Page1", {opacity:0, x:'-200'})
        TweenLite.to(".Page1", 1, {opacity:1, x:'0'})
    }

    render(){
        return(
            <div className="Page1"> Page1 view </div>
        )
    }
}

export default Page1;