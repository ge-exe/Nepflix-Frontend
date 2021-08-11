import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTE0OWIyMzg5NGU1MTM3Yzk0OTNjNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyODY3MjIzMywiZXhwIjoxNjI5MTA0MjMzfQ.PZNhWbopZliYilh3-Kxbsc3IgxLn-V6H3Js9Bb_SQAM",
            },
          }
        );
        setLists(res.data);
        console.log(res)
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type}  />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;