import React from "react";
import {  render, screen } from "@testing-library/react";
import { BookingAntrian } from "../components/BookingAntrian";
describe("Test Book Nomor Antrian", () => {

  beforeEach(()=>{
   const onFinish = jest.fn();
   const setLink = jest.fn();
   render(
     <BookingAntrian
       dataBank={[]}
       checkBookingUser={[]}
       onFinish={onFinish}
       isLoading={false}
       link={""}
       setLink={setLink}
     />
   );
  })

  it("test text of elements", () => {
    
    const bankTujuan    = screen.getByText(/bank tujuan/i);
    const keperluanLayanan = screen.getByText(/keperluan layanan/i);
    const buttonBooking = screen.getByRole("button", {name: /dapatkan nomor antrian/i,});
    expect(bankTujuan).toBeInTheDocument();
    expect(keperluanLayanan).toBeInTheDocument();
    expect(buttonBooking).toBeInTheDocument();
  });

  it("test number of elements", () => {
    expect(screen.getAllByText(/bank tujuan/i)).toHaveLength(1);
    expect(screen.getAllByText(/keperluan layanan/i)).toHaveLength(1);
    expect(screen.getAllByRole("button")).toHaveLength(1);
  });


});
