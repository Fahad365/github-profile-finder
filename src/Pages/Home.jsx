import UserResult from "../components/Users/UserResult";
import UserSearch from "../components/Users/UserSearch";

function Home() {
  return (
    <>
      {/* <h1 className="text-6xl">Welcome</h1> */}
      {/* {process.env.REACT_APP_GITHUB_TOKEN} */}
      <UserSearch />
      <UserResult />
    </>
  );
}

export default Home;
