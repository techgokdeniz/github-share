import Header from "./component/header";
import LeftSide from "./component/landing/leftside";
import RightSide from "./component/landing/rightside";
import AddUser from "./component/addUser";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen">
        <Header />
        <div className="container md:mt-16 mx-auto p-2 md:p-4 grid grid-cols-1 md:grid-cols-2 md:items-center">
          <div>
            <LeftSide />
          </div>
          <div>
            <RightSide />
          </div>
        </div>
      </div>
      <div id="test" className="container mx-auto p-2 md:p-4 ">
        <AddUser />
      </div>
      <div className="container mx-auto  p-2 md:p-4 mt-10">
        <div className="p-6">Footer</div>
      </div>
    </main>
  );
}
