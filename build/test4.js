// var FancyCheckbox = React.createClass({
//     render: function() {
//         var fancyClass = this.props.checked ? 'FancyChecked' : 'FancyUnchecked';
//         return (
//             <div className={fancyClass} onClick={this.props.onClick}>
//                 {this.props.children}
//                 wetqttreqtewatr
//             </div>
//         );
//     }
// });
// var FancyCheckbox = React.createClass({
//     render: function() {
//         var { checked, ...other } = this.props;
//         var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
//         // `other` 包含 { onClick: console.log } 但 checked 属性除外
//         return (
//             <div {...other} className={fancyClass} />
//         );
//     }
// });

// var FancyCheckbox = React.createClass({
//     render: function() {
//         var fancyClass = this.props.checked ? 'FancyChecked' : 'FancyUnchecked';
//         // 反模式：`checked` 会被传到里面的组件里
//         return (
//             <div {...this.props} className={fancyClass} />
//         );
//     }
// });


var FancyCheckbox = React.createClass({displayName: "FancyCheckbox",
    render: function() {
        var { checked, title, ...other } = this.props;
        var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
        var fancyTitle = checked ? 'X ' + title : 'O ' + title;
        return (
            React.createElement("label", null, 
                React.createElement("input", React.__spread({},  other, 
                    {checked: checked, 
                    className: fancyClass, 
                    type: "checkbox"})
                ), 
                fancyTitle
            )
        );
    }
});
ReactDOM.render(
    React.createElement(FancyCheckbox, {checked: true, onClick: console.log.bind(console), style: {color:'red',fontSize: '26px'}}, 
        "Hello world!" 
    ),
    document.getElementById('app')
);