import React from 'react'

export default function Table({data}) {
  return (
    <div className='bg-gray-400 grid grif-cols-1 divide-y text-black'>
        {data.data.map((data) => (
            <div className='bg-white py-2'>
                {/* {data.teams.home.name} */}

                <div align = "center">
                    <img src={data.league.country_flag} width={25} alt={data.league.name} />
                    {data.league.name}
                </div>
            </div>
            
        ))}
    </div>
  )
}
