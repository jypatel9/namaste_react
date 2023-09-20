import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>

        <UserClass
          name={"Jay Desai"}
          location={"Ahmedabad"}
          contact={"@jy_patel9"}
        />
      </div>
    );
  }
}

/*

   - Parent Constructor
   - Parent Render

      - First Constructor
      - First Render

      - Second Constructor
      - Second Render

      <DOM UPDATED - IN SINGLE BATCH>
       
       - First ComponentDidMount
       - Second ComponentDidMount

  - Parent DidMount

*/

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Web Series</h2>

//       <UserClass name={"Jay Desai"} location={"Ahmedabad"} contact={"@jy_patel9"} />
//     </div>
//   );
// };

export default About;
