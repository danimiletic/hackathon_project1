import React from 'react';

const UserNew = ({ user }) => {

  // attr that your obj 
  const { first_name, last_name, email, password } = user 
  // in case there are error it saves the user input
  // one per attr
  const defaultFirstName = first_name ? first_name : ""
  const defaultLastName = last_name ? last_name : ""
  const defaultEmail = email ? email : ""
  const defaultPassword = password ? password : ""
  return (
    <>
      <h1>Create new User</h1>
      <form action="/users" method="post">
        <div className="form-group">
          <label>First Name:  </label>
          <input
            className="form-control col-md-6"
            type="text"
            placeholder="User name"
            required
            defaultValue={defaultFirstName}
            name="user[first_name]"
          />
        </div>
        <div className="form-group">
          <label>Last Name:  </label>
          <input
            className="form-control col-md-6"
            type="text"
            placeholder="User name"
            required
            defaultValue={defaultLastName}
            name="user[last_name]"
          />
        </div>
        <div className="form-group">
          <label>Email:  </label>
          <input
            className="form-control col-md-6"
            type="text"
            placeholder="User Email"
            required
            defaultValue={defaultEmail}
            name="user[email]"
          />
        </div>
        <div className="form-group">
          <label>Password:  </label>
          <input
            className="form-control col-md-6"
            type="text"
            placeholder="User password"
            required
            defaultValue={defaultPassword}
            name="user[password]"
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