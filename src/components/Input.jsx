var React = require('react');

var Input = React.createClass({
  getInitialState: function() {
    return {valid: true,value: ''};
  },
  onChange: function(e) {
    var val = e.target.value;
    this.setState({value: val});

    var parsed = parseInt(this.state.value);
    if(typeof parsed === 'number') {
      this.setState({valid: true});
    } else {
      this.setState({valid: false});
    }
  },
  render: function() {
    var inputClass = this.state.valid ? 'form-group col-sm-6' : 'form-group has-error col-sm-6';
    return (
      <div className={inputClass}>
        <input className="form-control " onChange={this.onChange} value={this.state.value} placeholder={this.props.placeholder}/>
      </div>
    );
  }
});

module.exports = Input;
