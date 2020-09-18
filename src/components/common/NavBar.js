import React, { useState, useEffect } from 'react';
import "../../css/NavBar.css"
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { ScrollspyNavLink } from 'reactstrap-scrollspy'

export default function NavBar(props) {
    const [show, setShow] = useState({ ...props.showNav })
    const styles = {
        navBrand: {
            'listStyle': 'none'
        },
    }

    useEffect(() => {
        setShow(props.showNav)
    }, [props.showNav])

    return (
        <React.Fragment>
            <Navbar fixed="top" className={ show === true ? 'active' : 'hidden' }>
                <NavItem className="logo-name" style={styles.navBrand}>Thien Banh</NavItem>
                <Nav className="ml-auto">
                    <NavItem>
                        <ScrollspyNavLink name="home">
                            <NavLink href="#home">Home</NavLink>
                        </ScrollspyNavLink>
                    </NavItem>
                    <NavItem>
                        <ScrollspyNavLink name="about">
                            <NavLink href="#about">About</NavLink>
                        </ScrollspyNavLink>
                    </NavItem>
                    <NavItem>
                        <ScrollspyNavLink name="work">
                            <NavLink href="#work">Work</NavLink>
                        </ScrollspyNavLink>
                    </NavItem>
                    <NavItem>
                        <ScrollspyNavLink name="contact">
                            <NavLink href="#contact">Contact</NavLink>
                        </ScrollspyNavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </React.Fragment>
    )
}