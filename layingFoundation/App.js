import React from "react";
import { createRoot } from "react-dom/client";

const heading = React.createElement(
  "h2",
  { id: "heading" },
  "Akhilesh R Madhyastha is a Coder and Developer"
);
const root = createRoot(document.getElementById("root"));

// This is a React Element
const jsxHeading = (
  <h1 id="heading" className="head" tabIndex="1">
    Akhilesh R Madhyastha is a Coder and Developer
  </h1>
);

// root.render(jsxHeading)

// This is a Functional Component

const Title = () => <h3>This is the title</h3>;

const NewHeading = () => (   //This is called as Component composition(Title inside New Heading)
  <>
    <h1>This is a New Heading</h1>  
    <Title />
  </>
);

root.render(<NewHeading />);
