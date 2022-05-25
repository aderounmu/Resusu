import React from 'react'
import Body from '../components/General/Body.js'
import Sidebar  from '../components/General/Sidebar.js'
import ProfileBody from '../components/Profile2/ProfileBody.js'

function Profile2() {
  return (
    <div>
        <Sidebar/>
        <Body>
            <ProfileBody/>
        </Body>
    </div>
  )
}

export default Profile2