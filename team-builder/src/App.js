import React, {useState} from 'react';
import { Form } from './Form';
import TeamList from "./TeamList";



function App() {
  const [team,setTeam] = useState([
    {
      id:1,
      name:"Robert Carsten",
      role:"Front-End",
      email:"rcarsten06@gmail.com"
    }
  ]);
  const addMember = member =>{
    const newMember ={
      id: Date.now(),
      name:member.name,
      role:member.role,
      email:member.email
    };
    setTeam([...team,newMember])
  }
    console.log(team)
  return (
    <div>
      <Form addMember={addMember}/>
      <h1>Team Members</h1>
      <TeamList team={team}/>
   
        
    </div>
  );
}

export default App;
