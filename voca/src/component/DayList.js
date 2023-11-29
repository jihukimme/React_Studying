import { Link } from "react-router-dom";
//import dummy from "../db/data.json";
//import { useEffect, useState } from "react"; //useState()를 사용하기 위해서는 react를 import해야 한다.
import useFetch from "../hooks/useFetch";

export default function DayList() {
  //   const [days, setDays] = useState([]); //useState()를 사용하여 days라는 state를 만들고, 초기값은 빈 배열로 설정한다.

  //   useEffect(() => {
  //     fetch("http://localhost:3001/days")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setDays(data);
  //       });
  //   }, []);
  //useEffect()는 상태값이 바뀌었을 때 동작하는 함수를 작성할 수 있다.

  const days = useFetch("http://localhost:3001/days");

  if (days.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <ul className="list_day">
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
      <li></li>
    </ul>
  );
}
