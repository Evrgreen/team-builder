import React from "react";


export default function TeamList(props){
    return(
        <div>
        {props.team.map(member => (
            <div className="card" key={member.id}>
              <h2>{member.name}</h2>
              <p>{member.role}</p>
              <p>{member.email}</p>
          </div>
          ))}
          </div>
    )
}