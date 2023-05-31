import React,{ createContext, useContext, useState} from 'react'


export const SelectContext = createContext()
export const UpdateSelectAll = ()=>{
    return useContext(SelectContext)
}
export default function SelectAllContext({children}) {
    const [selectState, setSelectState] = useState(false)

    const upSelectState = ()=>{
        setSelectState(selectall => !selectall)
    }

  return (
    <SelectContext.Provider value={{selectState, upSelectState}}>
        {children}
    </SelectContext.Provider>
  )
}
