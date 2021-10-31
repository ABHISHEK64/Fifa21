import React, { useEffect, useState } from 'react'
//import Chart from '../Component/Chart'
import './Profile.css'
import Navbar from '../Component/Navbar'
import {useParams } from 'react-router-dom';
import CSV from '../Output.json'
import {RadarChart,PolarGrid,PolarAngleAxis,PolarRadiusAxis,Legend,Radar} from 'recharts'
function Profile() {
    const id=useParams() ;
    console.log('id=',id);
    const[data,setData]=useState([]);
    useEffect(() => {
        setData(CSV)
    }, [])
    console.log(data);
    return (
        <div className="Profile">
            <Navbar/>
        
                <div className=" Profile_Body">
                  
                 <h1 className="PlayerName">{id.playerName}</h1> 
                 </div>
                 {
                   data.filter((item)=>item.Name===id.playerName).map((item)=>{
                      const data12=[{
                        "Name":"Crossing",
                        "Val":item.Crossing
                      },
                      {
                        "Name":"Finishing",
                        "Val":item.Finishing
                      },
                      {
                        "Name":"HeadingAccuracy",
                        "Val":item.HeadingAccuracy
                      },
                      {
                        "Name":"ShortPassing",
                        "Val":item.ShortPassing
                      },
                      {
                        "Name":"Volleys",
                        "Val":item.Volleys
                      }
                    ]  
                    return(
                      <div className="PlayerProfile">    
                    <div className="Chart">
                      
                        
                      
                    <RadarChart outerRadius={90} width={400} height={400} data={data12}>
                      {console.log(item)}
                    <PolarGrid />
                    <PolarAngleAxis dataKey="Name" />
  <PolarRadiusAxis angle={30} domain={[0, 100]} />
  <Radar name={item.Name} dataKey="Val" stroke="#FE70BD" fill="#FE70BD" fillOpacity={0.6} />
  
  <Legend />


                    </RadarChart>
                </div>
                <div className="rightProfile">
                    <div className="Player_Value">
                    <img src={item.img} className="player_Img"/>
                    <button className="Btn_Block_Player">Overall={item.Overall}</button>
                     <button className="Btn_Block_Player">Potential={item.HeadingAccuracy}</button>
                    </div>
                    <h3>Age:{item.Age}</h3>
                    <h3>Nationality:{item.Nationality}</h3>
                    <h3>Position:{item.Position}</h3>
                    <h3>Jersey Number:{item.JerseyNumber}</h3>
                    <h3>Height:{item.Height}</h3>
                    <h3>Weight:{item.Weight}</h3>
                    <h3>PreferredFoot:{item.PreferredFoot}</h3>
                    <h3>Joined:{item.Joined}</h3>
                    <h3>Club:{item.Club}</h3>
                    <h3>Value:{item.Value}</h3>
                    <h3>Wage:{item.Wage}</h3>
                    <h3>WorkRate(Attack-defence):{item.WorkRate}</h3>
                    <h3> Contract Valid Until:{item.ContractValidUntil}</h3>

                </div>
                </div>
                      )
                   })

                 }
                
                
            
            
        
        </div>
    )
}

export default Profile
