var Input = React.createClass({displayName: "Input",
//     getInitialState: function () {
//       return {
//           value: 'hello world'
//       }
//     },
//     handleChange: function (event) {
//       this.setState({
//           value: event.target.value.substr(0,6)
//       })
//     },
//     render: function () {
//         return (
//             <div>
//                 <input type="text" value={this.state.value} onChange={this.handleChange}/>
//             </div>
//         )
//     }


    // getInitialState: function () {
    //     return {
    //         value: 'This is a description'
    //     }
    // },
    // handleChange: function (event) {
    //     this.setState({
    //         value: event.target.value
    //     })
    // },
    render: function () {
        return (
            // <div>


            //     <input type="radio" name="opt" defaultChecked /> Option 1
            //     <input type="radio" name="opt" /> Option 2
            //     <select defaultValue="C">
            //         <option value="A">Apple</option>
            //         <option value="B">Banana</option>
            //         <option value="C">Cranberry</option>
            //     </select>
            // </div>
            React.createElement("div", null, 
                React.createElement("select", {value: "B"}, 
                            React.createElement("option", {value: "A"}, "Apple"), 
                            React.createElement("option", {value: "B"}, "Banana"), 
                            React.createElement("option", {value: "C"}, "Cranberry")
                )
            )
        );
    }

})


ReactDOM.render(
    React.createElement(Input, null),
    document.getElementById('app')
);