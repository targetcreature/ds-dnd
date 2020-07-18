import { createContext, useState } from 'react'
import { _init } from './__init'

type Props = typeof _init

export const _context = createContext<Props>(_init)
export const _setContext = createContext<React.Dispatch<React.SetStateAction<Props>>>(null)

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