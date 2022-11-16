import React from 'react'
import Navbar from './Navbar'

const Productos = () => {
  const productos = [
        {name:"Hervidor", price:"$3000", img:'/productos/hervidor.jpg'},
        {name:"Zapatillas", price:"$20000", img:'/productos/zapatillas.jpg'},
        {name:"Ipad", price:"$100000", img:'/productos/ipad.png'},
    ]
 
  

  return (
    <>
    
        <Navbar />
        <h1 style={{textAlign:'center'}}>Productos</h1> 
        <div style={{display:'flex',flexDirection:'initial'}}> 
        <hr></hr>
            {
                productos.map((producto,index) => (
                    <div key={index} className='col mb-4' style={{maxWidth:"880px", display:'flex', flexDirection:'row', justifyContent:'center',padding:10}}>
                        <div className='card' style={{width:200, padding:10}}>
                        <img src={producto.img} alt='imagen'/>
                        <h3 className='text-center'>{producto.name}</h3>
                        <h3 className='text-center'>{producto.price}</h3>
                        <button style={{cursor:'pointer',borderRadius:8}}>Comprar</button>
                        </div>
                  </div>
                ))
            }
        </div>
    </>
  )
}

export default Productos