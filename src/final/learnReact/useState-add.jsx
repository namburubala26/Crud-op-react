import React, {useState} from "react";
const Index =() =>{
    const initialArray ={
    
        id:"rwghturehkg",
        firstName:"emma",
        lastName:"watson",
        age:26,
    }
    const [data,setData]=useState(initialArray);
    const handleDelete =(comingId) => {
        const filterData = data.filter((eachItem) => {
            return eachItem.id !== comingId;
        })
        setData(filterData);
    }
    return (<div>
        <ul>
            {
                data.map((eachItem,index) => {
                    const {firstName,lastName,age,id}=eachItem;
                    return (<li key={index}>
                        <div>
                            firstName:{firstName}
                        </div>
                        <div>
                            lastName:{lastName}
                        </div>
                        <div>
                            age:{age}
                        </div>
                        <button onClick={() => handleDelete(id)}>Delete me</button>
                    </li>
                    );
                })
            }
        </ul>
    </div>
    );
};
export default Index;