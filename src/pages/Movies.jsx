import Slider from "react-slick";
import { useState} from "react";
import styles from "/src/components/Movies.module.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const moviesData = [
  { title: "The Little Things", src: "src/Photos/Smallthings.png", description: "A psychological thriller about two cops tracking a serial killer." },
  { title: "Die Hard", src: "src/Photos/Diehard.png", description: "An NYPD officer fights terrorists in a skyscraper." },
  { title: "Coco", src: "src/Photos/Coco.png", description: "A boy journeys to the Land of the Dead to discover his family history." },
  { title: "Alien", src: "src/Photos/Alien.png", description: "A horror sci-fi classic where an alien stalks a spaceship crew." },
  { title: "Blade", src: "src/Photos/Blade.png", description: "A vampire hunter battles supernatural threats." },
  { title: "Deadpool", src: "src/Photos/Deadpool.png", description: "A witty anti-hero with regenerative powers seeks revenge." },
  { title: "Bad Boys", src: "src/Photos/BadBoys.png", description: "Two Miami detectives take on drug cartels." },
  { title: "Terrifier", src: "src/Photos/Terrifier.png", description: "A terrifying clown hunts victims on Halloween night." },
  { title: "Mufasa", src: "src/Photos/Mufasa.png", description: "The untold story of The Lion King’s father." }
];

function Movies() {
  const [hoveredMovie, setHoveredMovie] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

  return (
    <div className={styles.maincontainerslide}>
        <div className = {styles.slidercontainer}>
            <Slider {...settings}>
              {moviesData.map((movie,index) => {
                <div
                key={index}
                className={styles.movieboxcontainer}
                onMouseEnter={() => setHoveredMovie(index)}
                onyMouseLeave={() => setHoveredMovie(null)}
                >
                  <img className={styles.image} src={movie.src} alt = {movie.title} />
                  {hoveredMovie  === index && (
                    <div className={styles.descriptionContainer}>
                      <h3>{movie.title}</h3>
                      <p>{movie.description}</p>
                    </div>
                  )}
                </div>
              })}
            </Slider>
        </div>
    </div>
  )
};

export default Movies