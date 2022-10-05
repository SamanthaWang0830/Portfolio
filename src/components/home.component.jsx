import { Container, Row, Col} from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import { useState,useEffect } from "react";
import cat from '../assets/cat.svg'


export const Home=()=>{
    const [loopNum,setLoopNum]=useState(0)
    const [index,setIndex]=useState(1)
    const toRotate=["part-time job", "volunteer job"]
    const [isDeleting, setIsDeleting]= useState(false)
    const [text,setText]= useState('')
    //打出来的速度
    const [speed, setSpeed]=useState(300- Math.random()*100)
    const period=2000

    useEffect(()=>{
        let ticker= setInterval(()=>tick(),speed)
        return ()=>{clearInterval(ticker)}
    },[text])

    const tick=()=>{
        let i=loopNum% toRotate.length
        let fullText= toRotate[i]
        let updatedText= isDeleting? fullText.substring(0, text.length-1):fullText.substring(0, text.length+1)
        
        setText(updatedText)
        if(isDeleting){
            setSpeed(prevSpeed=>prevSpeed/2)

        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setSpeed(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setSpeed(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
        
    }

    return (
        <section className="home" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible})=>(
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{`Hi! I'm ZIJING`}</h1>
                                <br/><br/>
                                <h2>
                                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "part-time job", "volunteer job"]'><span className="wrap">Looking for {text} </span></span>
                                </h2>
                                
                            </div>
                        )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                        {({isVisible})=>(
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}> 
                                <img src={cat} alt="Header Img"/>
                            </div>
                        )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}