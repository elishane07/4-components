import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("Click!!");
  };
  return (
    <div className="app">
      <div>
        <Button primary rounded onClick={handleClick}>
          <GoCloudDownload className="mr-1" />1
        </Button>
      </div>
      <div>
        <Button secondary outline className="mb-3 mt-3">
          <GoBell />
          2
        </Button>
      </div>
      <div>
        <Button success onMouseLeave={() => console.log("mouse left")}>
          3
        </Button>
      </div>
      <div>
        <Button rounded outline>
          <GoDatabase />
          4
        </Button>
      </div>
      <div>
        <Button danger>5</Button>
      </div>
      <div>
        <Button primary rounded outline>
          6
        </Button>
      </div>
      <div>
        <Button warning outline className="text-lg font-extrabold">
          7
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
