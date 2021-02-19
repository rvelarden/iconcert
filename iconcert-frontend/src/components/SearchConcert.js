import React from "react";

const Search = (props) => {
  return (
    <div className="search-bar-div">
      
      <img  className="logo" src="https://arcosmedia.cc/wp-content/uploads/2021/02/PosterArtboard-1-copy-2Asse.png" ></img>
        <div className="banner">
          <h1>Find Your Favorite Artists</h1>
          <div className="banner2">
            <h2>As we work toward bringing in-person shows safely back to your local community, we’re more committed than ever to the idea that music brings people together. Join independent artists around the world for intimate livestream performances in the Reverb listening room!</h2>
          </div>
        </div>
      
      {/* <input
        type="text"
        placeholder={"Search Concert"}
        className="search-bar"
        onChange={(e) => props.searchBar(e.target.value)}
      />
      <i className="circular search link icon"></i> */}
      <div className="searchBox">
        <input
         type="text"
         placeholder={"Search Concert"}
         className="searchInput"
         onChange={(e) => props.searchBar(e.target.value)}
        />
        <button className="searchButton" href="#"></button>
        <i className="circular search link icon"></i>
      </div>
      
    </div>
  );
};

export default Search;