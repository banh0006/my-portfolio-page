import React, { useState, useEffect } from 'react';
import "../../css/NavBar.css"
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

export default function NavBar ( props ) {
    const [show, setShow] = useState({ ...props.showNav })
    const styles = {
        navBrand: {
            'listStyle': 'none'
        },
    }

    useEffect(() => {
        console.log(props.showNav)
        setShow(props.showNav)
    }, [props.showNav])

    return (
        <React.Fragment>
            <Navbar color="light" fixed="top" className={ show === true ? 'active' : 'hidden' }>
                <NavItem style={styles.navBrand}>Thien Banh</NavItem>
                <Nav className="ml-auto">
                    <NavItem>
                        <NavLink href="/">Profile</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Skills</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Work</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Contact</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </React.Fragment>
    )
}