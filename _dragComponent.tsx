import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { _useDrag } from "./_useDrag"
import { _IProps } from "./__init"

type Props = {
    dragId: _IProps["dragData"]
    onDrag?: () => void
    onDrop?: (cb: (data: _IProps["dropData"]) => void) => void
    onHover?: (cb: (data: _IProps["dropData"]) => void) => void
    className?: string
    dragMomentum?: boolean
    motionProps?: {}
    zDelay?: number
}

export const _dragComponent: React.FC<Props> = ({
    dragId,
    className = "",
    dragMomentum = false,
    motionProps = {},
    onDrag,
    onDrop,
    onHover,
    zDelay = 0,
    children
}) => {

    const { dragData, dropData, setDrag, clearDrag, clearHover } = _useDrag()

    useEffect(() => {
        if (onHover) {
            if (dragId === dragData) {
                if (dropData) {
                    onHover(dropData)
                }
            }
        }
    }, [dropData, dragData])


    const [zIndex, setZ] = useState<number | "initial">("initial")

    return (
        <motion.div
            className={className}
            drag
            dragMomentum={dragMomentum}
            style={{
                position: "relative",
                zIndex
            }}

            onDragStart={() => {
                setDrag(dragId)
                setZ(888)
                onDrag && onDrag()
            }}

            onDragEnd={() => {
                onDrop && onDrop(dropData)
                clearDrag()
                setTimeout(() => {
                    setZ("initial")
                }, zDelay)
            }}

            {...motionProps}
        >
            {children}
        </motion.div >
    )

}