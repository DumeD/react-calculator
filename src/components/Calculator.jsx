var React = require('react');
var Input = require('./Input.jsx')
var Button = require('./Button.jsx');
var Result = require('./Result.jsx')

var Calculator = React.createClass({
  getInitialState: function() {
    return {fun: '', disabled: false};
  },
  validate: function() {
    if(!this.refs.input1.state.valid || !this.refs.input2.state.valid) {
      this.setState({disabled: true});
    } else {
      this.setState({disabled: false});
    }
  },
  add: function() {
    this.setState({fun: Number(this.refs.input1.state.value) + Number(this.refs.input2.state.value)});
  },
  subtract: function() {
    this.setState({fun: Number(this.refs.input1.state.value) - Number(this.refs.input2.state.value)});
  },
  mutliply: function() {
    this.setState({fun: Number(this.refs.input1.state.value) * Number(this.refs.input2.state.value)});
  },
  divide: function() {
    var fixed = (Number(this.refs.input1.state.value) / Number(this.refs.input2.state.value)).toFixed(2);
    this.setState({fun: fixed});
  },
  clear: function() {
    this.refs.input1.state.value = ' ';
    this.refs.input2.state.value = ' ';
    this.setState({fun: ''});
  },
  render: function() {
    return (
      <div className='row'>
        <div className="panel panel-default">
          <div className="panel-body">
            <h1 className='text-center'>Calculator</h1>
            <Input ref='input1' placeholder='insert number here'/>
            <Input ref='input2' placeholder='insert number here'/>
            <Button type='Add' ref='addBtn' onClick={this.add} className='btn btn-default'/>
            <Button type='Subtract' ref='subtractBtn' onClick={this.subtract} className='btn btn-default'/>
            <Button type='Multiply' ref='multipyBtn' onClick={this.mutliply} className='btn btn-default'/>
            <Button type='Divide' ref='divideBtn' onClick={this.divide} className='btn btn-default'/>
            <Button type='Clear' ref='clearBtn' onClick={this.clear} className='btn btn-danger'/>
            <Result result={this.state.fun} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Calculator;
