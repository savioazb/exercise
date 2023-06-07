import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "./page";

test("renders the landing page", () => {
  const { getByText } = render(<Home />);
  expect(getByText("The most innovative companies use Talkdesk.")).toBeTruthy();
});
