import React, { Component } from "react";
import ConcertList from "./ConcertList";
import SearchConcert from "./SearchConcert";
import Form from "./Form";

class MainContainer extends Component {

    state = {
      artists: [],
      searchText: ''
    }
  
    componentDidMount(){
      fetch('http://localhost:3000/artists')
      .then(r => r.json())
      .then(artistsData => this.setState({
        artists: artistsData
      }))
    //   .then(console.log)
    }
  
    addArtist = (newArtist) =>{
      // console.log(newTrans)
      this.setState({
        transactions: [...this.state.artists, newArtist]
      })
    }
  
    searchBar = (textT)=>{
      // console.log(textT)
      this.setState({
        searchText: textT
      })
    }
  
    render() {
    // const filteredTrans = this.state.transactions.filter(filterTrans => filterTrans.description.toLowerCase().includes(this.state.searchText))
      return (
        <div>
       
          <SearchConcert searchBar={this.searchBar} searchText={this.state.searchText}/>
          <Form addArtist={this.addArtist}/>
          <ConcertList artists={this.state.artists}/>
        </div>
      )
    }
  }
  
  export default MainContainer