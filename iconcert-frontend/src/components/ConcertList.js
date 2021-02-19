import React from 'react';
import Concert from './Concert'

const ConcertList = (props) => {
    return (
      <div >
        <h1>Upcoming Concerts</h1>  
          {props.artists.map(artistItem => <Concert artist={artistItem} key={artistItem.id} concertDate={props.concertDate} deleteConcert={props.deleteConcert} /> )}
       
          {/* <h1>Past Concerts</h1>   */}
      </div>
    );
  };
  
  export default ConcertList;