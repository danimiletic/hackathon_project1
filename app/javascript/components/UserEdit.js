import React from 'react';

const UserEdit = ({ user }) => {

  // attr that your obj 
  const { id, first_name, last_name, email, password } = user 
  // in case there are error it saves the user input
  // one per attr
  const defaultFirstName = first_name ? first_name : ""
  const defaultLastName = last_name ? last_name : ""
  const defaultEmail = email ? email : ""
  const defaultPassword = password ? password : ""
  return (
    <>
    
      <h1>Create new User</h1>
      <form action={`/users/${id}`} method="post">
        {}
        <input type='hidden' name='_method' value="patch" />

        
          <label>First Name:  </label>
          <input
            className="form-control col-md-6"
            type="text"
            placeholder="User name"
            required
            defaultValue={defaultFirstName}
            name="user[first_name]"
          />
       
        
       
          <label>Last Name:  </label>
          <input
            className="form-control col-md-6"
            type="text"
            placeholder="User name"
            required
            defaultValue={defaultLastName}
            name="user[last_name]"
          />
       

       
          <label>Email:  </label>
          <input
            className="form-control col-md-6"
            type="text"
            placeholder="User Email"
            required
            defaultValue={defaultEmail}
            name="user[email]"
          />
       

     
          <label>Password:  </label>
          <input
            className="form-control col-md-6"
            type="text"
            placeholder="User password"
            required
            defaultValue={defaultPassword}
            name="user[password]"
          />
      
        <button type="submit" className="btn btn-primary">Update User</button>
      </form>
     
      <br />
      <a href="/users" className="btn btn-success">Back to Users</a>
    </>
  )
}

export default UserEdit;