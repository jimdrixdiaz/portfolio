import { useState } from 'react';
import Background from './components/Background/Background';
import ProfileCard from './components/Profile/ProfileCard';
import WorksCard from './components/Works/WorksCard';
import './App.scss';

import EmbarkPreview from './assets/embark/embark-preview.png';
import ApirPreview from './assets/apir/apir-preview.png';
import MyBosPreview from './assets/mybos/mybos-preview.png';
import MyStylePreview from './assets/mystyle/mystyle-preview.png';
import EatAndRunPreview from './assets/eatandrun/eatandrun-preview.png';

const works = [{
  title: 'Embark',
  subtitle: 'Employee Engagement B2B SaaS',
  role: 'UI Designer & Developer',
  year: '2019 - 2025',
  preview: EmbarkPreview
},{
  title: 'APIR',
  subtitle: 'Employee Recognition Platform',
  role: 'UI Designer & Developer',
  year: '2023',
  preview: ApirPreview
},{
  title: 'My Customer Manager',
  subtitle: 'Customer Support Portal',
  role: 'UI/UX Designer & Developer',
  year: '2017 - 2019',
  preview: MyBosPreview
},{
  title: 'MyStyle',
  subtitle: 'E-commerce Fashion Blog',
  role: 'UI Designer & Developer',
  year: '2016',
  preview: MyStylePreview
},{
  title: 'Eat & Run',
  subtitle: 'Personal Travel Blog',
  role: 'UI/UX Designer & Developer',
  year: '2016 - 2022',
  preview: EatAndRunPreview
}]

function App() {
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
        <div className="home grid">
          <ProfileCard className="item item-0" />
          {works.map( (work, i) => 
            <WorksCard 
              className={`item item-` + (i + 1)}
              work={work}
              key={i}
              >
            </WorksCard>
          )}
        </div>
      </main>
    </>
  )
}

export default App