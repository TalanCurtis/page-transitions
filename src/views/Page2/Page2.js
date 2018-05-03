import React, {Component} from 'react';
// import {TweenLite} from 'gsap';
// import {Transition} from 'react-transition-group';
import $ from 'jquery';

class Page2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }
    componentDidMount() {
        // TweenLite.set(".Page2", {opacity:0, x:'-200'}) TweenLite.to(".Page2", 1,
        // {opacity:1, x:'0'})
    }

    position(){
        // console.log('position')
        $(".box1").click(function(){
            var x = $(".box1").position();
            console.log("Top: " + x.top + " Left: " + x.left);
        });
    }

    animations() {
        // const {show} = this.state;
        return(
            <div>

                {/* <Transition in={show} timeout={1000} unmountOnExit>
                    {/* {state => {
                        switch (state) {
                            case 'entering':
                                {
                                    console.log(state)
                                    TweenLite.set(".box1", {opacity:0, x:'00'} )
                                    TweenLite.to(".box1", 1, {opacity:1, x:'10'})
                                }
                                return 'Entering…';
                            case 'entered':
                                return 'Entered!';
                            case 'exiting':
                                {
                                    TweenLite.to(".box1", 1, {opacity:0, x:'0'})
                                }
                                return 'Exiting…';
                            case 'exited':
                                return 'Exited!';
                        }
                    }} 
                </Transition> */}
            </div>
        )
    }

    render() {
        return (
            <div className="Page2">
                Page2 view
                <button
                    onClick={() => {
                    this.setState(state => ({
                        show: !state.show
                    }));
                }}>
                    Toggle
                </button>
                {this.animations()}
                <div
                    className='box1'
                    style={{
                    background: 'red',
                    height: '100px',
                    width: '100px',
                    opacity: '0'
                }}></div>
                <button onClick={()=>this.position()}>Pos</button>

            </div>
        )
    }
}

export default Page2;