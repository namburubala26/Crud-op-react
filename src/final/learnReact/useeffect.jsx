import React,{useState,useEffect} from "react";
const URL ="https://jsonplaceholder.typicode.com/users";
const Final = () => {
    const [userData,setUserData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [isError,setIsError]=useState({status:false,msg:""});
    const fetchUserData = async (apiURL) => {
        setLoading(true);
        setIsError({status:false,msg:""});
        try {
            const respone = await fetch(apiURL);
            const data = await respone.json();
            setUserData(data);
            setLoading(false);
            setIsError({status:false,msg:""});
            if(respone.status === 404){
                throw new Error("data not found")
            }
        } catch (error) {
            setLoading(false);
            setIsError({status:true,msg:error.message || "Something went wrong,pls try again"});
        }
        
    }
    useEffect(() => {
        fetchUserData(URL);
    },[]);
    if(loading) {
        return (
            <div>
                <h3>Loading....</h3>
            </div>
        )
    }
    if(isError?.status){
        return (
            <div>
                <h3 style={{color:"red"}}>
                    {isError?.msg}
                </h3>
            </div>
        )
    }
    return (
        <div>
            <h1>UseEffect example</h1>
            <ul>
                {
                    userData.map((eachUser) => {
                        const {id,name,email,username}=eachUser;
                        return (<li key={id}>
                            <div>{name}</div>
                            <div>{email}</div>
                            <div>{username}</div>
                        </li>)
                    })
                }
            </ul>
        </div>
    );
};
export default Final;