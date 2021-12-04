import React from 'react';

// controller index should match in 
// the Filename, the component name 
// and export name,

// props are propertys pass into the 
// component from the controller
// const Subs = ({props, keys}) => {

const Users = ({ users }) => {
  return (
    <>
    <h1>All Users</h1>
      <a href="/users/new">
        <button className="btn btn-dark">Add User</button>
      </a>
      <br />
      <br />
      <ul class="list-group">
        { users.map( (user) => (
          <li className="list-group-item">
            <h3>{user.first_name } {user.last_name }</h3>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <br/>
              <a className="btn btn-primary" href={`/users/${user.id}`}>Show</a>
              <br/>
              <a className="btn btn-warning" href={`/users/${user.id}/edit`}>Edit</a>
              <br/>
              <a className="btn btn-danger" href={`/users/${user.id}`} data-method='delete'>
                Delete
              </a>
            </div>
          </li>
        )) }
      </ul>
      <br />
    </>
  )
}

export default Users;
