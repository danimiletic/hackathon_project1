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
    
      <a href="/users/new">
        <button className="btn btn-dark">Add User</button>
      </a>
      <br />
      <br />
      <ul class="list-group">
        { users.map( (user) => (
          <li className="list-group-item">
            <h3>{sub.name}</h3>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <a className="btn btn-primary" href={`/users/${user.id}`}>Show</a>
              <a className="btn btn-warning" href={`/users/${user.id}/edit`}>Edit</a>
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
