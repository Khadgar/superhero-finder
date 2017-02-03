import React from 'react';
import {render} from 'react-dom';

var SearchBar = React.createClass({
	
    handleSubmit: function() {
        var name = this.refs.name.value.trim();
        if(name.length>0) this.props.onSearchSubmit(name);
        this.refs.name.value = '';
        return false;
    },

    handleKeyPress:function(event){
        if (event.key == 'Enter') {
            this.handleSubmit();
        }
    },

  render: function() {
    return(
		<div className="searchBarWrapper col-lg-12">
			<input type="text" className="textBox" placeholder="Hero name" ref="name" onKeyPress={this.handleKeyPress} />
			<input type="submit" value="Search" className="searchBtn" onClick={this.handleSubmit}/>
		</div>
		);
  }
});

module.exports = SearchBar;