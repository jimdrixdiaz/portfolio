import React from 'react'
import Card from '../Card/Card'
import './WorksCard.scss'

function WorksCard({className, work, onClick}) {
  return (
    <Card className={`work-card ` + className}>
        <div onClick={() => onClick(work.id)}>
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
        </div>
    </Card>
  )
}

export default WorksCard