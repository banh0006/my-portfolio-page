import React, { useState, useEffect } from 'react'
import "../css/ParallaxImage.css"

export default function ParallaxImage() {
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [offset])

    function handleScroll() {
        setOffset(window.pageYOffset)
    }

    return (
        <>
            <div id="home" className="header-image" style={{ backgroundPositionY: offset/4 }}>
                {/* <img src={process.env.PUBLIC_URL + '/images/header-img.jpg'} className="header-image" style={{
                    transform: `translateY(${offset * 0.2}px)`
                    // bottom: offset / 2
                }} /> */}
                {/* <div className="container" style={{zIndex: 3, width: '40vw'}}> */}
                <div className="intro-area">
                  <p className="intro-text">Hey, I'm </p>
                  <p className="intro-name">Thien Banh</p>  
                </div>
            </div>
            
        </>
    )
}