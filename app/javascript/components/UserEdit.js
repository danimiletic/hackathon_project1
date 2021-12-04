import React from 'react';

const UserEdit = ({ user }) => {
  const { first_name, last_name, email, password } = user 
  const defaultFirstName = first_name ? first_name : ""
  const defaultLastName = last_name ? last_name : ""
  const defaultEmail = email ? email : ""
  const defaultPassword = password ? password : ""

  return (
    <>
      <h1>Edit User</h1>
      <form action={`/users/${id}`} method="post">
        {}
        <input type='hidden' name='_method' value="patch" /> 
       
        
          <input
            type="text"
            placeholder="User name"
            required
            defaultValue={defaultFirstName}
            name="user[first_name]"
          />
        
         
          <input
            type="text"
            placeholder="User last name"
            required
            defaultValue={defaultLastName}
            name="user[last_name]"
          />
      
         
          <input
            type="text"
            placeholder="User Email"
            required
            defaultValue={defaultEmail}
            name="user[email]"
            />
        
         
          <input
            type="text"
            placeholder="User password"
            required
            defaultValue={defaultPassword}
            name="user[password]"
            />
    
        <button type="submit" >Update User</button>
      </form>
    
      <a href="/users" className="btn btn-success">Back to Users</a>
    </>
  )
}

export default UserEdit;