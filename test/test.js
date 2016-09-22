

var Test =  React.createClass({
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
            <div>
                <button onClick={this.isShow}>click me</button>
                <ul style={{display: this.state.showData ? 'block' : 'none'}}>
                    {this.state.result.map(function (comment) {
                        return <li key={comment.id}>author:{comment.author}——text:{comment.text}</li>
                    })}
                </ul>
            </div>
        )
    }
});
ReactDOM.render(
    <Test url="/1/data/test.json" />,
    document.getElementById('app')
);