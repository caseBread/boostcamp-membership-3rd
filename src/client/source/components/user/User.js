import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";

function User() {
  const [response, setResponse] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/login/access").then((res) => {
      console.log(res.data);
      setResponse(res.data);
    });
  }, []);

  if (response.status === 200) {
    console.log("200");
    return (
      <div>
        <Logout userName={response.data.name} />
      </div>
    );
  } else if (response.status === 401) {
    console.log("401");
    return (
      <div>
        <Login />
      </div>
    );
  } else {
    console.log("rendering error");
    navigate(-1);
  }
}

export default User;
