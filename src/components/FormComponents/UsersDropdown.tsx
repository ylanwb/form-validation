import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export const UsersDropdown = ({ selectedUser, setSelectedUser }) => {
  const [loading, setLoading] = useState();
  const [data, setData] = useState([]);

  const handleUser = (event) => {
    setSelectedUser(event.target.value);
  };

  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/user?created=1?limit=10", {
        headers: { "app-id": "634752bc7580f70e4f699960" },
      })
      .then((response) => {
        setLoading(true);
        setTimeout(() => {
          setData(response.data.data);

          setLoading(false);
        }, 1000);
      });
    //   .catch((err) => <Notification text={err.message} type="error" />);
  }, []);

  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <Select
          className="dropDownTitle"
          value={selectedUser}
          onChange={handleUser}
          defaultValue=""
          displayEmpty
        >
          {data.map((id) => {
            return <MenuItem value={id}>{id.firstName}</MenuItem>;
          })}
        </Select>
      )}
    </div>
  );
};
