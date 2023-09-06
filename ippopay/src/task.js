
import { useEffect, useState } from "react";
function Task() {
  const [counterOne, SetCounterOne] = useState(1);
  const [counterTwo, SetCounterTwo] = useState(2);

  const [data,setData] = useState()

  function handleIncrementOne() {
    SetCounterOne(counterOne + 1);
  }

  const isEven = () => {
    let i = 0;
    while (i < 100000000) i++;

    return counterOne % 2 === 0;
  };

  function handleIncrementTwo() {
    SetCounterTwo(counterTwo + 2);
  }

  useEffect(() => {
    serverFunction()
  },[])

  const serverFunction = async() => {
  
    const res = await axios({
        method : "Get",
        url : `https://datausa.io/api/data?drilldowns=Nation&measures=Population`
    })
    if(res){
        setData(res.data)
    }
    console.log("res",res)
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => handleIncrementOne()}>
          Increment By One {counterOne}
        </button>
      </div>
      <span>{isEven() ? "Even" : "Odd"}</span>
      <div>
        <button onClick={() => handleIncrementTwo()}>
          Increment by Two {counterTwo}
        </button>
      </div>
    </div>
  );
}

export default Task;
