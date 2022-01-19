// 6-3장
import { useState, useEffect } from "react";

function Effects() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("i run all the time");

  useEffect(() => {
    console.log("i run only once.");
  }, []); // 단 한번만 실행됨

  useEffect(() => {
    console.log("i run whe 'keyword' changes"); //keyword의 길이가 6자 이상이면서 공란이 아닐경우에 실행
  }, [keyword]);  // keyword가 변화할때만 실행되게끔 함.

  useEffect(() => {
      console.log("i run whe 'counter' changes"); //keyword의 길이가 6자 이상이면서 공란이 아닐경우에 실행
  }, [counter]);  // counter가 변화할때만 실행되게끔 함.

  useEffect(() => {
    console.log("i run when keyword & counter chages");
  }, [keyword,counter]); //keyword나 counter가 변화할때 실행되게끔함

  return (
    <div>
      <input
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  )
}

export default Effects;