import { useContext } from "react"
import { _context, _setContext } from "../context"
import { _init } from "../init"
import { UseDND } from "../_types"

export const _useDrag = (): UseDND => {

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