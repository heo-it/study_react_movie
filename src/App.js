import React from 'react';
// https://www.npmjs.com/package/prop-types
import PropTypes from 'prop-types';

// es5 문법 -> es6 문법
// function Food(props) {
//   console.log(props.fav);
function Penthouse({ name, img, rating }) {
  return (
    <div>
      <h2> 이름: {name} </h2>
      <h4>{ rating }/4.0</h4>
      <img src={img} alt={name}></img>
    </div>
  );
}

const Characters = [
  {
    id: 1,
    name: "주단태",
    image: "./img/Dantae_Ju.jpg",
    // rating: 4
  },
  {
    id: 2,
    name: "천서진",
    image: "./img/Chun_Seo_jin.jpg",
    rating: 3.9
  },
  {
    id: 3,
    name: "오윤희",
    image: "./img/Oh_Yoon_Hee.jpg",
    rating: 3.8
  },
  {
    id: 4,
    name: "하윤철",
    image: "./img/Ha_Yoon_chul.jpg",
    rating: 3.7
  }
];

Penthouse.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  // PropTypes를 사용하면 프로퍼티가 요구하는 타입등을 체크할 수 있음.
  rating: PropTypes.number
}

function App() {
  return (
    <div>
      <h3>펜트하우스 소개</h3>
      {Characters.map(char => (
            <Penthouse key={char.id} name={char.name} img={char.image} rating={char.rating}/>
          )
        )}
    </div>
  );
}

export default App;
