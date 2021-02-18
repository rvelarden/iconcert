import React from 'react'

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
           
            <button onClick={props.showForm} class="btn btn-outline-success my-2 my-sm-0" type="submit">Add Your Concert</button>
        </nav>
    )
}
export default Navbar 