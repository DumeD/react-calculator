var React = require('react');

var Result = React.createClass({
  render: function() {
    var style = {
      marginTop: 20
    }
    return (
      <input value={this.props.result}  style={style} className='uneditable-input col-xs-12'/>
    );
  }
});

module.exports = Result;
