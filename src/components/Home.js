import React, {useEffect} from 'react'
import data from '../accordiondata';
import SingleQuestion from './questions';
import {useNavigate} from  'react-router-dom';

const animeapi = 'https://api.jikan.moe/v3/search/anime?q=&page=1&genre=1,10&order_by=start_date&sort=desc';

export default function Home() {

  let navigate = useNavigate();

    const [movies, setMovies] = React.useState([]);

    useEffect(() => {
      fetch(animeapi)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMovies(data.results);
      })
    })
  
    const [questions,setQuestions] = React.useState(data);
  
  return (
    <div>
      {/* mid body section */}

<div className="anime-intro">

<div className="images-flex">
<img src="./images/attackontitan.jpg"/>
<img src="./images/borutogenerations.jpg"/>
  <img src="./images/raisingshieldhero.jpg"/>
  <img src="./images/tokyoghoul.jpg"/>
</div>

<div className="container services">

    <h1 className="text-white text-center pt-3 pb-3">The Largest Anime in your Pocket</h1>
  

  <button className="border-4 text-uppercase bg-primary text-white px-2 py-1 mb-5" onClick={() => {navigate('/ExploreNow')}}>Explore Now</button>
  <div className="row row-cols-2 text-white text-center services-flex">

    <div className="col">
      <i className="bi bi-clock"></i>
      <p>Watch new episodes everyday at anytime</p>
    </div>

    <div className="col">
      <i className="bi bi-bag"></i>
      <p>Join with us with affordable plans</p>
    </div>

    <div className="col">
      <i className="bi bi-camera-video"></i>
        <p>Watch ad-free</p>
    </div>

    <div className="col">
       <i className="bi bi-download"></i>
       <p>Download your favourite anime even in offline</p>
    </div>

  </div>

</div>

</div>

<div className="container-fluid p-0 text-center">
  <div className="py-2">
  <h2>Watch your favourite anime at anytime and anywhere on different devices</h2>
  <img className="w-100 py-5 pb-0" src="./images/mockup device.jpg"/>
  </div>
</div>

<div className="animeslideshow-container py-5 text-center">
<h3>Watch more than 30,000 episodes each day</h3>
  <div className="animeslideshow py-2">{movies.length > 0 && movies.map((movie) => <img src={movie.image_url}/>)}</div>
</div>

{/* mid body section */}

{/* footer */}
<div className="text-center">
<h1 className="py-5">Questions</h1>
<h3>FAQS</h3>
<section className="px-3">
  {
    questions.map((question) => {
      return <SingleQuestion key={question.id} {...question} />
    })
  }
</section>
</div>

<div className="footer-info container-fluid d-flex justify-content-between py-3">
  
    <div>
  <h5>Popular Shows</h5>
  <p>Dragon Ball Z</p>
  <p>One Piece</p>
  <p>Naruto Shippuden</p>
 <p>Boruto Next Generations</p>
  <p>Gintama</p>
    </div>

    <div>
  <h5>Platform and Devices</h5>
  <p>Mobile</p>
  <p>Desktop</p>
  <p>Tablet</p>
    </div>

    <div>
  <h5>Language</h5>
  <p>English (UK)</p>
  <p>English (USA)</p>
  <p>Japanese</p>
    </div>

</div>


<div className="social text-center py-2">
<i className="bi bi-facebook"></i>
  <i className="bi bi-twitter"></i>
  <i className="bi bi-youtube"></i>
  <i className="bi bi-instagram"></i>
</div>
{/* end of footer */}
    </div>
  )
}
