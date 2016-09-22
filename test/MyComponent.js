var MyComponent = React.createClass({
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
            <div>
                <div onClick={this.clearAndFocusInput}>
                    Click to Focus and Reset
                </div>
                <input
                    value={this.state.userInput}
                    onChange={this.handleClick}
                />
            </div>
        );
    }
});

ReactDOM.render(
    <MyComponent />,
    document.getElementById('app')
);