import React, { useState,useEffect } from 'react'
import axios from 'axios';
import StudentForm from "./StudentForm";
import StudentInfo from "./StudentInfo";

export default function Home() {

    const [students, setStudents] = useState([]);
    const [error, setError] = useState(null);
    //fetching data from server
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/students');
        if (response.status === 200) {
          setStudents(response.data.students);
        } else {
          setError(response.data.message);
        }
      } catch (error) {
        setError('An error occurred while fetching data');
      }
    };
  
    //adding data to server
    const addData = async (formData) => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/students', formData);
        if (response.status === 200) {
          fetchData();
        }
        alert(response.data.message);
      } catch (error) {
        console.log(error)
      }
    }
  
    //delete data from the server
    const deleteData = async (id) => {
      let isConfirmed = window.confirm('Are you sure you want to delete?');
      if (isConfirmed) {
        try {
          const response = await axios.delete(`http://127.0.0.1:8000/api/students/${id}/delete`);
          if (response.status === 200) {
            fetchData();
          }
          alert(response.data.message);
        } catch (error) {
          setError('Error occured while deleting data')
        }
      }
    }
  
    //calling the fetch function
    useEffect(() => {
      fetchData();
    }, []);
    return (
        <>
                <div className="col-4">
                    <StudentForm addData={addData} />
                </div>
                <div className="col-8">
                    <StudentInfo students={students} error={error} deleteData={deleteData} />
                </div>
          
        </>
    )
}
