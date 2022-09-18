import { useMemo } from "react"
import { Position } from "./Position"

const PositionsContainer = ({ clickable = false, idPrefix, handlePositionOnClick }) => {
    const positions = useMemo(() => {
        const positions = []
        for (let row = 0; row < 10; row++) {
            for (let column = 0; column < 10; column++) {
                positions.push(<Position positionId={`${row}${column}`} key={`${row}${column}`} onClick={handlePositionOnClick} clickable={clickable} idPrefix={idPrefix} />)
            }
        }
        return positions
    }, [])


    return <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '550px' }}>
        {positions}
    </div>
}

export default PositionsContainer