import React from "react";

const Search = (props) => {
  return (
    <div className="search-bar-div">
      <h1 className="logo-iconcert">iConcert</h1>
      <input
        type="text"
        placeholder={"Search Concert"}
        className="search-bar"
        onChange={(e) => props.searchBar(e.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;