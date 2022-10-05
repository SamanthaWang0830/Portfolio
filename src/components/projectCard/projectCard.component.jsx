
import { Col } from "react-bootstrap";


const ProjectCard=({project})=>{
    const {link,title,imageUrl}= project
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
               <img src={imageUrl}/> 
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{link}</span>
                </div>
                
            </div>
            <a href={link}></a>
        </Col>
    )
}

export default ProjectCard