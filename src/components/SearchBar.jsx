import { useEffect, useState } from "react";

export default function SearchBar(){

    const [searchResults, setSearchResults] = useState([]);

    useEffect(async (query) =>{
        const query = await 
    });

    return(
        <input type="text" placeholder="Search manga..." className="input input-bordered input-primary w-full max-w-xxl" />
    );
}