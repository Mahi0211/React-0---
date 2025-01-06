import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Search = () => {
  const { setUserName, loggedinUser } = useContext(UserContext);
  return (
    <div className="search">
      <input
        value={loggedinUser}
        className="border border-black"
        onChange={(e) => setUserName(e.target.value)}
      />
    </div>
  );
};

export default Search;
