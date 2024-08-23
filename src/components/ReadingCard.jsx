function ReadingCard(){

    return(
        <div className="h-1/4 flex p-2">
            <img className='h-5/6' src='public\murakami.jpg' alt='Bookcover'/>
            <div className="p-2 w-full flex">
                <div className="w-1/2">
                    <div className="text-2xl text-center">Currently Reading</div>
                    <div className="text-xl text-center" >Escucha la canción del viento y Pinball 1973</div>
                    <div className="text-lg  text-center">Haruki Murakami</div>
                </div>
                <div className=" w-1/2 text-center text-xs">
                Escucha la canción del viento (1979), la ópera prima de Murakami, sigue a un estudiante de veintiún años, sin nombre, de vacaciones en su ciudad natal, en agosto de 1970. El joven pasa el tiempo en compañía de su mejor amigo, apodado el «Rata», una chica con cuatro dedos en la mano izquierda y un barman. A estos personajes se suma la fi gura de un escritor (inventado): Derek Heartfield, con quien se abre y se cierra la obra. Pinball 1973 (1980) se desarrolla tres años después. Ese mismo joven vive ahora en Tokio, con dos gemelas idénticas, mientras el «Rata» sigue viendo pasar la vida en el J.’s Bar. Una novela melancólica (con gatos, pozos y antiguas novias), en una atmósfera poética, que contiene las mejores escenas de pinball de la historia de la literatura.
                </div>
            </div>
            
        </div>
    )
}

export default ReadingCard