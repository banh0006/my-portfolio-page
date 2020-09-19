import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import ReactIcon from './ReactIcon'

export default function SkillsIcons( {iconName, iconColor, skillName} ) {
    const [color, setColor] = useState({iconColor})
    const changeBackGroundWhenHover = () => {
        setColor("#ff8c00")
    }

    const revertBackGroundWhenUnhover = () => {
        setColor("#fff")
    }
    
    return (
        <Col className="skill-icon" onMouseOver={changeBackGroundWhenHover} onMouseOut={revertBackGroundWhenUnhover}>
            <Row><ReactIcon iconName={iconName} iconColor={color} /></Row>
            <Row className="skill-name">{skillName}</Row>
        </Col>
    )
}
