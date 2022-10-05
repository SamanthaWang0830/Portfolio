import { Container, Nav, Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";
import {BrowserRouter} from "react-router-dom";
import logo from '../../assets/logo.svg' 
import { HashLink } from "react-router-hash-link";


export const Navigation =()=>{
    const [activeLink,setActiveLink]= useState('home')
    const [scrolled ,setScrolled]= useState(false)

    //控制整个NavBar,当页面向下滚动50px，则fixed在页面顶部
    useEffect(()=>{
        const onScroll=()=>{
            //scrollY可以返回当前页面向上滚动的尺寸，返回值是数字
            if(window.scrollY>50){
                setScrolled(true)
            } else{
                setScrolled(false)
            }
        }
        //监听页面scroll事件
        window.addEventListener('scroll',onScroll)
        return ()=> window.removeEventListener('scroll',onScroll)
    },[])


    return (
        <BrowserRouter>
        <Navbar expand='md' className={scrolled? 'scrolled':''}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand >

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link 
                            href="#home"
                            onClick={() => setActiveLink('home')}
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            >Home
                        </Nav.Link>
                        <Nav.Link 
                            href="#skills"
                            onClick={() => setActiveLink('skills')}
                            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                            >Skills
                        </Nav.Link>
                        <Nav.Link 
                            href="#projects" 
                            onClick={() => setActiveLink('projects')}
                            className={activeLink === 'projects' ? 'active navbar-link' :'navbar-link'} 
                            >Projects
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://github.com/SamanthaWang0830">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                            </a>
                        </div>
                    </span>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </BrowserRouter>
    )
}