function BookCard(props){

    return (
    <div  className="bg-green-50 max-h-52 max-w-xs w-1/4 m-1 flex flex-col items-center justify-center">
        <div onClick={props.onClick} className="flex justify-center w-full">
            <img className="max-h-24" src={props.img} alt="Bookcover"/>
        </div>
        <div className="text-center">
            <div className="w-full line-clamp-1 ">{props.title}</div>
            <div>{props.author}</div>
        </div>
    </div>
    )
}

export default BookCard