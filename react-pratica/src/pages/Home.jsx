import { useEffect } from "react";
import "./Home.css";
// import { useSelector, useDispatch } from "react-redux";
import { api, requestConfig } from "../utils/config";
import { useState } from "react";

const Home = () => {
  const [user, setUser] = useState([]);
  const profile = async (data) => {
    const config = requestConfig("GET", data);

    try {
      const res = await fetch(api, config)
        .then((res) => res.json())
        .catch((err) => err);

      setUser(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    profile();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {user && user.map((usr) => (<img src={usr.image} alt={usr._id} />))}
    </div>
  );
};

export default Home;
