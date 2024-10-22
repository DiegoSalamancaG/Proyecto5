export const CardDetailBleach = ({bleach}) => {
  return(
    <>
    <div className="card">
      <div className="card_header">
        <img src={bleach.avatar[0]} alt={`Imagen de ${bleach.id}`}></img>
        <h2>{bleach.id}</h2>
      </div>
      <div className="card_body">
        {/* <h3>{bleach.name.romanji}</h3> */}
        <p>{bleach.description}</p>
      </div>
    </div>
    </>
  )
}