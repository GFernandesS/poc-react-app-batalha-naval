import './Position.css'

const Position = ({ positionId, onClick, clickable = false, idPrefix }) => {
    return <div
        id={`${idPrefix}-${positionId}`}
        className='position'
        key={`${idPrefix}-${positionId}`}
        style={{ cursor: clickable ? 'pointer' : 'default' }}
        onClick={clickable ? onClick : undefined}>{positionId[0]}-{positionId[1]}</div>
}

export { Position }