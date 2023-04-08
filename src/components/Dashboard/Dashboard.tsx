import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { SAGA_REQUEST } from '../../redux/sagaEg/SagaEgActionTypes'

function setSaga (dispatch: any): void {
  dispatch({
    type: SAGA_REQUEST
  })
}

export default function Dashboard (): JSX.Element {
  const dispatch = useDispatch()
  useEffect(() => {
    setSaga(dispatch)
  }, [])

  return (
    <><div>
      <h2>Welcome to React Router Tutorial</h2>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li><Link to={'/'} className="nav-link"> Home </Link></li>
          <li><Link to={'/preferences'} className="nav-link">Preferences</Link></li>
        </ul>
      </nav>
    </div><h2>Dashboard</h2></>
  )
}
