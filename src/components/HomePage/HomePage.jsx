import { Html } from '@react-three/drei'
import { db } from '../../firebase';
import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs, doc, query } from "firebase/firestore";
import Lab from '../Environment/Lab'
import './HomePage.css'
import { useNavigate } from 'react-router-dom';

function HomePage({setTeacher, setStudent}) {

    const [name, setName] = useState('');
    const [teacherList, setTeacherList] = useState([])
    const [dissable, setDissable] = useState(false)
    // const [mentor, setMentor] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setDissable(true)
        setName('')

        try {
        const docRef = addDoc(collection(db, "students"), {
            name: name,
            physics: {
                expOne: false,
                expTwo: false
            },
            chemistry: {
                expOne: false,
                expTwo: false
            }, 
            biology: {
                expOne: false,
                expTwo: false
            },
            quiz: 0
        });

        setStudent(name)
        setTeacher(mentor)

        console.log("Document written with ID: ", docRef.id);
        } catch (e) {
        console.error("Error adding document: ", e);
        }
        
        navigate('/experiment')
    };

    const fetchNames = async() => {
        await getDocs(collection(db, "teachers")).then((result) => {
            const newData = result.docs
            .map((doc) => ({...doc.data(), id:doc.id}))
            setTeacherList(newData)
        })
    }

    useEffect(() => {
        fetchNames()
    }, [])

  return (
    <>
        <Lab />
        <Html position={[-1, 3.5, -2]}>
            <div className="students-card">
                <form onSubmit={handleSubmit} className="form-tag">
                    <h1 className='title'>Enter your number</h1>
                    <input placeholder='Enter Roll Number' type="text" value={name} onChange={(event) => setName(event.target.value)} />
                    {/* <select className="drop-bar" onChange={(event) => setMentor(event.target.value)}>
                        <option>select mentor</option>
                        {teacherList.map((ins) => (
                            <option key={ins.id} value={ins.name}>{ins.name}</option>
                        ))}
                    </select> */}
                    <button className='btn' type="submit" disabled={dissable}>Submit</button>
                </form>
            </div>
        </Html>
    </>
  )
}

export default HomePage