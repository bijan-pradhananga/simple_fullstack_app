import { useEffect, useState } from "react"
import axios from 'axios';
import StudentForm from "./components/StudentForm";
import StudentInfo from "./components/StudentInfo";

function App() {
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
      const response = await axios.post('http://127.0.0.1:8000/api/students',formData);
      if (response.status === 200) {
        fetchData();
      } 
      alert(response.data.message);
    } catch (error) {
      setError('Error occured while adding data')
    }
  }

  //calling the fetch function
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <StudentForm addData={addData}/>
        <StudentInfo students={students} error={error}/>
      </div>
    </>

  )
}

export default App
