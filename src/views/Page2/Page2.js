import React, {Component} from 'react';
import {TweenLite} from 'gsap';

class Page2 extends Component{
    componentDidMount(){
        TweenLite.set(".Page2", {opacity:0, x:'-200'})
        TweenLite.to(".Page2", 1, {opacity:1, x:'0'})
    }

    render(){
        return(
            <div className="Page2"> Page2 view </div>
        )
    }
}

export default Page2;