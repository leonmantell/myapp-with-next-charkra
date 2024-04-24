import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export type UserContent = {
  username: string;
  setUsername: (_: string) => void;
  email: string;
  setEmail: (_: string) => void;
  isAdmin: boolean;
  setAdmin: (_: boolean) => void;
};

export const UserContext = createContext<UserContent>({
  username: "",
  setUsername: (_: string) => {},
  email: "",
  setEmail: (_: string) => {},
  isAdmin: false,
  setAdmin: (_: boolean) => {},
});

type IUserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContextProvider = ({
  children,
}: IUserContextProviderProps) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    const _email = localStorage.getItem("email");
    if (_email) {
      axios
        .post("http://localhost:8000/users/getinfo", { email: _email })
        .then((response) => {
          console.log(response);
          setUsername(response.data.name);
          setAdmin(response.data.isAdmin);
        })
        .catch((err) => {});
    }
  }, []);

  const value = { username, setUsername, email, setEmail, isAdmin, setAdmin };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
