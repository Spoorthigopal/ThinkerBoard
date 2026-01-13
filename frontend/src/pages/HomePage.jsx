import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";
import { set } from "mongoose";
import navbar from "../components/navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import toast from "react-hot-toast";

const HomePage = () => {
    const [isRateLimited, setIsRateLimited] = useState(false);
    const [notes,setNotes]=useState([] )
    const [loading,setLoading]=useState(false)

    useEffect(()=>{ 
        const fetchNotes=async()=>{
            try{
                const res=await axios.get('http://localhost:5173/api/notes')
                console.log(res.data)
                setNotes(res.data)
                setIsRateLimited(false)
               
            }catch(err){
                console.log(err)
                if(err.response && err.response.status===429){
                    setIsRateLimited(true)
                }   
                else{
                    toast.error("failed to fetch notes")
                }
                
            }finally{
                setLoading(false)
            }

        };

        fetchNotes();
    },[])

    return (    
        <div className="min-h-screen">
            <navbar/>
            {isRateLimited && <RateLimitedUI />}
        </div>
    );
};
export default HomePage;