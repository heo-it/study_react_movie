import React from 'react';

// es5 문법 -> es6 문법
// function Food(props) {
//   console.log(props.fav);
function Food({ fav }) {
  return <h1> I like {fav}</h1>
}

function App() {
  return (
    <div>
      <h3>Hello!!!</h3>
      <Food 
        fav= "Kimchi" 
        // something= {true} 
        // papapapa= {["hello", 1, 2, 3, 4, true]}
      />
      <Food fav= "ramen" />
    </div>
  );
}

export default App;
