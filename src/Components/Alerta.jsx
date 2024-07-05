const Alerta = ({alerta}) => {
    return (
      <div  className={`${alerta.error ? 'bg-red-500':'bg-blue-500'} rounded-xl text-center text-white my-10' h-12 mb-3`}>
        <h1 className="flex justify-center items-center">{alerta.msg}</h1>
      </div>
    )
  }
  
  export default Alerta
  