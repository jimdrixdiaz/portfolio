import React from 'react'
import EmbarkContent from './EmbarkContent';
import ApirContent from './ApirContent';
import MyBosContent from './MyBosContent';
import MyStyleContent from './MyStyleContent';
import EatAndRunContent from './EatAndRunContent';
import './WorksModal.scss';

const works = [{
  id: 1,
  title: 'Embark',
  subtitle: 'Employee Engagement B2B SaaS',
  role: 'UI Designer & Developer',
  company: 'Willis Towers Watson',
  year: '2019 - 2025',
  url: 'https://www.wtwco.com/en-ph/solutions/products/embark',
  content: <EmbarkContent />
},{
  id: 2,
  title: 'APIR',
  subtitle: 'Employee Recognition Platform',
  role: 'UI Designer & Developer',
  company: 'Willis Towers Watson',
  year: '2023',
  content: <ApirContent />
},{
  id: 3,
  title: 'My Customer Manager',
  subtitle: 'Customer Support Portal',
  role: 'UI/UX Designer & Developer',
  company: 'Maya Philippines / Voyager Innovations Inc.',
  year: '2017 - 2019',
  content: <MyBosContent />
},{
  id: 4,
  title: 'MyStyle',
  subtitle: 'E-commerce Fashion Blog',
  role: 'UI Designer & Developer',
  company: 'Voyager Innovations Inc',
  year: '2016',
  content: <MyStyleContent />
},{
  id: 5,
  title: 'Eat & Run',
  subtitle: 'Personal Travel Blog',
  role: 'UI/UX Designer & Developer',
  year: '2016 - 2022',
  content: <EatAndRunContent />
}];

function WorksModal({id}) {
    const workItem = works.filter( item => {
        return item.id == id
    })[0];

    return (
        <>
            <div className="works-modal-header modal-header">
                <h2>{workItem.title}</h2>
                <p className="work-subtitle">{workItem.subtitle}</p>
                <div className="work-details">
                    <p>Role: {workItem.role}</p>
                    {workItem.company && <p>Company/Client: {workItem.company}</p>}
                    <p>Year: {workItem.year}</p>
                </div>
                {workItem.url && <a className="work-url" target='_blank' href={workItem.url}>{workItem.url}</a>}
            </div>
            <div className="works-modal-body modal-body">
                {workItem.content}
            </div>
        </>
    )
}

export default WorksModal