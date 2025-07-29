import React from "react";
import { createRoot } from "react-dom/client";

// const heading = React.createElement(
//   "h2",
//   { id: "heading" },
//   "Akhilesh R Madhyastha is a Coder and Developer"
// );
// const root = createRoot(document.getElementById("root"));

// // This is a React Element
// const jsxHeading = (
//   <h1 id="heading" className="head" tabIndex="1">
//     Akhilesh R Madhyastha is a Coder and Developer
//   </h1>
// );

// // root.render(jsxHeading)

// // This is a Functional Component

// const Title = () => <h3>This is the title</h3>;

// const NewHeading = () => (   //This is called as Component composition(Title inside New Heading)
//   <>
//     <h1>This is a New Heading</h1>
//     <Title />
//   </>
// );

// root.render(<NewHeading />);

//////////////Assignment//////////////////////////////////////////////////

// const nestedHeader = React.createElement("div", {className:"title"}, [
//   React.createElement("h1", {}, "H1 tag"),
//   React.createElement("h2", {}, "H2 tag"),
//   React.createElement("h3", {}, "H3 Tag")
// ])
// const root = createRoot(document.getElementById("root"))
// root.render(nestedHeader)

// const nestedHeader = (
//   <div className="title">
//   <h1>H1 tag</h1>
//   <h2>H2 tag</h2>
//   <h3>H3 Tag</h3>
//   </div>
// )
// const root = createRoot(document.getElementById("root"))
// root.render(nestedHeader)

// const Paragraph = () => <p>This is the paragraph</p>
// const NestedHeader = () => {
//   return (
//     <div className="title">
//       <h1>H1 tag</h1>
//       <h2>H2 tag</h2>
//       <h3>H3 Tag</h3>
//       <Paragraph/>
//     </div>
//   );
// };
// const root = createRoot(document.getElementById("root"));
// root.render(<NestedHeader />);

const HeaderComponent = () => {
  return(
    <div className="header">
      <img src="logo" alt="logo"/>
      <input type="text"/>
      <img src="icon" alt=" User icon"/>
    </div>
  )
}
const root = createRoot(document.getElementById('root'))
root.render(<HeaderComponent/>)
