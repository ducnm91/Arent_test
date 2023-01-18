import { Helmet, HelmetProvider } from "react-helmet-async";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "store/counter/counterSlice";

export default function () {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Form page</title>
        </Helmet>
      </HelmetProvider>
      <span className="d-block">{count}</span>
      <button className="btn btn-primary" onClick={() => dispatch(increment())}>
        Increment
      </button>

      <input
        type="text"
        onChange={(event) =>
          dispatch(incrementByAmount(Number(event.target.value)))
        }
        className="form-control"
      />
      <button className="btn btn-primary" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </>
  );
}
