import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
  cleanup,
  act,
  queryByRole,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LandingPage from "../views/LandingPage/LandingPage";
import { createNewCameraEntry, deleteCameraEntry } from "../Utils/controllers";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/base";

describe("LandingPage Component", () => {
  let userMockInfo = {
    id: "1234",
    name: "testeJest",
    manufacturer: "Surveillance Cams LLC",
    serialNumber: "teste",
  };

  beforeEach(async () => {
    render(
      <ThemeProvider theme={theme}>
        <LandingPage />
      </ThemeProvider>
    );
  });

  afterEach(async () => {
    await deleteCameraEntry("1234");
  });

  it("Renders correctly", async () => {
    expect(
      screen.getByRole("button", { name: /adicionar câmera/i })
    ).toBeTruthy();
  });

  it("get camera info correctly", async () => {
    await createNewCameraEntry(userMockInfo);
    expect(screen.queryByText("testeJest")).toBe(true);
  });

  /*   it("create new camera entry", async () => {
    await userEvent.click(
      screen.getByRole("button", { name: /Adicionar Câmera/i })
    );

    await userEvent.type(screen.getByLabelText(/nome/i), "testeJest2");
    await userEvent.type(screen.getByLabelText(/número de série/i), "A6AS5D4A");

    const dropdown = await screen.getByTestId("dropdown");
    const display = dropdown.children[2];

    await userEvent.click(dropdown);
    await userEvent.click(display);

    await userEvent.click(screen.getByText("Criar"));

    await waitForElementToBeRemoved(screen.queryByText("Criar"));
    const id = await screen.getByText("testeJest2");
    expect(id).toBeTruthy();
  }); */

  /*   it("delete camera info correctly", async () => {
    await createNewCameraEntry(userMockInfo);

    await userEvent.click(screen.getByText("testeJest"));
    await userEvent.click(screen.getByRole("button", { name: /confirmar/i }));

    await waitForElementToBeRemoved(screen.queryByText("testeJest"));

    expect(screen.queryByText("testeJest")).toBe(null);
  }); */
});
