import React, { Component } from 'react';

class Form extends Component {

  state = {
    name: '',
    image: '',
    years_active: '',
    genre: '',
    concert_dates: ''

  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state)
    let newConcert = {
      name: this.state.name,
      image: this.state.image,
      years_active: this.state.years_active,
      genre: this.state.genre,
      concert_dates: this.state.concert_dates
    }
    // console.log(newConcert)
    let reqPack = {
      headers: {"Content-Type":"application/json"},
      method: 'POST',
      body: JSON.stringify(newConcert)
    }
    // console.log(reqPack)
    fetch('http://localhost:3000/artists', reqPack)
    .then(r => r.json())
    .then(concertData => this.props.addNewConcert(concertData))
    // .then(console.log)
  }

  render() {
    return (
      <div className="container">
        
        <form onSubmit={this.handleSubmit} className="add-form">
          
          <input onChange={(e)=>this.setState({name: e.target.value})} type="text" name="name" placeholder="Enter Band's name" className="input-text"/>
          <br/>
          <input onChange={(e)=>this.setState({image: e.target.value})} type="text" name="image" placeholder="Enter image URL" className="input-text"/>
          <br/>
          <input onChange={(e)=>this.setState({years_active: e.target.value})} type="text" name="image" placeholder="Enter years active" className="input-text"/>
          <br/>
          <input onChange={(e)=>this.setState({genre: e.target.value})} type="text" name="image" placeholder="Enter genre" className="input-text"/>
          <br/>
          <input onChange={(e)=>this.setState({concert_dates: e.target.value})} type="text" name="image" placeholder="Enter concert date" className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Submit" className="submit"/>
        </form>
      </div>
    );
  }

}

export default Form;