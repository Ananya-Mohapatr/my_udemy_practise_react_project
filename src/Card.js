import React from 'react'
import './App.css';

const Card = props => {
    console.log(props)
    return (
        <div className="card">
            <img src={props.avatar} alt="Avatar" style={{ width: '100%' }} />
            <div className="container">
                <h4><b>{props.name}</b></h4>
                <p>{props.title}</p>
                <input type="text" onChange={props.onChangeInput} value={props.name} placeholder='Enter name of choice'/>
                <p><button className="button" onClick={props.onChangeName}>Change Name</button></p>
                <p><button className="button3" onClick={props.onDelete}>Delete</button></p>

                <div>{props.children}</div>
            </div>
        </div>
    )
}

export default Card
