function ListCard(props){

    return(
        <div onClick={props.onClick} className= {
            props.highlight ? "bg-yellow-300 m-1 p-2 rounded-xl" : "bg-green-500 m-1 p-2 rounded-xl"
            }>
            {props.name}
        </div>
    )
}

export default ListCard