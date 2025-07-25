import { useEffect, useState } from "react"
import { CartAPI } from "./constants";

const useCartData=()=>{
    const [data,setdata]=useState([]);
    const [filtered,setfiltered]=useState([]);
    useEffect(()=>{
        fetchCartAPI();
    },[]);

    const fetchCartAPI=async ()=>{
        const API=CartAPI;
        const API_Data=await fetch(API)
        const response=await API_Data.json();
        setdata(response?.categories);
        setfiltered(response?.categories)
        console.log(response);
    }
    return {data,filtered,setfiltered};
}
export default useCartData;