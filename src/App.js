import { SecondPage } from "./components/SecondPage";
import { Menu } from "./components/Menu";
import { GeneralPage } from "./components/OnePage/GeneralPage";
import { Quote, ThirdPage } from "./components/ThirdPage";
import { useMediaQuery } from "react-responsive";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 440px)" });

  return (
    <>
      <GeneralPage isTabletOrMobile={isTabletOrMobile} />
      <SecondPage isTabletOrMobile={isTabletOrMobile} />
      <ThirdPage isTabletOrMobile={isTabletOrMobile} />
      <Menu isTabletOrMobile={isTabletOrMobile} />
    </>
  );
}

export default App;
