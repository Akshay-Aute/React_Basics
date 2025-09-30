import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);
    if(!user) return <div>Please Login to view Profile</div>
    return <div> wellcome {user.username}</div>
}

export default Profile