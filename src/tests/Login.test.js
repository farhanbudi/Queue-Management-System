import React from "react";
import { LoginForm } from "../components/LoginForm";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

   it("test submit with Correct data", async () => {
     render(<LoginForm />);
     userEvent.type(screen.getByRole("textbox"), "dts2021@tes.com");
     fireEvent.submit(screen.getByRole("button"));

     expect(await screen.queryByText(/login gagal/i)).toBeNull();
   });

   it("test submit with Empty data", async () => {
     render(<LoginForm />);
     fireEvent.submit(screen.getByRole("button"));
     expect(await screen.findByText("login gagal")).toBeInTheDocument();
   });

   it("test submit with Wrong data", async () => {
     render(<LoginForm />);
     userEvent.type(screen.getByRole("textbox"), "aritest");
     fireEvent.submit(screen.getByRole("button"));
     expect(await screen.findByText("login gagal")).toBeInTheDocument();
   });
});

