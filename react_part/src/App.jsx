import { useEffect, useState } from "react"
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
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
    fetchData();
  }, []);


  return (
    <>
      <div>
        {students.length > 0 ? (
          <table border={1} width={'100%'}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>{error}</div>
        )}
      </div>
    </>

  )
}

export default App
