import React from 'react'
import { Link } from 'react-router-dom'
const Card = (props) => {
  return (
       <div class="card">
          <img src={props.picture} class="card-img-top" alt="..." />
          <div class="card-body">
            <h6 class="card-title">{props.name}</h6>
            <p class="card-text">
              top best porn star
            </p>
            <Link to={props.to} class="btn btn-primary">
              About herself
            </Link>
          </div>
        </div>
  )
}

export default Card
