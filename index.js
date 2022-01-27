import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class FindtheCat extends React.Component {
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
      <h1 className = "Title">
      {this.state.name}
      </h1>
          <table className = "Table" >
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
  return (<h3 className = "Box"> {props.name} </h3>);
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
          <div className= 'Container'>
              <button className = "OpenButton"
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

function App() {
  return (
    <div>
    <div className = "Circle"></div>
    <div class="Cloud"></div>
    <div class="Cloud2"></div>
    <FindtheCat name = "Find the Cat"/>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
