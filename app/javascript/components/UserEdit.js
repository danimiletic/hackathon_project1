import React from 'react';

const UserEdit = ({ user }) => {


  const { name, id } = user 

  const defaultName = name ? name : ""
  return (
    <>
      <h1>Create Edit User</h1>
      <form action={`/users/${id}`} method="post">
        {}
        <input type='hidden' name='_method' value="patch" /> 
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control col-md-6"
            type="text"
            placeholder="User name"
            required
            defaultValue={defaultName}
            name="user[name]"
          />
        </div>
        <button type="submit" className="btn btn-primary">Update User</button>
      </form>
      <br />
      <a href="/users" className="btn btn-success">Back to Users</a>
    </>
  )
}

export default UserEdit;