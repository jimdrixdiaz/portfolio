import { useRef, useState } from 'react';
import Background from './components/Background/Background';
import ProfileCard from './components/Profile/ProfileCard';
import WorksCard from './components/Works/WorksCard';
import Modal from './components/Modal/Modal';
import './App.scss';

import EmbarkPreview from './assets/embark/embark-preview.png';
import ApirPreview from './assets/apir/apir-preview.png';
import MyBosPreview from './assets/mybos/mybos-preview.png';
import MyStylePreview from './assets/mystyle/mystyle-preview.png';
import EatAndRunPreview from './assets/eatandrun/eatandrun-preview.png';
import { CSSTransition } from 'react-transition-group';

const works = [{
  id: 1,
  title: 'Embark',
  subtitle: 'Employee Engagement B2B SaaS',
  role: 'UI Designer & Developer',
  year: '2019 - 2025',
  preview: EmbarkPreview
},{
  id: 2,
  title: 'APIR',
  subtitle: 'Employee Recognition Platform',
  role: 'UI Designer & Developer',
  year: '2023',
  preview: ApirPreview
},{
  id: 3,
  title: 'My Customer Manager',
  subtitle: 'Customer Support Portal',
  role: 'UI/UX Designer & Developer',
  year: '2017 - 2019',
  preview: MyBosPreview
},{
  id: 4,
  title: 'MyStyle',
  subtitle: 'E-commerce Fashion Blog',
  role: 'UI Designer & Developer',
  year: '2016',
  preview: MyStylePreview
},{
  id: 5,
  title: 'Eat & Run',
  subtitle: 'Personal Travel Blog',
  role: 'UI/UX Designer & Developer',
  year: '2016 - 2022',
  preview: EatAndRunPreview
}];

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalId, setModalId] = useState(100);
  const nodeRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const handleCardClick = (id) => {
    setModalId(id);
    setModalOpen(!modalOpen);
    scrollToTop();
  };

  return (
    <>
      <main>
        <Background
          className='background'
          colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
          rotation={0}
          speed={0.2}
          scale={1.4}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0}
          parallax={0}
          noise={0.08}
          transparent
        />
        <div className={`home grid ${modalOpen ? 'hide-home' : ''}`}>
          <ProfileCard className="item item-0" onClick={handleCardClick} />
          {works.map( (work) => 
            <WorksCard 
              className={`item item-${work.id}`}
              work={work}
              key={work.id}
              onClick={handleCardClick}
              >
            </WorksCard>
          )}
        </div>
        <CSSTransition
          nodeRef={nodeRef}
          in={modalOpen}
          timeout={400}
          classNames={'modal-container'}
          unmountOnExit
        >
          <div ref={nodeRef} className="modal-container">
            <Modal id={modalId} onClick={handleCardClick}></Modal>
          </div>
        </CSSTransition>
      </main>
    </>
  )
}

export default App