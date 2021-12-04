import React from 'react';

const UserNew = ({ user }) => {

  // attr that your obj 
  const { name } = user 
  // in case there are error it saves the user input
  // one per attr
  const defaultName = name ? name : ""
  return (
    <>
      <h1>Create new User</h1>
      <form action="/users" method="post">
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
        <button type="submit" className="btn btn-primary">Add User</button>
      </form>
      <br />
      <a href="/users" className="btn btn-success">Back to Users</a>
    </>
  )
}

export default UserNew;