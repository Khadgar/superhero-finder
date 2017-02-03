import React from 'react';
import {render} from 'react-dom';

var ResultContainerItem = React.createClass({
	getImage: function(){
		return this.props.thumbnail?this.props.thumbnail.path + "." + this.props.thumbnail.extension:"";
	},

	handleClick: function(){
		this.props.onItemClick(this.props.data);
	},

	render: function() {
	    return(
	    	<div className="col-lg-4 col-md-6 col-xs-6">
			    <div className="resultContainerItemWrapper" onClick={this.handleClick}>
			        <div className="imageWrapper">
			            <img src={this.getImage()} className="resultContainerItemThumbnail" />
			        </div>
			        <div className="resultContainerItemDescription">
			            <h1>{this.props.name}</h1>
			        </div>
			    </div>
			</div>);
  }
});

module.exports = ResultContainerItem;