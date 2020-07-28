import { createContext, useState } from 'react'
import { _init } from '../init'
import { DNDProps } from '../_types'

export const _context = createContext<DNDProps>(_init)
export const _setContext = createContext<React.Dispatch<React.SetStateAction<DNDProps>>>(null)

export const _provider: React.FC<{}> = ({ children }) => {
    const [value, set] = useState(_init)
    return (
        <_context.Provider value={value} >
            <_setContext.Provider value={set} >
                {children}
            </_setContext.Provider>
        </_context.Provider>
    )
}