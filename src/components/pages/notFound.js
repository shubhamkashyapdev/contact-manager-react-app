import React from 'react'

export default function notFound() {
  return (
    <div className="container">
      <h1 className="display-4">
        Page <span className="text-danger">Not </span>Found
      </h1>
      <hr></hr>
      <p className="lead">
        Looks like you have lost! <strong>Let's Go Home..</strong>
      </p>
    </div>
  )
}
