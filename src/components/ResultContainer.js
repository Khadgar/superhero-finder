import React from 'react';
import {render} from 'react-dom';

import ResultContainerItem from './ResultContainerItem.js';

var ResultContainer = React.createClass({
    render: function() {
        var nodes = this.props.data.map(function(hero, index) {
			return <ResultContainerItem key={index} name={hero.name} data={hero} thumbnail={hero.thumbnail} description={hero.description} onItemClick = {this.props.onItemClick}> </ResultContainerItem>;
		}.bind(this));

		return <div className="heroList col-lg-7 col-md-7 col-sx-7">{nodes}</div>
  }
});

module.exports = ResultContainer;