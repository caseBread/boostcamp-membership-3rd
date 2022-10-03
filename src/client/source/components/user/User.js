import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";

function User() {
  const [response, setResponse] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/login").then((res) => {
      setResponse(res.data);
    });
  }, []);

  if (response.status === 401) {
    console.log("401");
    return (
      <div>
        <Login />
      </div>
    );
  } else {
    return (
      <div>
        <Logout userName={response.name} />
      </div>
    );
  }
}

export default User;
