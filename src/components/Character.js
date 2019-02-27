import { withRouter } from 'react-router-dom'
import React from 'react'

const Character = ({ history, name, image, status, gender }) => {
  return (
    <div>
      <img src={image} alt={name} width="100" />
      <h2>{name}</h2>
      <p>{status}</p>
      <p>{gender}</p>
      <button onClick={() => history.goBack()}>Go back</button>
    </div>
  )
}

export default withRouter(Character)
