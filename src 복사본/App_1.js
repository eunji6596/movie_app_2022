import React from "react";
import Macaron from "./Macaron";
import Macaron_c from "./Macaron_c";
import cakes from './cakes.json'
import PropTypes from 'prop-types';

//서버에서 가져온 데이터를 저장하는 변수
//const foodLike = [];
// const cakes = [
//  {
//    id: 1,
//    name: 'Burger macaron',
//    image:'https://i.pinimg.com/474x/3c/cf/3f/3ccf3fc6cbb5814d524185fa47c78f0b.jpg'
//  },
//  {
//    id: 2,
//    name: 'Chocolate macaron',
//    image:'https://i.pinimg.com/474x/62/72/75/6272757857d6306ef138b02a2b2a7ef4.jpg'
//  },
//  {
//    id: 3,
//    name: 'Color macaron',
//    image:'https://i.pinimg.com/474x/fc/9d/d3/fc9dd399822cae60e1e504c33d8851ed.jpg'
//  }
// ];


// function Food(props){ //자식컴포넌트
//  return (
//    <h1>I LIKE {props.propsName}</h1>
//  );
// }

// function Food(props){ //자식컴포넌트 //구조 분해 할당
//  const {propsName} = props;
//  return (
//    <h1>I LIKE {props.propsName} </h1>
//  );
// }

// function Food({propsName}){ //자식컴포넌트 //구조 분해 할당
//  return (
//    <h1>I LIKE {propsName} </h1>
//  );
// }

function Food({propsid,propsname,propsimage}){ //자식컴포넌트 //구조 분해 할당
  return (
    <div>
      <h1>cake No. {propsid} </h1>
      <h2>{propsname}</h2>
      <img src={propsimage} alt={propsname} />
    </div>
  );
}



function App() { //부모컴포넌트
  return (
    <>
      <div>안녕하세요!!</div>
      <Macaron />
      <Macaron_c />
      {/* <Food propsName = {"macaron"} /> */}
      {cakes.map(cake => (
                            <Food 
                              propsid = {cake.id}
                              propsname = {cake.name}
                              propsimage = {cake.image}
                            />
                          )
                 )
      }
    </>

  );
}

//npm install prop-types
Food.propTypes = {
  propsid: PropTypes.number.isRequired, 
  propsname: PropTypes.string.isRequired,
  propsimage: PropTypes.string
}


//export default App;
