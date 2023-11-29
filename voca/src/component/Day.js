import { useParams } from "react-router-dom";
//import dummy from "../db/data.json";
//import { useEffect, useState } from "react"; //useState()를 사용하기 위해서는 react를 import해야 한다.
import useFetch from "../hooks/useFetch";
import Word from "./Word";

export default function Day() {
  //dummy.words

  //url에 있는 값을 day로 사용하기 위해서는 useParams()를 사용해야 한다.
  //const day = useParams().day; 또는
  const { day } = useParams();
  //const wordList = dummy.words.filter((word) => word.day === Number(day));

  //   const [words, setWords] = useState([]);

  //   useEffect(() => {
  //     fetch(`http://localhost:3001/words?day=${day}`)
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setWords(data);
  //       });
  //   }, [day]);
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
