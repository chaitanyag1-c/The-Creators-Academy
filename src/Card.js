import React from 'react'
import  './first.css'

const Card = (props) => {
    console.log(props);
    return (
<div>

<div className="header"  > 
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact Us</li>
    </ul>
    

    </div>
    <div className="card">
  <img src={props.avatar} alt ="img" style={{width:'100%'}}>
  </img>
  <h1>{props.name}</h1>
  <p className="title">
  {props.title}</p>
    <p>{props.children}</p>
    <p><button onClick={props.onChangename}>Component change name</button></p>

    <input type="text" onChange={props.onInputChange} value={props.name}  ></input>
  <div style={{margin:'24px 0'}}>
    
  </div>
  <p><button>Contact</button></p>
</div>

    </div>


    )
}

export default Card
