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
    disabled?: boolean
    zIndex?: string | number
    dragMomentum?: boolean
    motionProps?: {}
    returnDelay?: number
}

export const _dragComponent: React.FC<Props> = ({
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


    const [z, setZ] = useState<Props["zIndex"]>(zIndex)

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