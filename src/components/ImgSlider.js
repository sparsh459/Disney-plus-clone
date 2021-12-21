import React from 'react'
import Slider from "react-slick";
import styled from 'styled-components';

function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <Carousel {...settings}>
            <Wrap>
                <a>
                    <img src="/images/slider-badging.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src="/images/slider-scale.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src="/images/slider-badag.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src="/images/slider-scales.jpg" alt="" />
                </a>
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top: 20px;

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;
        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }


    // the 4 dots below slider showing tye current slide button
    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    // to change the color of the above button white
    li.slick-active button:before {
        color: white;
    }


    // to show part of other images in the sliding part
    .slick-list {
        overflow: initial;
    }



    .slick-prev {
        left: -75px;
    }

    .slick-next {
        right: -75px;
    }
`
const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;

    a {
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;

        img {
            width: 100%;
            height: 100%;
        }
        
        // border when you hover over slider image
        &:hover {
            padding: 0;
            border: 4px solid rgba(249, 249, 249, 0.8);
            transition-duration: 300ms;
        }
    }
`