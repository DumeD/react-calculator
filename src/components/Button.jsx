var React = require('react');

var Button = React.createClass({
  render: function() {
    var style = {
      marginRight: 20
    }
    return (
        <button className={this.props.className} style={style} onClick={this.props.onClick}>{this.props.type}</button>
    );
  }
});

module.exports = Button;
