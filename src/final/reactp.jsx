import React, { useState } from "react";
import './CSS/reactp.css';
const Index = () => {
    const [inputs,setInputs] = useState({
        name:"",
        email:"",
    })
    const [tableData,setTableData] = useState([]);
    const [editClick,setEditClick] = useState(false);
    const [editIndex,setEditIndex] = useState("");
    const handleChange =(e) => {
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value,

        })
    }
    const handleSubmit =(e) => {
        e.preventDefault();
        if(editClick) {
            const tempTableData = tableData;
            Object.assign(tempTableData[editIndex],inputs);
            setTableData([...tempTableData]); 
            setEditClick(false)
            setInputs({
                name:"",
                email:"",
            })
        } else {
            setTableData([
                ...tableData,inputs
            ])
            setInputs({
                name:"",
                email:"",
            })
        }

    }
    const handleDelete = (index) => {
        const data = tableData.filter((item,i) => i !== index);
        setTableData(data);
    }
    const handleEdit = (index) => {
        const tempData = tableData[index];
        setInputs({
            name:tempData.name,
            email:tempData.email,
        })
        setEditClick(true);
        setEditIndex(index);
    }
    return (
        <div className="main-div">
            <h1 className="h1-div">Crud App</h1>
            <div className="form-div">
                <form >
                    <div>
                        <label className="label-com">Name:</label>
                        <br/>
                        <input
                            name="name"
                            placeholder="Enter your name"
                            value={inputs.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="label-com">Email:</label>
                        <br/>
                        <input
                            name="email"
                            placeholder="Enter your email"
                            value={inputs.email}
                            onChange={handleChange} 
                            
                        />
                    </div>
                    <button onClick={handleSubmit} type="submit">
                        {editClick? "update":"Add"}</button>
                </form>
            </div>
            <br/>
            <br/>
            <hr/>
            <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item,i) => (
                        
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                                <button onClick={() => handleEdit(i)}>Edit</button>
                                <button onClick={() => handleDelete(i)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );

}
export default Index;