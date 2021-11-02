import React, { useState, useEffect } from "react";
import Cards from "./Cards";

const Home = () => {
  const [arr, setArr] = useState([]);
  const [count, setCount] = useState(0);
  // Object 1
  const obj1 = {
    "Matt Johnson": "1",
    "Bart Paden": "2",
    "Ryan Doss": "3",
    "Jared Malcom": "4",
  };

  // Object 2
  const obj2 = {
    "Matt Johnson": "1",
    "Bart Paden": "2",
    "Jordan Heigle": "3",
    "Tyler Viles": "4",
  };

  useEffect(() => {}, [arr]);

  const deDuplicate = () => {
    if (count === 0) {
      setArr(Object.keys({ ...obj1, ...obj2 }));
      setCount(count + 1);
    } else {
      window.alert("You've already clicked that my guy");
    }
  };
  const showDeDuplicate = arr.map((name, i) => {
    return <li key={i}>{name}</li>;
  });

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
          <span className="link" onClick={deDuplicate}>
            {" "}
            this link
          </span>{" "}
          is clicked. If the operation has been completed already notify the
          user that this has already been done.
        </p>
        <ul id="de_duplicate">{showDeDuplicate}</ul>
      </section>
    </div>
  );
};

export default Home;
