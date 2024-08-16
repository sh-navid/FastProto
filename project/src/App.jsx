import React, { useState } from "react";
// import { Counter } from "@ui-mod/ui-mod";
// import { Counter } from "./components/Counter";

import { Toast } from "@ui-mod/ui-mod";
// import { Toast } from "./components/Toast";

function App() {
  const [toast, setToast] = useState(null);

  return (
    <>
      {/* <Counter /> */}
      <Toast state={{ toast, setToast }} />
      <button
        onClick={() => {
          setToast("This is my toast");
        }}
      >
        Show Toast
      </button>
    </>
  );
}

export default App;
