import React, { useState } from "react";
// import { Counter } from "@ui-mod/ui-mod";
// import { Counter } from "./components/Counter";

// import { Toast } from "@ui-mod/ui-mod";
// import { Toast } from "./components/Toast";

// import { Flow } from "./components/Flow";

import { Modal } from "./components/Modal";
import { Container } from "./components/Container";

function App() {
  const [modal, setModal] = useState(null);

  const ModalComponent = () => {
    return (
      <>
        <h3>Modal Title</h3>
        <p>Modal Content</p>
      </>
    );
  };

  return (
    <>
      <Modal state={{ modal, setModal }} />
      <Container>
        <button
          onClick={() => {
            setModal(
              <>
                <h3>Modal Title</h3>
                <p>Modal Content</p>
              </>
            );
          }}
        >
          Show Modal
        </button>
      </Container>
    </>
  );
}

export default App;
