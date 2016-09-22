var TickTock = React.createClass({
    mixins: [SetIntervalMixin], // 引用 mixin
    getInitialState: function () {
        return {seconds: 0};
    },
    componentDidMount: function () {
        this.setInterval(this.tick, 1000); // 调用 mixin 的方法
    },
    tick: function () {
        this.setState({seconds: this.state.seconds + 1});
    },
    render: function () {
        return (
            <p>
                React has been running for {this.state.seconds} seconds.
            </p>
        );
    }
});

ReactDOM.render(
    <TickTock />,
    document.getElementById('app')
);