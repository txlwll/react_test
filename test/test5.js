var Input = React.createClass({
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
            <div>
                <select value="B">
                            <option value="A">Apple</option>
                            <option value="B">Banana</option>
                            <option value="C">Cranberry</option>
                </select>
            </div>
        );
    }

})


ReactDOM.render(
    <Input />,
    document.getElementById('app')
);