import React from 'react'
import Card from '../Card/Card';
import Button from '../Button/Button';
import './ProfileCard.scss';

import ProfilePic from '../../assets/me.png';

function ProfileCard({className, onClick}) {
  return (
    <Card className={`profile-card ` + className}>
        <div className="profile-card-content" onClick={() => onClick(0)}>
            <h1>Jimdrix Diaz</h1>
            <p>UI Designer and Developer</p>
            <p className="profile-quote">Turning Complex Workflows <br />
            Into Effortless Experiences.</p>
            <Button label="Get in Touch" />
        </div>
        <img src={ProfilePic} className="profile-pic" />
    </Card>

  )
}

export default ProfileCard