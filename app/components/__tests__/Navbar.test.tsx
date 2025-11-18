import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";
import { ThemeProvider } from "../ThemeProvider";

describe("Navbar", () => {
  it("renders brand name", () => {
    render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    );
    expect(screen.getByText("Neo Soft")).toBeInTheDocument();
  });

  it("renders theme toggle button", () => {
    render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    );
    expect(
      screen.getByRole("button", { name: /Dark/i })
    ).toBeInTheDocument();
  });
});
