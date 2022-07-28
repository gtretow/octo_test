import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as ReactDOM from "react-dom";
import LandingPage from "../views/LandingPage/LandingPage";

describe("LandingPage Component", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<LandingPage />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly", () => {
    const buttons = container.querySelectorAll("button");
    expect(buttons).toBeGreaterThanOrEqual(1);
  });

  it("get camera info correctly", () => {});

  it("add camera info correctly", () => {});

  it("delete camera info correctly", () => {});
});
