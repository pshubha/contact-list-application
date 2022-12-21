import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter,Route, NavLink , Link} from 'react-router-dom';
import {RemoveContact} from "./RemoveContact"; 


const Homepage=()=>{
  const [contact, setContact] = useState([]);
  const { removeData } = useContext(RemoveContact);

  useEffect(() => {
    let contactList = JSON.parse(localStorage.getItem('ContactList')) || [];
    setContact(contactList)
 }, [])

  return (
    <div className="container" style={{ backgroundColor: '#e2e2e2', width: '70%', marginTop: '80px' }}>
      <div>
        <h1 style={{ paddingTop: '30px', marginRight: '600px', fontFamily: ('Papyrus', 'Fantasy'), textDecoration: 'underline' }}>Contacts :</h1>
      </div>
      <hr></hr>
      <div style={{ float: 'right', paddingTop: '10px' }}>
        <Link to={{pathname:'/add-contact'}} className='btn btn-info'> + Add Contact</Link>
      </div>
      <br></br>
      <div>
        <h3>List of Contacts</h3>
      </div>
      <br></br>

      <div>
        {
          contact.length?
        <table className="table table-striped">
        <thead>
          <tr>
              <th></th>
              <th>Name</th>
              <th>Phone</th>
              <th>Type</th>
              <th>Is Whatsapp</th>                            
              <th>Profile Picture</th>
              <th></th>
              <th></th>              
          </tr>
        </thead>
          <tbody>
            {
              contact.map((u,i)=>{
                console.log(u);
                return(
                  <tr key={u.id}>
                      <td>{i+1}</td>
                      <td>{u.Name}</td>
                      <td>{u.Phone}</td>
                      <td>{u.Type}</td>
                      <td>{u.IsWhatsapp}</td>
                      <td><img src={u.ProPicture} /></td>                                
                      <td><Link > Edit</Link></td>
                        {/* <Route path='/edit-contact/:id' component={EditContact} /> */}
                        {/* </BrowserRouter></td>                                                                         */}
                      <td><Link to={'/'} className='btn btn-dark' onClick ={()=>removeData(u.id)}><span aria-hidden="true">&times;</span></Link></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>:<div><br></br>
        <h3>No contacts saved.....</h3></div>
        }
    </div>

    </div>
  );
}

export default Homepage;