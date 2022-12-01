import React from 'react'
import { Carousel } from 'react-bootstrap'


function Slides({ slide, interval }) {
    return (
        <Carousel>
            <Carousel.Item interval={interval}>
                <img
                    className="d-block w-100"
                    src={slide[0]}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={slide[1]}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide[2]}
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    )
}

export default Slides