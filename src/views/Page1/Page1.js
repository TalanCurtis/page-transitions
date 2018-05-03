import React, {Component} from 'react';
// import {TweenLite} from 'gsap';
import Card from '../../components/Card/Card';

class Page1 extends Component{

    componentDidMount(){
        // TweenLite.set(".Page1", {opacity:0, x:'-200'})
        // TweenLite.to(".Page1", 1, {opacity:1, x:'0'})
    }
    render(){
        // const list = [1,2,3,4,5]

        // let myList = list.map((x,i)=>(<Card key={i} title={x} index={i}/>))
        return(
            <div className="Page1"> Page1 view 
                {/* {myList} */}

            </div>
        )
    }
}

export default Page1;