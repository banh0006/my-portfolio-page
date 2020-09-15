import React, { useState, useEffect } from "react"
import ImageCard from './ImageCard'
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss'
import 'swiper/components/pagination/pagination.scss';
import workData from '../../data/works.json'

SwiperCore.use([EffectCoverflow, Pagination])
export default function SwiperImages({ toggleDetailsModal, toggleDemoModal, setCurrentProject }) {
    const cards = []
    const jsonData = JSON.parse(JSON.stringify(workData))
    jsonData.map((work, index) => {
        cards.push(
            <SwiperSlide>
                <ImageCard currentProject={work} toggleDetailsModal={toggleDetailsModal} 
                    toggleDemoModal={toggleDemoModal} setCurrentProject={setCurrentProject} />
            </SwiperSlide>
        )
    })

    return (
        <Swiper
            pagination
            effect="coverflow"
            spaceBetween={0}
            coverflowEffect= {{
                rotate: 40,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: false
            }}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            >
                { Object.keys(cards).length > 0 && cards}
        </Swiper>
    )
}
