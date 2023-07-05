// import { useState } from 'react'
import './App.css'

// const img1 = require("./img/ananas-removebg-preview.png")
// const img2 = require("./img/apple.png")

import img1 from "/src/img/ananas-removebg-preview.png"
import img2 from "/src/img/orik-removebg-preview.png"
import img3 from "/src/img/qulupnay.png"


function App() {

  const btn1 = (e) => {
    if (e.target.textContent === "Narx") {
      e.target.textContent = 15 + ".000"
    } else if (e.target.textContent === "15.000") {
      e.target.textContent = "Narx"
    }
  }
  const btn2 = (e) => {
    if (e.target.textContent === "Narx") {
      e.target.textContent = 5 + ".000"
    } else if (e.target.textContent === "5.000") {
      e.target.textContent = "Narx"
    }
  }
  const btn3 = (e) => {
    if (e.target.textContent === "Narx") {
      e.target.textContent = 10 + ".000"
    } else if (e.target.textContent === "10.000") {
      e.target.textContent = "Narx"
    }
  }



  const delOne = (e) => {
    let DelBtn1 = document.querySelector("#narx2")
    DelBtn1.classList.toggle("hidden")
    let FruitName = document.querySelector("#span1")
    FruitName.textContent = "Ananas"
  }


  const DelTwo = (e) => {
    let DelBtn1 = document.querySelector("#narx2")
    DelBtn1.classList.toggle("hidden")
    let FruitName = document.querySelector("#span1")
    FruitName.textContent = "O'rik"
  }



  const DelThree = (e) => {
    let DelBtn1 = document.querySelector("#narx2")
    DelBtn1.classList.toggle("hidden")
    let FruitName = document.querySelector("#span1")
    FruitName.textContent = "Qulpnay"
  }

  const cancelPage = () => {
    let DelBtn1 = document.querySelector("#narx2")
    DelBtn1.classList.toggle("hidden")
  }

  const DelElement = () => {
    let DelBtn1 = document.querySelector("#narx2")
    let Nimadir1 = document.querySelector(".Nimadir1")
    let Nimadir2 = document.querySelector(".Nimadir2")
    let Nimadir3 = document.querySelector(".Nimadir3")
    let FruitName = document.querySelector("#span1")
    if (FruitName.textContent === "Ananas") {
      DelBtn1.classList.toggle("hidden")
      Nimadir1.remove()
    } else if (FruitName.textContent === "O'rik") {
    DelBtn1.classList.toggle("hidden")
      Nimadir2.remove()
    } else if (FruitName.textContent === "Qulpnay") {
    DelBtn1.classList.toggle("hidden")
      Nimadir3.remove()
    }
  }


  return (
    <>
      <center className='center'>
        <div className="col Nimadir1" id='card'>
          <img src={img1} alt="png" />
          <h1 id='FruitAnanas'>Ananas</h1>
          <div className="BtnDiv">
            <button onClick={btn1} id='btn1' className='Narx'>Narx</button>
            <button onClick={delOne} id='DelBtn1' className='Del'>O'chirish</button>
          </div>
        </div>
        <div className="col Nimadir2" id='card'>
          <div><img className='img1' src={img2} alt="png" /></div>
          <h1>O'rik</h1>
          <div className="BtnDiv">
            <button onClick={btn2} className='Narx'>Narx</button>
            <button onClick={DelTwo} id='DelBtn1' className='Del'>O'chirish</button>
          </div>
        </div>
        <div className="col Nimadir3" id='card'>
          <img src={img3} alt="png" />
          <h1>Qulpnay</h1>
          <div className="BtnDiv">
            <button onClick={btn3} className='Narx'>Narx</button>
            <button onClick={DelThree} id='DelBtn1' className='Del'>O'chirish</button>
          </div>
        </div>
      </center>
      <center id='narx2' className='hidden'>
        <h4>Rostan ham bu elementni o'chirishni hohlaysizmi?</h4>
        <br />
        <h4>Mahsulot nomi: <span id='span1'></span></h4>
        <div className="divBtn2">
          <button className="btnClace" onClick={cancelPage}>Cancle</button>
          <button className='btnDel1' onClick={DelElement}>Delete</button>
        </div>
      </center>
    </>
  )
}

export default App
