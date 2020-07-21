import { _useDrag } from "./_useDrag"
import { _IProps } from "./__init"

type Props = {
    dropId: _IProps["dropData"]
    className?: string
    disabled?: boolean
    onEnter?: (cb: (data: _IProps["dragData"]) => void) => void
    onExit?: (cb: (data: _IProps["dragData"]) => void) => void
}

export const _dropComponent: React.FC<Props> = ({
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