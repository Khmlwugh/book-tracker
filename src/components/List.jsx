import ListCard from "./ListCard"
import { useState } from "react";

function List(){
    const [select, setSelect] = useState(1)
    

    const lista = [
        {
            id: 1,
            name: "Currently Reading",
        },
        {
            id: 2,
            name: "Japanese Literature",
        },
        {
            id: 3,
            name: "Fiction",
        },
        {
            id: 4,
            name: "Comics",
        },
        {
            id: 5,
            name: "Poetry",
        },
        {
            id: 6,
            name: "Short Stories",
        },
        {
            id: 7,
            name: "Korean Literature",
        }
    ];

    return (
        <div className="w-3/12 h-screen bg-gray-300 p-4">
            {lista.map( (entry) => <ListCard
            highlight= { select == entry.id ? false : true}
            onClick={() => setSelect(entry.id)}
            key={entry.id} name={entry.name}/>)}
        </div>
    )
}

export default List