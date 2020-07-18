import { motion, useMotionValue } from "framer-motion"
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
}

export const _dragComponent: React.FC<Props> = ({
    dragId,
    className = "",
    dragMomentum = false,
    motionProps = {},
    onDrag = () => null,
    onDrop = () => null,
    onHover = () => null,
    children
}) => {

    const { dragData, dropData, setDrag, clearDrag, clearHover } = _useDrag()

    useEffect(() => {
        if (dragId === dragData) {
            if (dropData) {
                onHover(dropData)
            }
        }
    }, [dropData, dragData])

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const [zIndex, setZ] = useState<number | "initial">("initial")

    return (
        <motion.div
            className={className}
            drag
            dragMomentum={dragMomentum}
            style={{
                position: "relative",
                x: 0,
                y: 0,
                zIndex
            }}

            onDragStart={() => {
                clearHover()
                setDrag(dragId)
                onDrag()
                setZ(888)
            }}

            onDragEnd={() => {
                setZ("initial")
                onDrop && onDrop(dropData)
                clearDrag()
                x.set(0)
                y.set(0)
            }}

            {...motionProps}
        >
            {children}
        </motion.div >
    )

}