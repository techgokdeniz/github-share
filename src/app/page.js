import Header from "./component/header";
import LeftSide from "./component/landing/leftside";
import RightSide from "./component/landing/rightside";
import AddUser from "./component/addUser";
import TabsComponent from "./component/tabs";
import Footer from "./component/footer";

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
      <div
        id="test"
        className="min-h-screen pt-16 md:pt-16 flex justify-between flex-col"
      >
        <div className="container mx-auto p-2 md:p-4 gap-8 flex flex-col ">
          <AddUser />
          <TabsComponent />
        </div>
        <div className="container mx-auto  p-2 md:p-4 ">
          <Footer />
        </div>
      </div>
    </main>
  );
}
