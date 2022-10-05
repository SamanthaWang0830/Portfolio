
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../../assets/color-sharp.png'

export const Skills=()=>{
    const responsive={
        superLargeDesktop:{
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop:{
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    return (
        <section className="skill" id="skills">
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p></p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <h5>Programming Language</h5>
                                    <span> JavaScript, HTML, CSS, Java</span>
                                </div>
                                <div className="item">
                                    <h5>Framework& Tools</h5>
                                    <span>React, Ajax, Axios, JSON, Bootstrap, Firebase, Git </span>
                                </div>
                                <div className="item">
                                    <h5>Currently Studying</h5>
                                    <span>Node.js, Echarts, Redux... </span>
                                </div>
                                <div className="item">
                                    <h5>Task Sensitive</h5>
                                    <span>Manage time properly and never delay to the deadline</span>
                                </div>
                                <div className="item">
                                    <h5>Workspace Flexibility</h5>
                                    <span>Accept both commuting to the office and working from home</span>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className='background-image-left' src={colorSharp} alt="Image" />
        </section>
    )
}