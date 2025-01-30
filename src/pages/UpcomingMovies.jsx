import Slider from "react-slick";
import { useState} from "react";
import styles from "/src/components/UpcomingMovies.module.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const upcomingMoviesData = [
  { title: "The Blind Side", src: "/src/Photos/BlindSide.jpg", upcoming: "2.15.2025", description: "description text" },
  { title: "Gladiator 2", src: "/src/Photos/Gliadiator2.jpg", upcoming: "2.15.2025", description: "description text" },
  { title: "Moana 2", src: "/src/Photos/Moana.jpg", upcoming: "2.15.2025" , description: "description text"},
  { title: "Pets", src: "/src/Photos/Pets.jpg", upcoming: "2.15.2025." , description: "description text"},
  { title: "Rise", src: "/src/Photos/Rise.jpg", upcoming: "2.21.2025" , description: "description text"},
  { title: "Sonic 3", src: "/src/Photos/sonic.jpg", upcoming: "2.21.2025" , description: "description text"},
  { title: "Ted 2", src: "/src/Photos/ted2.jpg", upcoming: "2.21.2025" , description: "description text"},
  { title: "Wicked", src: "/src/Photos/Wicked.jpg", upcoming: "2.21.2025" , description: "description text"}
];

function UpcomingMovies() {
  const [hoveredUpcomingMovie, setHoveredUpcomingMovie] = useState(null);

    const settings = {
        dots: false,
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
                    dots: false,
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
              {upcomingMoviesData.map((movie,index) => (
                <div
                key={index}
                className={styles.movieboxcontainer}
                onMouseEnter={() => setHoveredUpcomingMovie(index)}
                onMouseLeave={() => setHoveredUpcomingMovie(null)}
                >
                  <h3>{movie.title}</h3>
                  <img className={styles.image} src={movie.src} alt = {movie.title} />
                  <h3>{movie.upcoming}</h3>
                  {hoveredUpcomingMovie  === index && (
                    <div className={styles.descriptionContainer}>
                      <p>{movie.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </Slider>
        </div>
    </div>
  )
};

export default UpcomingMovies