import React from "react";
import {  render, screen } from "@testing-library/react";
import { BookAntrian } from "../components/BookNomorAntrian";
describe("Test Book Nomor Antrian", () => {
  it("test text of elements", () => {
    render(<BookAntrian />);
    const bankTujuan    = screen.getByText(/bank tujuan/i);
    const keperluanLayanan = screen.getByText(/keperluan layanan/i);
    const selectBoxBankTujuan = screen.getByRole("combobox", {name: /bank tujuan/i,});
    const selectBoxKeperluanLayanan = screen.getByRole("combobox", {name: /keperluan layanan/i,});
    const buttonBooking = screen.getByRole("button", {name: /dapatkan nomor antrian/i,});

    expect(bankTujuan).toBeInTheDocument();
    expect(keperluanLayanan).toBeInTheDocument();
    expect(selectBoxBankTujuan).toBeInTheDocument();
    expect(selectBoxKeperluanLayanan).toBeInTheDocument();
    expect(buttonBooking).toBeInTheDocument();
  });
  it("test number of elements", () => {
    render(<BookAntrian />);
    expect(screen.getAllByText(/bank tujuan/i)).toHaveLength(1);
    expect(screen.getAllByText(/keperluan layanan/i)).toHaveLength(1);
    expect(screen.getAllByRole("button")).toHaveLength(1);
    expect(screen.getAllByRole("combobox")).toHaveLength(2);
  });


});
