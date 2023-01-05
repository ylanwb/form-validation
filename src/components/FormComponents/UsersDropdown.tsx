import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

interface IUsersDropdown {
  setSelectedUser: any;
  selectedUser: string;
}

interface User {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

export const UsersDropdown: React.FC<IUsersDropdown> = (props) => {
  const { setSelectedUser, selectedUser } = props;
  const [loading, setLoading] = useState<boolean>();
  const [data, setData] = useState<User[]>([]);

  const handleUser = (event: any) => {
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
      })
      .catch((response) => {
        console.log(response);
      });
    //   .catch((err) => <Notification text={err.message} type="error" />);
  }, []);

  return (
    <div>
      {loading
        ? (
            "Loading"
          )
        : (
        <Select
          className="dropDownTitle"
          value={selectedUser}
          onChange={handleUser}
          defaultValue=""
          displayEmpty
        >
          {data.map((user) => {
            return (
              <MenuItem key={user.id} value={user.id}>
                {user.firstName}
              </MenuItem>
            );
          })}
        </Select>
          )}
    </div>
  );
};
