import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''};

    onFormSubmit = e => {
        e.preventDefault();
        // Arrow function syntax will automatically bind this function
        // and make sure that it always has the appropriate value of "this" inside of it
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={(event) => this.setState({term: event.target.value})} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;