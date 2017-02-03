import React from 'react';
import {render} from 'react-dom';

var ErrorMessage = React.createClass({
    
  render: function() {
    if(this.props.show){
        return(
            <div className="errorMsg col-lg-12">
                {this.props.message}
            </div>
            );
        }else{
            return(
            <div className="noError col-lg-12">
                {this.props.message}
            </div>
            );
        }
  }
});

module.exports = ErrorMessage;