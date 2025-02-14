import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dfault",
        blog: "@Default",
      },
    };
    // debugger;
  }

  async componentDidMount() {
    const res = await fetch("https://api.github.com/users/mahi0211");
    const json = await res.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    // console.log("Component did update");
  }

  componentWillUnmount() {
    // console.log("Component will un mount");
  }

  render() {
    const { name, location, avatar_url, blog } = this.state.userInfo;

    return (
      <div className="user-card">
        <div>
          <UserContext.Consumer>
            {({ loggedinUser }) => (
              <h1 className="font-bold">LoggedIn User: {loggedinUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {blog}</h4>
      </div>
    );
  }
}

export default UserClass;
