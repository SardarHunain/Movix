import React from 'react';

export default function Modal({ movie }) {



  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-md z-50'>
      <div className='w-1/2 h-1/2 bg-white rounded-md relative'>
        <div style={{
            height:'100%', 
            // background: `url(${process.env.REACT_APP_IMGPATH}${movie.poster_path})`,
            backgroundSize: 'cover',
            backdropFilter: 'blur(5px)',
            //make this div scrollable
            overflowY: 'scroll'
            

         }} className='bg-black rounded-t-md  px-2'>
          <span className='text-3xl text-white' style={{ width:'100%' }}>
            {movie.title} ({new Date(movie.release_date).getFullYear()})
            ({movie.genres.map((item,index)=>{
                return item.name + (index === movie.genres.length-1 ? '' : ', ')

            })
            })
          </span>
            <span className='text-xl text-yellow-500 font-bold' style={{ float: 'right' }}>
                {movie.vote_average}
            </span>
            <br />
            <br />
            <span className='text-2xl text-yellow-500 font-bold'>
                {movie.overview}
            </span>
            <br />
            <br />
            <span className='text-xl text-yellow-100 font-bold'>
                <h3>Production Companies:</h3>
                {movie.production_companies.map
                ((item,index)=>{
                    return item.name + (index === movie.production_companies.length-1 ? '' : ', ')

                })
                }
            </span>

            <br />
            <br />

            <span className='text-xl text-yellow-100 font-bold'>
                Revenue: {(movie.revenue/1000000).toFixed(1)} million dollars
            </span>
            <br />
            <br />
            <span className='text-2xl text-yellow-500 font-bold'>
              Runtime: {movie.runtime} minutes
            </span>

        </div>
        <div className='p-4'>
          {/* Additional content for the modal body */}
        </div>
      </div>
    </div>
  );
}
