export const App = function App() {
  const tree = fetch('http://localhost:3001/api/v1/tree');

  tree.then((response) => {
    console.log(response);
  });
  return <h1>Corti Frontend Home Assignment</h1>;
};
