import React from 'react'

const Close = ({justify}) => {
  return (
    <div className={`flex flex-col gap-1 justify-center items-${justify} px-5 h-10`} >
        <span className=' block h-[1px] absolute hover:w-4 rotate-45 bg-white w-5 '></span>
        <span className=' block h-[1px] absolute hover:w-6 -rotate-45 bg-white w-5 '></span>
    </div>
  )
}

export default Close