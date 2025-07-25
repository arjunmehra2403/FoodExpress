import { useEffect, useState } from "react";
import { FetchMenu } from "../utils/constants";
const useMenu=()=>{
    //creating local varabile exactly we are creating state varaible
    const [menuInfo,setMenuInfo]=useState([]);

    //fetch the Data
    useEffect(()=>{
        fetch_Menu();
    },[]);
    const fetch_Menu=async ()=>{
        const API=FetchMenu;
        const data=await fetch(API);
        const response=await data.json();
        setMenuInfo(response.bbqs);
    };
    return menuInfo;
}


export default useMenu;