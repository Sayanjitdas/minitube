import React from "react";

class SearchBar extends React.Component {

    state = {
        term: ''
    }

    SearchBarHandler = (e) => {
        e.preventDefault()
        this.props.onTermSubmit(this.state.term);
    }

    render() {
        return (
            <div className="mt-5">
                <form action="" onSubmit={this.SearchBarHandler}>
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="Search.." 
                            aria-label="search" 
                            aria-describedby="button-addon2"
                            onChange={(e) => this.setState({term:e.target.value})} 
                        />
                        <button className="btn btn-outline-secondary" type ="submit" id="button-addon2">Search</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;