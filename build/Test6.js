var Test = React.createClass({displayName: "Test",
    render: function () {
        return (
            React.createElement("div", null, 
                "hello welcome" 
            )
        )
    }
})


ReactDOM.render(
    React.createElement(Test, null),
    document.getElementById('app')
);