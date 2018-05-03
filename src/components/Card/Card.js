import React, {Component} from 'react';
import $ from 'jquery';
import {TweenLite} from 'gsap';

class Card extends Component {
    // constructor(props){     super(props) } $(this).click(function(){     var x =
    // $(".Card").position();     console.log("Top: " + x.top + " Left: " +
    // x.left); });
    componentDidMount() {
        //  $(this).click(function(){      console.log('clicked') var x =
        // $(this).position(); console.log("Top: " + x.top + " Left: " + x.left); });
        // let x = $(this).find('.size') console.log(x.position())
        // $(this).click(function(){console.log('clicked')}) let x = $(this,
        // ".Card").position(); console.log("Top: " + x.top + " Left: " + x.left);
        // console.log($(this).$('.Card').offset()); var domRect =
        // $(".Card").getBoundingClientRect(); console.log(domRect)
    }

    position(data) {
        console.log(data)
        console.log(this.props)
        
        console.log(data.data.position)
        console.log(data.data.target.parentNode.getBoundingClientRect())
        let currentSize = data.data.position
        let parentSize = data.data.target.parentNode.getBoundingClientRect()
        TweenLite.from($(`.Card:eq(${this.props.index} .size)`), 1 , { top:currentSize.top, left:currentSize.left, width: currentSize.width, height:currentSize.height})
        TweenLite.to($(`.Card:eq(${this.props.index}) .size`), 1 , {top:parentSize.top , left:parentSize.left , width: parentSize.width, height:parentSize.height})
        // let element = $(this).find('.size') let element = $('.Card > .size') // var
        // rect = element.getBoundingClientRect(); // console.log(rect.top, rect.right,
        // rect.bottom, rect.left); let offset = element.offset() console.log('left',
        // offset.left, 'top', offset.top )

    }

    render() {
        return (
            <div className="Card">
                {/* {this.props.title} */}
                <div
                    className='size'
                    style={{
                    background: 'pink',
                    height: '30px',
                    width: '30px'
                }}
                    onClick={(e) => {
                    this.position({
                        name: 'CLICKED_ITEM_DATA',
                        data: {
                            position: e.target.getBoundingClientRect(),
                            target: e.target
                        }
                    })
                }}></div>
            </div>
        )
    }
}

export default Card;