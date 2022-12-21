import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { v1 as uuid } from 'uuid'

const AddContact=()=> {
  const typelist = ['Personal','Office']
  const picture = './public/logo192.png' 
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')  
  const [type, setType] = useState('')
  const [iswhatsapp, setIswhatsapp] = useState(false)
  const [profile, setProfile] = useState(picture);
  const contactList = JSON.parse(localStorage.getItem('ContactList')) || [];

  const handleAddContact = (e) => {
    e.preventDefault();
    let obj = { id: uuid(), Name: name, Phone: phone, Type: type, IsWhatsapp: iswhatsapp, ProPicture: profile }
    contactList.push(obj);
    localStorage.setItem('ContactList', JSON.stringify(contactList));
  }

  return (
    <div className='container' style={{ backgroundColor: '#e2e2e2', width: '50%', marginTop: '100px' }}>
      <form onSubmit={handleAddContact}>
        <div style={{ padding: '20px' }}>
          <Link to='/' style={{ float: 'right' }} className='btn btn-transporant'>&times;</Link>
          <h3>New Contact</h3>
        </div>
        <div>
        <label className='form-label'>Name : </label>
        <input type='text' className='form-control' placeholder='Name..' value={name} onChange={(e) => setName(e.target.value)} required />
        <label className='form-label'>Phone No.:</label>
        <input type='text' className='form-control' placeholder='Phone No..' value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <label className='form-lable'>Type : </label>
        <select className='form-control' value={type} onChange={(e) => setType(e.target.value)}>
          <option default>Select Type</option>
          {
            typelist.map((r,i) =>
            <option key={i+1} value={r}>{r}</option>)
          } 
        </select>
        <label className='form-lable px-1'>Is Whatsapp : </label>
        <input className="form-check-input" type="checkbox" value="false" onChange={() => setIswhatsapp(!iswhatsapp)} checked={iswhatsapp} id="iswhatsapp" />
        <br></br>
        <hr></hr>
        <label className='form-lable px-1'>Profile Picture : </label>
        <br></br>
        <img src={picture}/>   
        <hr></hr>
        <div style={{ padding: '20px' }}>
          <button type='submit' style={{ marginRight: '10px' }} className='btn btn-info'>Add</button>
          <Link to='/' className='btn btn-secondary'>Close</Link>
        </div>
        </div>
      </form>
    </div>
  )
}

export default AddContact
