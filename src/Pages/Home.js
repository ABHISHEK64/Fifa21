import React, { useEffect, useState } from 'react'
import  topCorner  from '../Images/1.png';
import MiddleImage from '../Images/2-removebg-preview.png';
import SerchButton from '@material-ui/icons/SearchOutlined';
import CsvData from '../Output.json';
import '../App.css'
import { Card, CardContent } from '@material-ui/core';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
const getPlayer=async(key,q)=>{
    const {data}=await axios.get(`/api/search?q=${q}`)
    console.log("getPlayer",data);
}
function Home() {
    
    const [querry,setQuerry]=useState('');
    const[data,setData]=useState([]);
    useEffect(()=>{
      
        setData(CsvData);
      
    },[]);
    return (
        <>
                <div className="container">
        <div className="topCorner">
          <img src={topCorner}/>
        </div>
        <div className="MiddleCorner">
          <img src={MiddleImage} width="400px" height="150%"/>
        </div>
      
      </div>
      <div className="rightContainer">
        <h1 className="heading">Fifa <span className="subHeading"> 19</span></h1>
        <form className="form">
          <input  className="textInput" type="text"  placeholder="Enter Your Favorate Name" onChange={(event)=>setQuerry(event.target.value)}/>
          <button className="Btn-Block" type="button"><SerchButton className="search"/> <span className="btn-text">Submit</span></button>
          
        </form>
        <div className="CardContainer">
          {data.filter((item)=>{
              if(querry===""){
                  return item
              }
              else{
                  return item.Name.toLowerCase().includes(querry.toLowerCase());
              }
          }).map((item,key)=>{
             console.log('key',key);      
            return(
              <>
               <Link to={`/player/${item.Name}`} className="Link">
              <Card className="Card" key={key}>
                <CardContent className="CardImg">
                   <img src={item.img} className="img" alt="IMG"/>
                  </CardContent>
                <CardContent className="CardName">
                  <h2>
                    {item.Name}
                  </h2>
                </CardContent>
                <CardContent className="CardDetails">
                  <h3>
                    {item.Age}
                  </h3>
                  <h3>
                    {item.Nationality}
                  </h3>
                </CardContent>
                <CardContent>
                <Link to={`/player/${item.Name}`} className="Link">
                  View
                </Link>
                </CardContent>
              </Card>
              </Link>
              </>
              
            )
          })}

        </div>
      </div>
        </>
    )
}

export default Home
