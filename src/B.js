import React from 'react'
import { useContext } from 'react'
import { FirstName,LastName } from './Task3'

const B=()=> {
let fname=useContext(FirstName)
let lname=useContext(LastName)
  return (
    <h1>My Name Is {fname} {lname}</h1>
  )
}

export default B
