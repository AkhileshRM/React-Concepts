import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "DUMMY",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/akshaymarch7");
    const data = await response.json();

    this.setState({
      userInfo: data,
    });

    console.log(data);
    // console.log("Child Component Mounted")
  }

  componentDidUpdate() {
   this.timerID = setInterval(() => {
console.log("Timer Running")
    }, 1000)
    console.log("Component Did Update");
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
    console.log("Component Removed from the Page")
  }

  render() {
    // const {name, location} = this.props
    const { count } = this.state;

    const { name, location } = this.state.userInfo;
    console.log("Render", name);
    // debugger;

    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Add
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: akhilesh.madhyastha@gmail.com</h4>
      </div>
    );
  }
}
export default UserClass;
