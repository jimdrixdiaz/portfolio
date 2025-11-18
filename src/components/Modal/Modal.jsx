import { CSSTransition, TransitionGroup } from "react-transition-group";
import Card from "../Card/Card";
import Button from "../Button/Button";
import WorksModal from "./WorksModal";
import './Modal.scss';
import { createRef } from "react";

import ProfilePic from "@/assets/me.png";

const list = [
    {
        id: 0,
        nodeRef: createRef(null)
    }, 
    {
        id: 1,
        nodeRef: createRef(null)
    }, 
    {
        id: 2,
        nodeRef: createRef(null)
    }, 
    {
        id: 3,
        nodeRef: createRef(null)
    }, 
    {
        id: 4,
        nodeRef: createRef(null)
    }, 
    {
        id: 5,
        nodeRef: createRef(null)
    }
]

const ProfileModal = ({id}) => {
    return (
        <>
            <div className="profile-modal-header modal-header">
                <div className="profile-bio">
                    <h1>Jimdrix Diaz</h1>
                    <p>UI Designer and Developer</p>
                    <p className="profile-quote">Turning Complex Workflows <br />
                    Into Effortless Experiences.</p>
                    <Button icon={true} label="jimdrixdiaz@gmail.com" />
                </div>
                <img src={ProfilePic} className="profile-pic" />
            </div>
            <div className="profile-modal-body modal-body">
                <p>
                    I have nearly a decade of experience bridging UI/UX design and frontend development for enterprise platforms.
                </p>
                <p>
                    At Willis Towers Watson, I led UI design & development for an HR platform, coordinating across teams to uphold design standards, maintain code quality, and deliver on schedule. 
                </p>
                <p>
                    Skilled in responsive design, web accessibility, HTML5, CSS3, JavaScript, React, Angular, and tools like Figma, Adobe Creative Suite, and Sketch, I excel at turning complex requirements into scalable, user-friendly solutions.
                </p>
                <p>
                    My work on fintech and e-commerce systems at Voyager Innovations further strengthened my ability to balance usability, performance, and business needs.
                </p>
                <p>
                    With a detail-oriented, organized approach, I am confident in managing multiple projects and delivering high-quality web solutions for enterprise and high-profile clients.
                </p>
            </div>
        </>
    )
}

function Modal({id, onClick}) {
  return (
    <TransitionGroup className="modal-group">
        <CSSTransition
            key={id}
            nodeRef={list[id] && list[id].nodeRef}
            timeout={300}
            classNames="modal-view"
        >
            <Card className="modal">
                <button className="modal-close" onClick={() => {onClick(id)}}>+</button>
                {id == 0 ?
                    <ProfileModal id={id} />
                    :
                    <WorksModal id={id} />
                }
            </Card>
        </CSSTransition>
    </TransitionGroup>
  )
}

export default Modal