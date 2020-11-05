import { render } from "react-dom";
import React, { StrictMode } from "react";

import RedBox from "redbox-react";

const renderComponent = (rootElement) => {
  render(
    <StrictMode>
      <div>Hello World</div>
    </StrictMode>,

    rootElement
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const reactElement = document.getElementById("app");
  console.log("adsfsdafds");
  if (reactElement) {
    try {
      renderComponent(reactElement);
    } catch (e) {
      render(<RedBox error={e} />, reactElement);
    }
  }
});
