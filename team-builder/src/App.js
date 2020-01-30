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
  const [memberToEdit,setMemberToEdit] = useState()
  
  const editMember= e => {
    // setMemberToEdit(member)
    console.log(e.target.id)
    console.log(team.find(member=> member.id== e.target.id))
    const member = team.find(member=> member.id== e.target.id)
    setMemberToEdit(memberToEdit=member);
    console.log(memberToEdit)

  }

  return (
    <div>
      <Form addMember={addMember}/>
      <h1>Team Members</h1>
      <TeamList team={team} editMember={editMember}/>
   
        
    </div>
  );
}

export default App;
