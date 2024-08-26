function ReadingCard(props){

    return(
        <div className="h-1/4 flex p-2">
            <img className='h-5/6' src={props.img} alt='Bookcover'/>
            <div className="p-2 w-full flex">
                <div className="w-1/2">
                    <div className="text-2xl text-center">{props.status}</div>
                    <div className="text-xl text-center">{props.title}</div>
                    <div className="text-lg  text-center">{props.author}</div>
                </div>
                <div className="line-clamp-5 w-1/2 text-center text-xs">
                {props.description}
                </div>
            </div>
            
        </div>
    )
}

export default ReadingCard