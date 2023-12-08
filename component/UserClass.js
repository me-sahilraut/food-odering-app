import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "Child Constructor 2");

    this.state = {
      userInfo: {
        name: "Sahil",
        location: "Nagpur",
      },
    };
  }
  //   async componentDidMount() {
  //     console.log(this.props.name + "Child Component");
  //     const data = await fetch("https://api.github.com/users/akshaymarch7");
  //     const json = await data.json();

  //     this.setState({
  //       userInfo: json,
  //     });
  //   }

  componentDidMount(timer) {
    this.timer = setInterval(() => {
      console.log("I am updated");
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("I am stop Updating!");
  }

  render() {
    console.log(this.props.name + "Child Render 2");

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name :{name}</h2>
        <h2>Location : {location}</h2>
        <h2>email : sahilgraut@gmail.com</h2>
      </div>
    );
  }
}

export default UserClass;
