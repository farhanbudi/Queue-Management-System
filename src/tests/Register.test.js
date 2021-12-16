import { Register } from "../components/Register";
import { render, screen } from "@testing-library/react";
  test("register test", () => {
    render(<Register/>);
    const labelUsername = screen.getByText(/username/i);
    const labelPassword = screen.getByText(/password/i);
    expect(labelUsername).toBeInTheDocument();
    expect(labelPassword).toBeInTheDocument();

  });