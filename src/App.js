import React from 'react';

// es5 문법 -> es6 문법
// function Food(props) {
//   console.log(props.fav);
function Penthouse({ name, img }) {
  return (
    <div>
      <h2> 이름: {name} </h2>
      <img src={img}></img>
    </div>
  );
}

const Characters = [
  {
    name: "주단태",
    image: "./img/Dantae_Ju.jpg"
  },
  {
    name: "천서진",
    image: "./img/Chun_Seo_jin.jpg"
  },
  {
    name: "오윤희",
    image: "./img/Oh_Yoon_Hee.jpg"
  },
  {
    name: "하윤철",
    image: "./img/Ha_Yoon_chul.jpg"
  }
];

function App() {
  return (
    <div>
      <h3>펜트하우스 소개</h3>
      {Characters.map(char => (
            <Penthouse name={char.name} img={char.image}/>
          )
        )}
    </div>
  );
}

export default App;
