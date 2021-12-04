import React from 'react';

//# email isnt desplaying 

const User = ({ user }) => {

  const { first_name, last_name, email, created_at, id } = user

  return (
    <>
      <h2>User Info</h2>
      <h3>{first_name} {last_name}</h3>
      <br/>
      <h4>User email: {email}</h4>
        <p>
          Created: {created_at}, id: {id}
        </p>
        <a href="/">Back</a>
        <br />
        <a href={`/users/${id}/trips`}>Go to trips</a>
    </>
  )
}

export default User;