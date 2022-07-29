import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { createNewCameraEntry, deleteCameraEntry } from "../Utils/controllers";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/base";
import LandingPage from "../views/LandingPage/LandingPage";

describe("LandingPage Component", () => {
  let userMockInfo = {
    id: "1234",
    name: "testeJest",
    manufacturer: "Surveillance Cams LLC",
    serialNumber: "teste",
  };

  afterAll(async () => { 
    await deleteCameraEntry(userMockInfo.id)
  })

  it("Renders correctly", async () => {
    
    render(
      <ThemeProvider theme={theme}>
        <LandingPage/>
      </ThemeProvider>
    )

    expect(
      screen.getByRole("button", { name: /adicionar câmera/i })
    ).toBeTruthy();
  });
 

  it("create new camera entry", async () => {

    render(
      <ThemeProvider theme={theme}>
        <LandingPage/>
      </ThemeProvider>
    )

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

  }); 

  it("delete camera info correctly", async () => {

    render(
      <ThemeProvider theme={theme}>
        <LandingPage/>
      </ThemeProvider>
    )
    
    try { await createNewCameraEntry(userMockInfo);
    } catch (error) {
      console.log(error);
    }

    await userEvent.click(screen.getByText("testeJest"));
    await userEvent.click(screen.getByRole("button", { name: /confirmar/i }));

    await waitForElementToBeRemoved(screen.queryByText("testeJest"));

    expect(screen.queryByText("testeJest")).toBe(null);
  });
});
