import { _useDrag } from "../hooks/_useDrag"
import { DropProps } from "../_types"

export const _dropComponent: React.FC<DropProps> = ({
    dropId,
    className = "",
    disabled = false,
    onEnter,
    onExit
}) => {

    if (disabled) return null

    const { dragData, setHover, clearHover } = _useDrag()

    return (
        <span
            className={className}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: dragData && !disabled ? "initial" : "none",
                zIndex: 999
            }}
            onMouseEnter={() => {
                setHover(dropId)
                onEnter && onEnter(dragData)
            }}
            onMouseLeave={() => {
                clearHover()
                onExit && onExit(dragData)
            }}
        />
    )
}