import { useEffect } from "react"

const Productos = () => {
  useEffect(()=> {
    console.log("componente listo")
  }, [])

  return (
    <div className="bg bg-red-500">
      <h1>Desde productos</h1>
    </div>
  )
}

export default Productos
