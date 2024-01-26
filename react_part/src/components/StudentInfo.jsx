import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export default function StudentInfo({students,error,deleteData}) {
  return (
    <>  
        <h1 className="m-2">Student List</h1>
        {students.length > 0 ? (
          <table className="table" border={1} width={'100%'}>
            <thead className="thead-light">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student.id}>
                  <td scope="row">{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td >
                    <button type="button" onClick={()=>{deleteData(student.id)}} className="btn btn-danger m-1">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button type="button" className="btn btn-success m-1">
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
    </>
  )
}
