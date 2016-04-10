var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
  getInitialState : function () {
    return {items: [], newItemText:''};
  },
  handleSubmit: function(e) {
    e.preventDefault();
    if (this.state.newItemText.length == 0) {
      return;
    }
    var currentItems = this.state.items;
    currentItems.push(this.state.newItemText);
    this.setState({items: currentItems, newItemText: ''});
  },
  onChange: function(e) {
    this.setState({newItemText: e.target.value});
  },
  render: function() {
    var divStyle = {
      marginTop: 10
    };

    var colorStyle = {

    };

    if (this.props.Color) {
      colorStyle.background = this.props.Color;
    }
    return (
        <div style={divStyle} className="col-sm-4">
            <div className="panel panel-primary">
                <div style={colorStyle} className="panel-heading">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <form onSubmit={this.handleSubmit}>
                            <div className="col-sm-9">
                                <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                            </div>
                            <div className="col-sm-2">
                                <button style={colorStyle} className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                    <List items={this.state.items} />
                </div>
            </div>
        </div>
    );
  }

});

module.exports = ListManager;
