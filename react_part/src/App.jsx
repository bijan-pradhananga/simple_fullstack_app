import { useEffect, useState } from "react"
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons'

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
      <div className="container">
        
          {students.length > 0 ? (
            <table className="table" border={1} width={'100%'}>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col" colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index}>
                    <td scope="row">{index + 1}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                    <td>
                        <button type="button" class="btn btn-danger">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </td>
                    <td>
                      <button type="button" class="btn btn-success">
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                    </td>
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
