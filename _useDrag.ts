import { useContext } from "react"
import { _context, _setContext } from "./_context"
import { _init, _IProps } from "./__init"

interface UProps extends _IProps {
    setDrag: (data: _IProps["dragData"]) => void
    clearDrag: () => void
    setHover: (data: _IProps["dropData"]) => void
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