import React from 'react'

function ExploreAnime(props){

const [showInfo,setShowInfo] = React.useState(false);


const getColor = (score) => {
    if(score >= 7){
        return 'text-success';
    }else if(score >= 5){
        return 'text-warning';
    }else{
        return 'text-danger';
    }
}


const moviedate = (date)=>{
    if(date !== null){
        return date.substring(0,10);
    }else{
        return '0';
    }
}
return(
    <>

        <div className="card p-2 text-center">
  <img onClick={() => setShowInfo(!showInfo)} style={{height:'300px'}} src={props.images.jpg.image_url}/>
   <p>{props.title}</p>
  <div className="d-flex justify-content-between">
       <p>Rating</p>
       <p className={getColor(props.score)}>{props.score}</p>
   </div>
  {showInfo &&
            <div className="fixed-top py-2 h-100 bg-primary animeInfo-Modal text-center">
            <img src={props.images.jpg.image_url}/>
              <p>{props.title}</p>
              <p className="px-3">{props.synopsis}</p>    
           
              <div className="d-flex justify-content-center">
             <p>Start Date: {moviedate(props.aired.from)}</p>
                 <p className="mx-2">End Date: {moviedate(props.aired.to)}</p>
            </div>

            <p>Type : {props.type}</p>
           
              <p>Episodes: {props.episodes}</p>
           
            <iframe height="300" width="100%"  src={props.trailer.embed_url}></iframe>
           
       
           <button className="border-2 px-2 py-1 bg-secondary h4 text-white"onClick={() => setShowInfo(!showInfo)}>&times;</button>          
             </div>  
      }
        </div>
    </>
)

}

export default ExploreAnime