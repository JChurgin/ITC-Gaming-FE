import { createContext, useState } from "react";

export const Context = createContext({});

const AppContext = (props) => {
  const [profile, setProfile] = useState();
  const [profileRefresher, setProfileRefresher] = useState(0);
  const [token, setToken] = useState("");
  // const[currentuser,setCurrentUser]=useState()
  const refreshProfile = () => {
    setProfileRefresher(profileRefresher + 1);
  };

  return (
    <Context.Provider
      value={{

        setToken,
        token,
        profile,
        setProfile,
        profileRefresher,
        refreshProfile,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default AppContext;
