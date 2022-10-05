import ProjectCard from "../projectCard/projectCard.component"
import p1 from '../../assets/p1.png'
import p11 from '../../assets/p11.png'
import p111 from '../../assets/p111.png'
import p2 from '../../assets/p2.png'
import p22 from '../../assets/p22.png'
import p222 from '../../assets/p222.png'
import { Container, Row, Col, Tab ,Nav} from "react-bootstrap"
import TrackVisibility from "react-on-screen"
import 'animate.css';

export const Projects=()=>{
    const project1=[
        {
            title: "HomePage",
            id:1,
            imageUrl:p2,
        },
        {
            title:'LogIn',
            id:2,
            imageUrl: p22,
        },
        {
            title:'CartDropdown',
            id:3,
            imageUrl: p222,
        }
        
    ]
    const project2=[
        {
            title: "NoTask",
            id:4,
            imageUrl:p1,
        },
        {
            title:'AddTasks',
            id:5,
            imageUrl: p11,
        },
        {
            title:'ChangeTask',
            id:6,
            imageUrl: p111,
        }
        
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                        {({isVisible})=>(
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                <h2>Projects</h2>
                                <p>To Be Continued...</p>

                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Shopping Mall</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Todo List</Nav.Link>
                                        </Nav.Item>
                                    </Nav>

                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        {/* 第一个project */}
                                        <Tab.Pane eventKey="first">
                                            <Row>
                                                {
                                                project1.map((project) => {
                                                    return (
                                                        <ProjectCard
                                                            key={project.id}
                                                            project={project}
                                                        />
                                                    )
                                                })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        {/* 第二个project */}
                                        <Tab.Pane eventKey="second">
                                            <Row>
                                                {
                                                project2.map((project) => {
                                                    return (
                                                        <ProjectCard
                                                            key={project.id}
                                                            project={project}
                                                        />
                                                    )
                                                })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
