import React from 'react';
import {render} from 'react-dom';

import DetailedView from './DetailedView.js';
import ResultContainer from './ResultContainer.js';
import SearchBar from './SearchBar.js';

function makeApiCall(urlPart) {
    urlPart = urlPart || "";
    var apikey = "0774a870ecb840fd5ca59cf985ddb7d9";
    var url = "https://gateway.marvel.com/v1/public/" + urlPart + (urlPart.indexOf("?") >= 0 ? "&" : "?") + "apikey=" + apikey + "&hash=f82191e4d812c89c53e8f3a027284e46&ts=1";
        
    return fetch(url);
}

function getCharacters(urlPart) {
    urlPart = urlPart || "";
    return makeApiCall("characters" + urlPart);
}

var ApplicationWrapper = React.createClass({

    loadHeroByName: function(name) {
        getCharacters("?nameStartsWith=" + name).then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }).then(function(response) {
            response.json().then(function(json) {
                this.setState({
                    data: json.data.results,
                    heroname:name
                });
                console.log(this.state)
            }.bind(this));
        }.bind(this))
            .catch(function(error) {
                console.log(error);
            });
    },

    getInitialState: function() {
        return {
            data: [],
            heroname:'',
            selectedhero:{}
        };
    },

    setDetailedView:function(item){
    	this.setState({data:this.state.data, selectedhero: item});
    },

  	render: function() {
    	return( 
	    	<div className="applicationWrapper container-fluid">
				<div className="row">
		      		<SearchBar onSearchSubmit={this.loadHeroByName}/>
		      	</div>
			    <div className="row">
				    <ResultContainer data={this.state.data} heroName={this.state.heroname} onItemClick={this.setDetailedView}/>
				    <DetailedView content={this.state.selectedhero}/>
			    </div>
	    	</div>);
		}
});

module.exports = ApplicationWrapper;