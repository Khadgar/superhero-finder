import React from 'react';
import {render} from 'react-dom';

var DetailedView = React.createClass({
	getImage: function(){
		return this.props.content.thumbnail?this.props.content.thumbnail.path + "." + this.props.content.thumbnail.extension:"";
	},

	getDescription:function(){
		return this.props.content.description?this.props.content.description:'';
	},

	getDetails:function(data){
		if(data){
		  	var node = data.items.map(function(part, index) {
				return <div className="otherInfo" key={index}>{part.name}</div>;
			});
  		}

  		if(node.length === 0)node.push(<div className="otherInfo" key={0}>N/A</div>);
  		
  		return node;
	},

	getUrls:function(urls){
		if(urls){
		  	var node = urls.map(function(url, index) {
				return <div className="urlInfo" key={index}><a href={url.url} target="_blank">{url.type}</a></div>;
			});
  		}
  		return node;
	},

  	render: function() {

	  	if(Object.keys(this.props.content).length !== 0){

	    	return( 
	    		<div className="col-lg-5 col-md-6">
				    <div className="detailsWrapper">
				        <div className="imageWrapper">
				            <img src={this.getImage()}  className="detailsThumbnail" />
				        </div>
				        <div className="detailsDescription">
				            <p>{this.getDescription()}</p>
				        </div>
				        <div className="row">
					        <div className="col-lg-3"><h3>Comics</h3>{this.getDetails(this.props.content.comics)}</div>
					        <div className="col-lg-3"><h3>Series</h3>{this.getDetails(this.props.content.series)}</div>
					        <div className="col-lg-3"><h3>Stories</h3>{this.getDetails(this.props.content.stories)}</div>
					        <div className="col-lg-3"><h3>Events</h3>{this.getDetails(this.props.content.events)}</div>
				        </div>
				        <div className="row">
				        	<div className="col-lg-12"><h3>URLs</h3>{this.getUrls(this.props.content.urls)}</div> 
				        </div>
				    </div>
				</div>
				);
		}else{
			return( 
	    		<div className="col-lg-5 col-md-6">
				    <div className="emptyDetailsView">
				        
				    </div>
				</div>
				);
		}
  }
});

module.exports = DetailedView;
