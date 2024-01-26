import React, { useState } from 'react'

export default function StudentForm({ addData }) {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        phone: '',
    });

    //to change the value of the form inputs
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //adding the data on submit
        addData(formData);
        //clearing the inputs in the form
        setFormData({
            name: '',
            age: '',
            email: '',
            phone: ''
        });
    }
    return (
        <>
            <h1 className="m-2">Add Student Form</h1>
            <form action="" method="post" className="m-3" onSubmit={handleSubmit}>
                <div className="form-group ">
                    <label htmlFor="name">Name</label>
                    <input type="name" className="form-control" value={formData.name} id="name" placeholder="Enter name"
                        onChange={handleChange}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="number" className="form-control" value={formData.age} id="age" placeholder="Enter age"
                        onChange={handleChange}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" value={formData.email} id="email" placeholder="Enter email"
                        onChange={handleChange}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="number" className="form-control" value={formData.phone} id="phone" placeholder="Enter phone"
                        onChange={handleChange}
                        required />
                </div>
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
        </>
    )
}
