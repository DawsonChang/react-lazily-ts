import React, { Suspense } from "react";
import { lazily } from "react-lazily";

const { MyComponent } = lazily(() => import("./MyComponent"));

export default function App() {
  const [open, setOpen] = React.useReducer(() => true, false);
  return (
    <>
      {open ? (
        <Suspense fallback={<>Loading...</>}>
          <MyComponent />
        </Suspense>
      ) : (
        <button onClick={setOpen}>Load</button>
      )}
    </>
  );
}

// see more in https://codesandbox.io/s/react-lazily-vs-react-iqy23
