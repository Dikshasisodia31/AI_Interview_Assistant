import React from 'react'

const Statcard = ({title,value}) => {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h6 className="text-muted">{title}</h6>
        <h3 className="fw-bold">{value}</h3>
      </div>
    </div>
  )
}

export default Statcard
