import ReadingCard from "./ReadingCard"

function MainContainer(){

    return(
        <div className='bg-red-100 w-9/12 h-screen' >
            <ReadingCard/>
            <div className="h-3/4">Body</div>
        </div>
    )
}

export default MainContainer