

var Test =  React.createClass({displayName: "Test",
    getInitialState: function () {
        return {
            result:[],
            showData: false,
        }
    },
    componentDidMount: function () {
      $.get(this.props.url, function (data) {
          if (this.isMounted()){
              this.setState({
                result: data,
              })
           }
        }.bind(this))
    },
    isShow: function () {
        // alert('aaa')
        this.setState({
            showData: true
        })
    },
    render: function() {
        // var pinlun = this.state.result.map(function (comment) {
        //     return (
        //         <li>author:{comment.author} —— text: {comment.text}</li>
        //     )
        // })
        return (
            React.createElement("div", null, 
                React.createElement("button", {onClick: this.isShow}, "click me"), 
                React.createElement("ul", {style: {display: this.state.showData ? 'block' : 'none'}}, 
                    this.state.result.map(function (comment) {
                        return React.createElement("li", {key: comment.id}, "author:", comment.author, "——text:", comment.text)
                    })
                )
            )
        )
    }
});
ReactDOM.render(
    React.createElement(Test, {url: "/1/data/test.json"}),
    document.getElementById('app')
);