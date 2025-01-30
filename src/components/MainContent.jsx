import styles from "/src/components/Maincontent.module.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { useState} from "react";

const mainContentData = [
  { date: "02/01/2025" , title: "The Little Things", src: "src/Photos/Smallthings.png", description: "A psychological thriller about two cops tracking a serial killer." },
  { date: "02/02/2025", title: "Die Hard", src: "/src/Photos/Diehard.png", description: "An NYPD officer fights terrorists in a skyscraper." },
  { date: "02/03/2025", title: "Coco", src: "/src/Photos/Coco.png", description: "A boy journeys to the Land of the Dead to discover his family history." },
  { date: "02/04/2025", title: "Alien", src: "/src/Photos/Alien.png", description: "A horror sci-fi classic where an alien stalks a spaceship crew." },
  { date: "02/05/2025", title: "Blade", src: "/src/Photos/Blade.png", description: "A vampire hunter battles supernatural threats." },
  { date: "02/06/2025", title: "Deadpool", src: "/src/Photos/Deadpool.png", description: "A witty anti-hero with regenerative powers seeks revenge." },
  { date: "02/07/2025", title: "Bad Boys", src: "/src/Photos/BadBoys.png", description: "Two Miami detectives take on drug cartels." },
  { date: "02/08/2025", title: "Terrifier", src: "/src/Photos/Terrifier.png", description: "A terrifying clown hunts victims on Halloween night." },
  { date: "02/09/2025", title: "Mufasa", src: "/src/Photos/Mufasa.png", description: "The untold story of The Lion King’s father." }
];
function Maincontent() {   
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    responsive: [
        {
            breakpoint: 1024,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: false,
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
          {mainContentData.map((movie,index) => (
            <div
            key={index}
            className={styles.movieboxcontainer}
            >
              <h3>{movie.date}</h3>
              
            </div>
          ))}
        </Slider>
    </div>
</div>
  )
}

export default Maincontent