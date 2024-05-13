import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/counterSlice";
import { userId } from "./redux/usersSlice";
import User from "./User";

function App() {
  const count = useSelector((state) => state.counter.value);
  // console.log(count);

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(userId());
    // console.log(users);
  }, []);
  // users.map((user) => {
  //   console.log(user);
  // });

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>Artir</button>
      <button onClick={() => dispatch(decrement())}>azalt</button>

      <div style={{ marginTop: "30px" }}>
        {users && users.map((user) => <User key={user.id} user={user} />)}
      </div>
    </div>
  );
}

export default App;
