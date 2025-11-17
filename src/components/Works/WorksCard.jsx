import React from 'react'
import Card from '../Card/Card'
import './WorksCard.scss'

function WorksCard({className, work}) {
  return (
    <Card className={`work-card ` + className}>
        <h3>{work.title}</h3>
        <p className="work-subtitle">{work.subtitle}</p>
        <div className="work-details">
            <p>Role: {work.role}</p>
            <p>Year: {work.year}</p>
        </div>
        {work.preview &&
            <div className="work-preview">
                <img src={work.preview} />
            </div>
        }
    </Card>
  )
}

export default WorksCard