import React from 'react';

const User = ({ user }) => {

  const { id, name, created_at } = user
  return (
    <>
      <h3>{name}</h3>
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