import { createRoot } from "react-dom/client";
import { Button } from ".";

describe("Button", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const root = createRoot(div);
    root.render(
      <Button
        onClick={() => {
          const a = 2 + 3;
          return a;
        }}
        type="button"
      />
    );
    root.unmount();
  });
});
