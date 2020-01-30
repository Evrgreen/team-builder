import React, { useState } from 'react';
export function Form(props) {
  const [member, setMember] = useState({
    name: "",
    role: "",
    email: ""
  });
  const handleChanges = e => {
    console.log(member);
    setMember({
      ...member,
      [e.target.id]: e.target.value
    });
  };
  const submitForm = e => {
    e.preventDefault();
    props.addMember(member);
    setMember({name:"", role:"",email:""})
  };
  return (<form onSubmit={submitForm}>
    <label htmlFor="name">Name</label>
    <input onChange={handleChanges} type="text" id="name" placeholder="Name" value={member.name}/>
    <label htmlFor="role">Role</label>
    <input onChange={handleChanges} type="text" id="role" placeholder="Role" value={member.role}/>
    <label htmlFor="email">E-mail</label>
    <input onChange={handleChanges} type="email" id="email" placeholder="E-mail" value={member.email} />
    <button type="submit">Add Member</button>
  </form>);
}
