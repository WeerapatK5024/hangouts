import React, { useContext, useState } from 'react';
import "./hangout.css";
import UserCard from '../components/UserCard';
import { useEffect } from 'react';
import { FirebaseContext } from '../firebase/Firebase';

const Hangout = () => {
    const {data} = useContext(FirebaseContext); // get data from firebase
    useEffect(() => {
        if(data !== null){
            const new_list = [];
            for(let key of Object.keys(data)){ // generate each key for each data?
                console.log(data[key]);
                users.map(() => {new_list.push()});
                new_list.push(data[key]);
            }
            setUsers(new_list);
        
        }
    },[data]); // When data change then excute ^^^
    const [users, setUsers] = useState([{
        name: "User#1",
        description: "hola!",
    },
    {
        name: "User#2",
        description: "SaWadDee",
    }
    ]);
     const [name,setName] = useState("");
     const [dest,setDest] = useState("");
     useEffect(() =>{
        console.log(dest)
     } ,[dest,name]) // when  <
    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log({name},{dest});
                const new_user = [];
                users.map((user) => {new_user.push(user)}); // copy any info from users to new_user
                new_user.push({name:name,description:dest}); // name is name , description is dest <from input>
                setUsers(new_user);
            }}>
                <div className='fordiv'>

                    <p className='fortext'>
                        Name :
                        <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
                    </p>

                    <p className='fortext'>
                        Description :
                        <input type="text" value={dest} onChange={(e) => {setDest(e.target.value)}}/>
                    </p>

                    <input type="submit" />

                </div>

            </form>
            <div className='container'>
                {/* <UserCard name="Best" description="BestEngineer" />
                <UserCard name="Ken" description="Professor Ken" />
                <UserCard name="Cat" description="My Cat" />
                <UserCard name="nova" description="Hola! el nova is here" /> */}
                {
                    users.map((user) => {
                        return <UserCard name={user.name} description={user.description}/>;
                    })
                }
            </div>
        </>

    )
}

export default Hangout