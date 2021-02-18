import React, { Component } from "react";
import ConcertList from "./ConcertList";
import SearchConcert from "./SearchConcert";
import Form from "./Form";
import Navbar from './Navbar'

class MainContainer extends Component {

    state = {
      artists: [],
      searchText: '',
      showForm: false
    }
  
    componentDidMount(){
      fetch('http://localhost:3000/artists')
      .then(r => r.json())
      .then(artistsData => this.setState({
        artists: artistsData
      }))
      // .then(console.log)
    }
  
    addNewConcert = (newConcert) =>{
      // console.log(newTrans)
      this.setState({
        artists: [...this.state.artists, newConcert]
      })
    }
  
    searchBar = (textT)=>{
      // console.log(textT)
      this.setState({
        searchText: textT
      })
    }
    
    showForm = () =>{
      this.setState({showForm: !this.state.showForm})
    }

    deleteConcert = (artist) =>{
      // console.log(artist)
      fetch('http://localhost:3000/artists/'+artist.id, {method: 'DELETE'})
      .then(r => r.json())
      .then(()=>{
        this.setState({
          artists: this.state.artists.filter(deletedArtist => deletedArtist.id !== artist.id)
        })
      })
    }
  
    render() {
    const filteredConcerts = this.state.artists.filter(filterConcert => filterConcert.name.toLowerCase().includes(this.state.searchText))
      return (
        <div>
          
          <SearchConcert searchBar={this.searchBar} searchText={this.state.searchText}/>
          <Navbar showForm={this.showForm}/>
          {this.state.showForm ? <Form  addNewConcert={this.addNewConcert}/> : null}
          <ConcertList artists={filteredConcerts} 
           deleteConcert={this.deleteConcert}/>
        </div>
      )
    }
  }
  
  export default MainContainer