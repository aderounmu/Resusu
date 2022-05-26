import React from 'react'
import Body from '../components/General/Body'
import SideBar from '../components/General/Sidebar'
import UserGroupBody from '../components/UserGroup/UserGroupBody'

const UserGroup = () => {
  return (
    <>
        <SideBar/>
        <Body>
            <UserGroupBody/>
        </Body>
    </>
  )
}

export default UserGroup