import React, { useContext, useState } from 'react'
import { UserContext } from './context-provider/context'

const GrantChild = () => {
    const {userInfo, setUserInfo} = useContext(UserContext);

    const [inputName, setInputName] = useState('');
    const handleUpdateName = (e) => {
        e.preventDefault();
        setUserInfo((prev) => {
            return ({
                ...prev,
                name: inputName
            })
        })
        setInputName('')
    }

  return (
    <>
    <h1>GrantChild</h1>
    <div>
        <h2>The user details are: </h2>
        <h3>Name: {userInfo.name}</h3>
        <h3>Email: {userInfo.email}</h3>
        <h3>Age: {userInfo.age}</h3>
        <h3>Address: {userInfo.address}</h3>
        <h3>Phone: {userInfo.phone}</h3>
        <h3>Occupation: {userInfo.occupation}</h3>
        <h3>Hobbies: {userInfo.hobbies.join(', ')}</h3>
        <h3>Bio: {userInfo.bio}</h3>
        <h3>Profile Picture: <img src={userInfo.profilePicture} alt="Profile Picture" /></h3>
        <h3>Social Media: 
            <a href={userInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href={userInfo.socialMedia.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href={userInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={userInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </h3>
    </div>

    <form onSubmit={handleUpdateName}>
        <input type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)} 
        placeholder='Enter new name'
        />
        <button type='submit'>Change name</button>
    </form>
    </>
  )
}

export default GrantChild