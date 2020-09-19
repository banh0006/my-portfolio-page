import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap'
import '../../css/WorkPage.css'
import SwiperImages from '../common/SwiperImages'
import DetailsModal from '../common/DetailsModal'
import DemoModal from '../common/DemoModal'

//TODO enhance work section with more information.

export default function WorkPage() {
    const [videoModal, setVideoModal] = useState(false);
    const [detailsModal, setDetailsModal] = useState(false)
    const [demoModal, setDemoModal] = useState(false)
    const [currentProject, setCurrentProject] = useState({})

    const toggleVideoModal = () => setVideoModal(!videoModal)
    const toggleDetailsModal = () => setDetailsModal(!detailsModal)
    const toggleDemoModal = () => setDemoModal(!demoModal)
    
    const playMovie = (e) => {
        e.target.play()
    }

    const stopMovie = (e) => {
        e.target.pause()
    }

    return (
        <Container id="work" >
            <Row>
                <Col xs="12"><p className="work-text">Most Recent Project</p></Col>
            </Row>  
            <Row>
                <Col xs="12" className="recent-project">
                    <Row className="project-title">Experify Health</Row>
                    <Row className="project-info">
                        <Col md="6" sm="12">
                            <Row className="project-image">
                                <video onMouseOver={playMovie} onMouseOut={stopMovie} src={process.env.PUBLIC_URL + '/video/Video.mp4'} onClick={toggleVideoModal} />
                                <Modal isOpen={videoModal} toggle={toggleVideoModal} className="my-modal">
                                    <ModalHeader toggle={toggleVideoModal}>Experify Health Mobile Web App</ModalHeader>
                                    <ModalBody>
                                        <video className="modal-video" src={process.env.PUBLIC_URL + '/video/Video.mp4'} onClick={toggleVideoModal} controls />
                                    </ModalBody>
                                </Modal>
                            </Row>
                        </Col>
                        <Col md="6" sm="12">
                            <Row>
                                <div className="project-description">
                                    Experify Health is a mobile web app dedicated to helping improve socialization for 
                                    residents in long term care, retirement homes, and hospitals by providing an easy 
                                    way for residents to find and attend events, moreover, it also allow the volunteer to join, 
                                    plan, manage events in realtime. It was developed with React &#38; Redux in front-end, Node.js &#38;
                                    MySQL in the back-end.
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <div className="video-area">
                <video onMouseOver={playMovie} onMouseOut={stopMovie} src={process.env.PUBLIC_URL + '/video/Video.mp4'} onClick={toggleVideoModal} />
                <Modal isOpen={videoModal} toggle={toggleVideoModal} className="my-modal">
                    <ModalHeader toggle={toggleVideoModal}>Experify Health Mobile Web App</ModalHeader>
                    <ModalBody>
                        <video className="modal-video" src={process.env.PUBLIC_URL + '/video/Video.mp4'} onClick={toggleVideoModal} controls />
                    </ModalBody>
                </Modal>
            </div> */}
            {/* <Row>
                <Col xs="12"><p className="work-text">Other Porjects</p></Col>
            </Row> */}
            {/* <div className="slider-img-area">
                <SwiperImages toggleDetailsModal={toggleDetailsModal} toggleDemoModal={toggleDemoModal} setCurrentProject={setCurrentProject} />
                <DetailsModal currentProject={currentProject} toggle={toggleDetailsModal} modal={detailsModal} />
                <DemoModal currentProject={currentProject} toggle={toggleDemoModal} modal={demoModal} />
            </div> */}
        </Container>
    )
}