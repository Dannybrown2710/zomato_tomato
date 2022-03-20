import { useState } from "react";

function Profile(props) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const submitLogin = (e) => {
    e.preventDefault();
    console.log(name, address);
  };
  return (
    <>
      <form className="form">
        <label>Profile Form</label> <br />
        <input
          type="text"
          placeholder="Enter your restaurant name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your contact number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={submitLogin}>Login</button>
      </form>
    </>
  );
}

export default Profile;
