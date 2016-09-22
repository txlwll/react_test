var MyComponent = React.createClass({displayName: "MyComponent",
    getInitialState: function () {
      return{
          userInput: ''
      }
    },

    handleClick: function(e) {
        this.setState({
            userInput: e.target.value
        })
    },

    clearAndFocusInput: function () {
      this.setState({
          userInput: ''
      })
    },
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("div", {onClick: this.clearAndFocusInput}, 
                    "Click to Focus and Reset"
                ), 
                React.createElement("input", {
                    value: this.state.userInput, 
                    onChange: this.handleClick}
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(MyComponent, null),
    document.getElementById('app')
);