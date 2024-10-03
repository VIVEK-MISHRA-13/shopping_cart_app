import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading] = useState(false);
  const [post, setPost] = useState([]);
  async function fetchProductData(){
    setLoading(true);
    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      setPost(data);
      console.log(data);
    }
    catch(error){
      console.log("Error aa gaya bhai");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchProductData();
  },[])

  return(
    <div>
      {
        loading ? (<div className="flex w-full h-full items-center justify-center mt-52"><Spinner /></div>) : 
        post.length > 0 ? 
        (<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
         {
           post.map((post)=>(
            <Product key={post.id} post={post}/>
          ))
         }
        </div>):
        <div>No Data found</div>
      }
    </div>

  );
};

export default Home;
