const Calorais = ({cal}) => {
  return (
    <>
        <div className="nutrient-row fw-bold fs-5">
            <span>Calorías</span>
            <span>{cal.valor} {cal.unidad}</span>
        </div> 
         <hr className="border-dark border-2" />
    </>
  )
}

export default Calorais