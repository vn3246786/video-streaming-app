import React, { useState } from 'react'
import "./navbar.scss"
import { Person, Search } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import { GenreValues } from '../../Variables'




const Navbar = ({logOut,setSeries,series}) => {
const navigate =useNavigate()

  const [videoType,setVideoType] =useState([
    {title:'movies',
      onSelected:series?false:true
    },
    {title:'series',
      onSelected:series?true:false
    }
  ])


function handleClick(index,type){
  type==='movies' && setSeries(false)
  type==='series'&& setSeries(true)
  setVideoType((p)=>{
    return p.map((value,i)=>{
if(i===index){
  return {...value,onSelected:true}
}else return {...value,onSelected:false}
    })
  })
}

  return (
    <div className='navbar'>
      <div className="container left">
        <img src="data:image/png;base64,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" alt="" />
        {videoType.map((v,i)=>{
         return <span style={{backgroundColor:v.onSelected?'gray':'transparent',borderBottom:v.onSelected?'3px solid white':'transparent'}} key={i} onClick={()=>handleClick(i,v.title)}>{v.title}</span>
        })}
       <div className="genreList">
        <span>Genre</span>
        <div className="wrapper">
        {GenreValues.map((data,i)=>{
        
          return <Link key={i}  className='link' to={"/genre"} state={[data.value,series]}>
         <div className="genre">{data.title}</div> 
         </Link>
        })}
        </div>
       </div>
      </div>
      <div className="container right">
        <Link to={'/SearchPage'} className='link' >
    <Search className='search'  />
        </Link>
  
      <div className="profile-container">
    <Person  className='person'/>
       <div className="profileOptions">
        <span className='option' onClick={()=>navigate('/profile')}>Profile</span>
        <span className='option'  onClick={()=>navigate('/watchlist')}>Watchlist</span>
        <span onClick={logOut} className='option'>Log Out</span>
        </div> 
        </div>  
   </div>
      </div>
    
  )
}

export default Navbar
