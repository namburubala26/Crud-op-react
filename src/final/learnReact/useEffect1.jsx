import React,{useState,useEffect} from "react";
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const Final = () => {
    const [drinksData,setDrinksData] = useState([]);
    const [searchTerm,setSearchTearm] =useState('');
    const [loader,setLoader] =useState(false);
    const [isError,setIsError]=useState({status:false,msg:""});
    const fetchDrink = async(apiURL) => {
        setIsError({status:false,msg:""});
        setLoader(true);
        try {
            const respone = await fetch(apiURL);
            const {drinks} = await respone.json();
            setDrinksData(drinks);
            setLoader(false);
            setIsError({status:false,msg:""});
            if(!drinks){
                throw new Error("data not found")
            }
        } catch (error) {
            console.log(error);
            setLoader(false);
            setIsError({status:true,msg:error.message || "Something went wrong,pls try again"});
        }
    }
    useEffect(() => {
        const correctURL= `${URL}${searchTerm}`
        fetchDrink(correctURL);
    },[searchTerm]);
    return (
        <div>
            <form>
                <input 
                type="text"
                name="search"
                id="search"
                placeholder="search something new..."
                value={searchTerm}
                onChange={(e) => setSearchTearm(e.target.value)}
                />
            </form>
            <hr/>
            {loader && isError?.status && <h3>Loading...</h3>}
            {isError?.status && <h3 style={{color:'red'}}>{isError.msg}</h3>}
                {
                    !loader && isError?.status&& <ul className="cocktail-data">
                    {
                        drinksData.map((eachDrink) => {
                            const {idDrink,strDrink,strDrinkThumb} = eachDrink;
                            return (
                                <li key={idDrink}>
                                    <div>
                                        <img src={strDrinkThumb} alt={strDrink} />
                                    </div>
                                    <div className="text">
                                        <h3>{strDrink}</h3>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                }
        </div>
    )
}
export default Final;