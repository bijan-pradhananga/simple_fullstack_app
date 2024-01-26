import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function StudentEdit() {
 
    const [student,setStudent] = useState({
        name: '',
        age: '',
        email: '',
        phone: ''
    })
    const {id} = useParams()
    const fetchStudent = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/students/${id}/edit`);
          if (response.status === 200) {
            const { name, age, email, phone } = response.data.student;
            setStudent({ name, age, email, phone });
          } else {
            console.log(response.data.message);
          }
        } catch (error) {
          console.log('An error occurred while fetching data',error);
        }
    };
   
    //calling the fetch function
    useEffect(() => {
        fetchStudent();
      }, [id]);
      

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.id]: e.target.value
        });
    };

    const updateStudent = async (student) => {
        try {
          const response = await axios.put(`http://127.0.0.1:8000/api/students/${id}/update`,student);
          if (response.status === 200) {
            alert(response.data.message)
          } else {
            console.log(response.data.message);
          }
        } catch (error) {
          console.log('An error occurred while fetching data',error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //updating the data on submit
        updateStudent(student)
    }
    return (
        <>
        <div className="container">
        <h1 className="m-2">Edit Student Form</h1>
            <form action="" method="post" className="m-3" onSubmit={handleSubmit} >
                <div className="form-group ">
                    <label htmlFor="name">Name</label>
                    <input type="name" className="form-control" value={student.name} id="name" placeholder="Enter name"
                        onChange={handleChange}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="number" className="form-control" value={student.age} id="age" placeholder="Enter age"
                        onChange={handleChange}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" value={student.email} id="email" placeholder="Enter email"
                        onChange={handleChange}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="number" className="form-control" value={student.phone} id="phone" placeholder="Enter phone"
                        onChange={handleChange}
                        required />
                </div>
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form> 
        </div>

        </>
    )
}
