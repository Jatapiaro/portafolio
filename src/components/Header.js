import React from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

export default class Header extends React.Component {

    state = {
        isOpen: false,
        data: []
    }

    constructor(props) {
        super(props);
        this.setState({
            data: this.props.en
        });
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    componentWillMount() {
        const lang = this.props.lang;
        const data = (lang === "en")? this.props.en : this.props.es;
        this.setState({
            data: data
        })
    }

    componentWillReceiveProps(nextProps) {
        const lang = nextProps.lang;
        const data = (lang === "en") ? this.props.en : this.props.es;
        this.setState({
            data: data
        })
    }

    render() {
        return (
            <div className="header">
                <Navbar className="custom-navbar" expand="md">
                    <NavbarBrand href="/">Jacobo Tapia</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {
                                this.state.data.map((item, index) => {

                                    if (item.type === "link") {
                                        
                                        return (
                                            <NavItem key={index}>
                                                <NavLink href={item.link}>{item.text}</NavLink>
                                            </NavItem>
                                        )

                                    } else {
                                        return (
                                            <NavItem key={index}>
                                                <NavLink
                                                    className="button-nav-link" 
                                                    onClick={this.props.toggleLang}>{item.text}
                                                </NavLink>
                                            </NavItem>
                                        )
                                    }
                                })
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }

}

Header.defaultProps = {

    en: [
        {
            text: 'About Me',
            link: '/about-me',
            type: 'link'
        },
        {
            text: 'Work',
            link: '',
            type: 'link'
        },
        {
            text: 'Contact',
            link: '',
            type: 'link'
        },
        {
            text: 'Español',
            link: '',
            type: 'toggler'
        }
    ],
    es: [
        {
            text: 'Conóceme',
            link: '/about-me',
            type: 'link'
        },
        {
            text: 'Mi Trabajo',
            link: '',
            type: 'link'
        },
        {
            text: 'Contacto',
            link: '',
            type: 'link'
        },
        {
            text: 'English',
            link: '',
            type: 'toggler'
        }
    ]

}