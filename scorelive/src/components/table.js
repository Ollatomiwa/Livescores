import React from 'react'

export default function Table({data}) {
  return (
    <div className='bg-gray-400 grid grid-cols-1 divide-y text-black'>
        {data.data.map((data) => (
            <div className='bg-white py-2'>
                {/* {data.teams.home.name} */}

                <div align = "center">
                    <img src={data.league.country_flag} width={25} alt={data.league.name} />
                    {data.league.name}
                </div>

                <div className='text-center'>
                {data.status_name}
                </div>

                <div className='text-center'>{data.time.datetime} </div>

                <div className='w-full flex p-1'>

                    <div className='w-[10%]' align='center'>
                        <img src={data.teams.home.img} width={30} alt={data.teams.home.name} />
                    </div>
                    <div className='w-[2%] text-right'>{data.teams.home.name}</div>

                <div className='w-[130%] text-right'>{ data.teams.away.name}
                </div>
                <div className='w-[12%]' align='center'>
                        <img src={data.teams.away.img} width={30} alt={data.teams.away.name} />
                    </div>
                </div>


            








            </div>
            
        ))}
    </div>
  )
}
