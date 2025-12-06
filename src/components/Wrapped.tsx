import Header from "./Header";
import Herosection from "./Herosection";

function Wrapped() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1600px]" >
        <Header />
        <Herosection />
      </div>
    </div>
  );
}

export default Wrapped;
