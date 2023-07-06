import React from "react";
import TabMenu from "./tabMenu";

const Home = () => {
  return (
    <>
      <h2>Home</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam
        repudiandae nesciunt, iusto ducimus, hic repellat quos culpa, quo
        aliquid est minus. Temporibus molestiae veniam soluta cupiditate vero
        nihil deserunt!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        molestias iste sapiente blanditiis earum doloribus architecto? In porro
        et voluptatibus ad laborum facere dolore voluptas. Magni quae corporis
        dolores eos.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quia
        quas expedita tempora nobis, sunt non quasi est sed laborum, alias
        nostrum enim harum eligendi perferendis nisi, totam hic possimus?
      </p>
    </>
  );
};

const Tabs = () => {
  return (
    <div className="p-6">
      <TabMenu
        config={[
          { header: "Random User", component: <Home /> },
          { header: "Language User", component: <Home /> },
        ]}
      />
    </div>
  );
};

export default Tabs;
