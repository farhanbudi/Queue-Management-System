import React from "react";
import { LoginForm } from "../components/LoginForm";
import {  render, screen } from "@testing-library/react";
describe("Test Login Form", () => {
  it("test text of elements", () => {
    render(<LoginForm />);
    const labelUsername = screen.getByLabelText(/username/i);
    const labelPassword = screen.getByLabelText(/password/i);
    const buttonLogin = screen.getByRole("button", { name: /login/i });
    const textboxUsername = screen.getByRole("textbox", { name: /username/i });
    expect(labelUsername).toBeInTheDocument();
    expect(labelPassword).toBeInTheDocument();
    expect(buttonLogin).toBeInTheDocument();
    expect(textboxUsername).toBeInTheDocument();
  });
  it("test number of elements", ()=>{
     render(<LoginForm />);
     expect(screen.getAllByText(/username/i)).toHaveLength(1);
     expect(screen.getAllByText(/password/i)).toHaveLength(1);
     expect(screen.getAllByRole("button")).toHaveLength(1);
     expect(screen.getAllByTestId("input")).toHaveLength(2);
  })
});

