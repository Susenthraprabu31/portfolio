import React from 'react'
import Card from './Card'

function App() {

let data = [
  {
    title:"Bmw",
    image:"https://qph.cf2.quoracdn.net/main-qimg-fff0a0e4daba21899b66da8178055645",
    description:"Bayerische Motoren Werke AG, commonly abbreviated to BMW, is a German multinational manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany.",
  },

  {
    title:"Porsche",
    image:"https://logos-world.net/wp-content/uploads/2021/06/Porsche-Logo.png",
    description:"Dr. Ing. h.c. F. Porsche AG, usually shortened to Porsche, is a German automobile manufacturer specializing in luxury, high-performance sports cars, SUVs and sedans, headquartered in Stuttgart, Baden-Württemberg, Germany.",
  },

  {
    title:"Audi",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2JKD1RNv4Tug8yCXoC2dvd6pbgxxt_H4FaQ&s",
    description:"Audi AG is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany. A subsidiary of the Volkswagen Group, Audi produces vehicles in nine production facilities worldwide. ",
  },
]
 
  return <>
    <div>
    {/* <!-- Page Content --> */}
<div className="container">

  {/* <!-- Page Heading --> */}
  <h1 className="my-4">PREMIUM CAR
    <small>Brands</small>
  </h1>

  <div className="row">
   {
    data.map((e,i)=>{
      return <Card data={e} key={i}/>
   })
 }
 </div>

</div>
    </div>
    </>
}

export default App
