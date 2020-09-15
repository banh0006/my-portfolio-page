import React from 'react'
import '../../css/ImageCard.css'
import { Button } from 'reactstrap'

export default function ImageCard({ currentProject, toggleDetailsModal, toggleDemoModal, setCurrentProject }) {
    const handleDetailsButtonClick = () => {
        console.log(currentProject)
        setCurrentProject(currentProject)
        toggleDetailsModal()
    }

    const handleDemoButtonClick = () => {
        setCurrentProject(currentProject)
        toggleDemoModal()
    }

    return (
        <div className="img-card">
            <div className="slider-text">
                <h3>{currentProject.projectName}</h3>
            </div>
            <div className="content">
                <p>
                   {currentProject.projectDescription}
                </p>
                <div className="buttons">
                    <Button color="info" onClick={handleDetailsButtonClick}>Details</Button>
                    <Button color="info" onClick={handleDemoButtonClick}>Demo</Button>
                </div>
            </div>
        </div>
    )
}
