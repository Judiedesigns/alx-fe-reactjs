// const UserProfile = (props) => {
//     return (
//         <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
//             <h2 style={{ color: 'blue' }}>{props.name}</h2>
//             <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
//             <p>Bio: {props.bio}</p>
//         </div>
//     )
// }
// export default UserProfile;

// UserProfile.jsx
import { useContext } from "react";
import UserContext from "../UserContext.js";

function UserProfile() {
  const { name, age, bio } = useContext(UserContext); // ✅ Pull data from context

  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{bio}</p>
    </div>
  )
}

export default UserProfile;
