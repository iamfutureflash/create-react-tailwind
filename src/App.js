import React from "react";
import Card from "./Card";
import Heading from "./_heading/Heading";
import CardData from "./data/CardData";
const App = () => {
  return (
    <>
      <Heading />
      <div className="flex justify-start flex-wrap bg-blue-500 p-4 md:flex-row">
        {CardData.map((val) => {
          return (
            <Card
              key={val.id} 
              link={val.link}
              subHeading={val.subHeading}
              name={val.name}
              buttonText={val.buttonText}
            />
          );
        }
        )}
      </div>
    </>
  );
}

export default App;
