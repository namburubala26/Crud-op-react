import React, { useState } from "react";
const Index = () => {
    const [firstName,setfirstName]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        let userObj = {
            firstName:firstName,
            email:email,
            password:password,
        };
        console.log(userObj);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-content">
                    <input 
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={firstName}
                        placeholder="enter your name"
                        onChange={(e) => setfirstName(e.target.value)}
                    />
                </div>
                <div className="form">
                    <div className="form">
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        placeholder="enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                </div>
                <div className="form">
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        placeholder="enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>
                    <div className="form">
                        <button type="submit">Submit</button>
                    </div>
            </form>
        </div>
    )
}
export default Index;