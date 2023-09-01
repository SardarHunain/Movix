import React,{useState} from 'react'
import Modal from './Modal'
import axios from 'axios'

export default function Results(props) {
    

    const boxes = props.movies.map(
        (item,index)=>{
            return <Box id = {item.id} key={index} image={item.poster_path} title={item.original_title} rating={item.vote_average}/>
        }
    )

    return (
    <div className='w-full grid md:grid-cols-3 gap-5  '>
        {boxes}
    </div>
  )
}

const Box = (props)=>{
    const [modal, setModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState({});
    

   

    const handleModal = async (id)=>{
        
        await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_SEARCH_API_KEY}`)
        .then((res)=>{
            setSelectedMovie(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })

        setModal(!modal)
    }



    const IMGPATH = process.env.REACT_APP_IMGPATH;
    return(
        <div className='shadow  mt-3 min-h-[200px] pb-1' onClick={()=>{handleModal(props.id)}}>
            <img src={IMGPATH+props.image} alt="" className='w-full'/>
            <div className='flex justify-between px-2 items-center'>
                <span className='text-2xl text-white'>
                    {props.title}
                </span>
                <span className='text-xl text-yellow-500 font-bold'>
                    {props.rating}
                </span>
            </div>
            {modal && <Modal movie={selectedMovie}/>}
        </div>
    )
}