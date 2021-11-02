import React from "react";
import Cards from "./Cards";

const Home = () => {
  return (
    <div className="home">
      <Cards />
      <section>
        <h1>
          <span className="heading">Heading</span> One
        </h1>
        <p>
          Remove the duplicates in 2 Javascript objects and output the list of
          distinct names in an unordered list when
          <span className="link"> this link</span> is clicked. If the operation
          has been completed already notify the user that this has already been
          done.
        </p>
      </section>
    </div>
  );
};

export default Home;
