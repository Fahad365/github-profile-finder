import { useContext } from "react";
import GitHubContext from "../../Contex/GitHub/GitHubContext";
import Spinner from "../layouts/Spinner";
import UserItems from "./UserItems";

function UserResult() {
  const { users, loading } = useContext(GitHubContext);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResult;
