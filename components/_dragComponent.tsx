import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { _useDrag } from "../hooks/_useDrag"
import { DragProps } from "../_types"

export const _dragComponent: React.FC<DragProps> = ({
    dragId,
    className = "",
    disabled = false,
    zIndex = "initial",
    dragMomentum = false,
    motionProps = {},
    onDrag,
    onDrop,
    onHover,
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


    const [z, setZ] = useState<DragProps["zIndex"]>(zIndex)

    return (
        <motion.div
            className={className}
            drag={!disabled}
            dragMomentum={dragMomentum}
            style={{
                position: "relative",
                zIndex: z
            }}

            onDragStart={() => {
                clearHover()
                setDrag(dragId)
                onDrag()
                setZ(888)
            }}

            onDragEnd={() => {
                setZ(zIndex)
                onDrop && onDrop(dropData)
                clearDrag()
            }}

            {...motionProps}
        >
            {children}
        </motion.div >
    )

}