import React from "react";
import { render, screen } from "@testing-library/react";
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
    await createNewCameraEntry(userMockInfo);
  });

  afterEach(async () => {
    await deleteCameraEntry("1234");
  });

  it("Renders correctly", () => {
    expect(
      screen.getByRole("button", { name: /adicionar câmera/i })
    ).toBeTruthy();
  });

  it("get camera info correctly", async () => {
    expect(screen.getByLabelText(/testeJest/i)).toBeTruthy();
  });

  it("create new camera entry", async () => {
    await userEvent.click(
      screen.getByRole("button", { name: /Adicionar Câmera/i })
    );

    await userEvent.type(screen.getByLabelText(/nome/i), "testeJest2");
    await userEvent.type(screen.getByLabelText(/número de série/i), "A6AS5D4A");
    await userEvent.type(screen.getByLabelText(/selecione uma opção/i), "s");

    await userEvent.click(screen.getByRole("button", { name: /criar/i }));
    expect(screen.getByLabelText(/A6AS5D4A/i)).toBeTruthy();
  });

  it("delete camera info correctly", async () => {
    await userEvent.click(screen.getByLabelText("testeJest2"));
    await userEvent.click(screen.getByRole("button", { name: /confirmar/i }));
    expect(screen.getByLabelText(/testeJest2/i)).toBeFalsy();
  });
});
