export type DNDProps = {
    dragData: any
    dropData: any
}

export type DragProps = {
    dragId: DNDProps["dragData"]
    onDrag?: () => void
    onDrop?: (cb: (data: DNDProps["dropData"]) => void) => void
    onHover?: (cb: (data: DNDProps["dropData"]) => void) => void
    className?: string
    disabled?: boolean
    zIndex?: number | "initial" | "inherit"
    dragMomentum?: boolean
    motionProps?: {}
    returnDelay?: number
}

export type DropProps = {
    dropId: DNDProps["dropData"]
    className?: string
    disabled?: boolean
    onEnter?: (cb: (data: DNDProps["dragData"]) => void) => void
    onExit?: (cb: (data: DNDProps["dragData"]) => void) => void
}

export interface UseDND extends DNDProps {
    setDrag: (data: DNDProps["dragData"]) => void
    clearDrag: () => void
    setHover: (data: DNDProps["dropData"]) => void
    clearHover: () => void
}
