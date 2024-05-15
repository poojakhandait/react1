
import { createContext } from 'react'
import A from './A'
let FirstName=createContext()
let LastName=createContext()
 const Task3=()=> {
  return (<>
  <FirstName.Provider value={'Pooja'}>
    <LastName.Provider value={'Khandait'}>
        <A/>
    </LastName.Provider>
  </FirstName.Provider>
  </>
    
  )
}

export default Task3
export{FirstName,LastName}
