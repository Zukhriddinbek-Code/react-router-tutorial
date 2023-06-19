import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayOut = () => {
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayOut;
