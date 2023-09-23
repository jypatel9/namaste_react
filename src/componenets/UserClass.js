import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Data",
        location: "Default Location",
        avatar_url: "not f",
      },
    };
  }

  async componentDidMount() {
    //api call

    const data = await fetch("https://api.github.com/users/jypatel9");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div>
        <div className="flex flex-col m-4 p-4 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            src={avatar_url}
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          ></img>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name: {name}</h2>
            <h3 className="mb-1 font-normal text-gray-700 dark:text-gray-400">Location: {location}</h3>
            <h4 className="mb-1 font-normal tracking-tight text-gray-700 dark:text-gray-400">Contact: @Jypatel9</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
