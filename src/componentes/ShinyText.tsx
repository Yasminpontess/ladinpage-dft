import React from 'react'
import ShinyTextEffect from "../pages/home/ShinyText";
import "./ShinyText.css";

function ShinyTextSection() {
  return (
    <div>{/* Título com efeito ShinyText */}
  <ShinyTextEffect
    text="Construa ou reforme sem preocupações"
    className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-extrabold uppercase"
  />

  {/* Subtítulo sem efeito */}
  <p className="mt-10 text-lg sm:text-xl font-bold text-black">
    JLuiz cuida de tudo do início ao fim da sua obra.
  </p>
  <div className="flex justify-center mt-2 ">
            <div className="w-12 h-2 bg-blue-950 mx-1"></div>
            <div className="w-12 h-2 bg-blue-950 mx-1"></div>
            <div className="w-12 h-2 bg-blue-950 mx-1"></div>
          </div>
    </div>
  )
}

export default ShinyTextSection;