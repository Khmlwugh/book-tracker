import BookCard from "./BookCard"
import ReadingCard from "./ReadingCard"
import { useState } from "react"

function MainContainer(){
    const [focus, setFocus] = useState(1)


    const Books = [
        {
          id: 1,
          title: 'Escucha la canción del viento y Pinball 1973',
          author: 'Haruki Murakami',
          release_year: '1979',
          status: 1,
          img: 'canciondelviento.jpg',
          description: 'Escucha la canción del viento (1979), la ópera prima de Murakami, sigue a un estudiante de veintiún años, sin nombre, de vacaciones en su ciudad natal, en agosto de 1970. El joven pasa el tiempo en compañía de su mejor amigo, apodado el «Rata», una chica con cuatro dedos en la mano izquierda y un barman. A estos personajes se suma la figura de un escritor (inventado): Derek Heartfield, con quien se abre y se cierra la obra. Pinball 1973 (1980) se desarrolla tres años después. Ese mismo joven vive ahora en Tokio, con dos gemelas idénticas, mientras el «Rata» sigue viendo pasar la vida en el J.’s Bar. Una novela melancólica (con gatos, pozos y antiguas novias), en una atmósfera poética, que contiene las mejores escenas de pinball de la historia de la literatura.'
        },
        {
          id: 2,
          title: 'Amor en los tiempos del cólera',
          author: 'Gabriel García Márquez',
          release_year: '1985',
          status: 2,
          img: 'amorenlostiemposdelcolera.png',
          description: 'Una de las obras más emblemáticas de Gabriel García Márquez, que narra la historia de amor entre Florentino Ariza y Fermina Daza, quienes, a pesar de las dificultades y el paso del tiempo, mantienen un vínculo inquebrantable. Ambientada en el Caribe colombiano a finales del siglo XIX y principios del XX, la novela explora temas de amor, pasión, obsesión, y el inexorable paso del tiempo.'
        },
        {
          id: 3,
          title: 'Dune',
          author: 'Frank Herbert',
          release_year: '1965',
          status: 0,
          img: 'dune.jpg',
          description: 'Set on the desert planet Arrakis, "Dune" tells the story of Paul Atreides, a young nobleman who becomes embroiled in a complex struggle for power, control of the spice melange, and his own destiny. This epic novel blends adventure, mysticism, environmentalism, and politics, making it one of the most influential science fiction works ever written.'
        },
        {
          id: 4,
          title: 'Trainspotting',
          author: 'Irvine Welsh',
          release_year: '1993',
          status: 2,
          img: 'trainspotting.jpg',
          description: 'Set in the gritty streets of Edinburgh, "Trainspotting" follows a group of friends, led by Mark Renton, as they navigate the highs and lows of heroin addiction, poverty, and the search for meaning in a world that seems devoid of it. The novel is raw, unflinching, and darkly humorous, capturing the spirit of the 1990s counterculture.'
        },
        {
          id: 5,
          title: 'Sputnik, Sweetheart',
          author: 'Haruki Murakami',
          release_year: '1999',
          status: 2,
          img: 'sputniksweetheart.jpg',
          description: 'In "Sputnik, Sweetheart", Haruki Murakami explores themes of loneliness, love, and the mysteries of the human heart through the story of Sumire, a young woman who is infatuated with an older woman named Miu. As their relationship deepens, Sumire vanishes during a trip to Greece, leaving behind only questions and a sense of profound loss.'
        },
        {
          id: 6,
          title: 'Fahrenheit 451',
          author: 'Ray Bradbury',
          release_year: '1953',
          status: 2,
          img: 'fahrenheit451.jpg',
          description: 'In a dystopian future where books are banned and "firemen" burn them, "Fahrenheit 451" follows the journey of Guy Montag, a fireman who begins to question the oppressive society he lives in. Through his transformation, the novel explores themes of censorship, conformity, and the power of knowledge, making it a timeless critique of authoritarianism.'
        },
        {
          id: 7,
          title: 'Animal Farm',
          author: 'George Orwell',
          release_year: '1945',
          status: 2,
          img: 'animalfarm.jpg',
          description: 'A satirical allegory of the Russian Revolution, "Animal Farm" uses a group of farm animals who overthrow their human owner to create a society based on equality. However, as the pigs in charge become increasingly corrupt, the farm descends into tyranny, reflecting Orwell\'s critique of totalitarianism and the betrayal of revolutionary ideals.'
        },
        {
          id: 8,
          title: 'Normal People',
          author: 'Sally Rooney',
          release_year: '2018',
          status: 0,
          img: 'normalpeople.jpg',
          description: '"Normal People" follows the complex relationship between Marianne and Connell, two young people from a small town in Ireland, as they navigate the transition from high school to university. The novel explores themes of love, friendship, class, and the ways in which people can change one another, all while capturing the intricacies of modern relationships.'
        }
      ]
      
    const focusedBook = Books.find(book => book.id === focus)

    return(
        <div className='bg-red-100 w-9/12 h-screen' >
            <ReadingCard
            key={focus}
            title={focusedBook.title}
            author={focusedBook.author}
            description={focusedBook.description}
            img={focusedBook.img}
            status={focusedBook.status == 0 ? 'Want to read ' : focusedBook.status == 1 ? 'Currently Reading' : 'Completed' }
            />
            <div className="justify-evenly h-3/4 flex flex-wrap">
                {Books.map( (book) => 
                <BookCard 
                key={book.id} 
                title={book.title}
                author={book.author}
                img={book.img}
                onClick={() => setFocus(book.id)}
                />)}
            </div>
        </div>
    )
}

export default MainContainer