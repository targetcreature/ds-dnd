import { useContext } from "react"
import { _context, _setContext } from "../context"
import { _init } from "../init"
import { DNDProps } from "../_types"

interface UProps extends DNDProps {
    setDrag: (data: DNDProps["dragData"]) => void
    clearDrag: () => void
    setHover: (data: DNDProps["dropData"]) => void
    clearHover: () => void
}

export const _useDrag = (): UProps => {

    const { dragData, dropData } = useContext(_context)
    const setState = useContext(_setContext)

    return {
        dragData,
        dropData,
        setDrag: (dragData) => setState((state) => ({ ...state, dragData })),
        clearDrag: () => setState((state) => ({ ...state, dragData: _init.dragData })),
        setHover: (dropData) => setState((state) => ({ ...state, dropData })),
        clearHover: () => setState((state) => ({ ...state, dropData: _init.dropData }))
    }

}

export const _useDND = () => useContext(_context)