import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : this.props.name,
            boxes : [true, false, false],
        };
    }

    render() {
        return (
        <div>
        <h1 
        style = {{
            textAlign : "center",
            border: "1px solid black",
            marginLeft : "auto",
            marginRight:"auto"
        }}>
        {this.state.name}
        </h1>
            <table style = {{
                textAlign : "center",
                border: "1px solid black",
                marginLeft : "auto",
                marginRight:"auto"
            }}>
                <tr>
                <th><CreateButton name = "Box 1" truth = {this.state.boxes[0]} /></th>
                <th><CreateButton name = "Box 2" truth = {this.state.boxes[1]} /></th>
                <th><CreateButton name = "Box 3" truth = {this.state.boxes[2]} /></th>
                </tr>
            </table>
        </div>
        );
    }
}

function ShowName(props) {
    return (<h3> {props.name} </h3>);
}

class CreateButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened : false,
            name : this.props.name,
            truth : false
        };

        this.handleClick = this.handleClick.bind(this);
    }
 
    handleClick() {
        this.setState({
            truth : this.props.truth,
            isOpened : true
        });
    }
    
    render() {
        return (
            <div>
                <button 
                style = {{
                    backgroundColor: "#4CAF50", /* Green */
                    border: "none",
                    color: "white",
                    textAlign: "center",
                    padding: "15px 32px",
                    textDecoration: "none",
                    fonSize: "16px"
                }} 
                onClick={this.handleClick}>
                    {!this.state.isOpened ? "Open" : "Opened"}
                </button>
                <ShowName name = {
                    this.state.isOpened && this.state.truth ? "It is here" : "_"
                } />
            </div>
        );
    }
}

ReactDOM.render(<App name = "Find the Cat"/>, document.getElementById('root'));