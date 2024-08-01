import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../src/context/GlobalStage'

const List = () => {
  const Tmagazines = () => {
    const { tmagazines, getTmagzines } = useContext(GlobalContext)

    useEffect(() => {
      getTmagzines()
    }, [])

    const tmagazine = tmagazines.map((tmagazine) => {
      return (
        <div key={tmagazine.id}>
          <h1>{tmagazine.title}</h1>
          <img src={tmagazine.abstract} />
        </div>
      )
    })
    return <div>{tmagazine}</div>
   }
    
}
export default List