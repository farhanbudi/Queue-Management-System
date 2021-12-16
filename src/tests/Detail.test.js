import React from 'react';
import { DetailInfoAntrian } from "../components/Detail";
import { render, screen } from "@testing-library/react";
//import { data } from "../pages/dashboard/DetailInfoAntrianPage"

const data = [
  { tanggal_antrian_saat_ini: '7/8/2021' },
  { nama_bank: 'BANK KCP TIMBUKTU' },
  { alamat: 'Jl. Timbuktu No. 50' },
  { no_antrian_saat_ini: '12' },
  { waktu_pelayanan: '10.00' }
]

describe("Detail component should render correctly", () => {
    test("Render text correctly", () => { 
        render(<DetailInfoAntrian />);
        const tanggal = screen.getByText(/info antrian hari ini/i);
        const bank = screen.getByText(/bank/i);
        const alamat = screen.getByText(/alamat/i);
        const antrian = screen.getByText(/nomor antrian yang sedang dilayani saat ini/i);
        const waktu = screen.getByText(/pukul/i);;
        //const danger = screen.getByText(/\*kuota besok penuh\./i);

        expect(tanggal).toBeInTheDocument();
        expect(bank).toBeInTheDocument();
        expect(antrian).toBeInTheDocument();
        expect(alamat).toBeInTheDocument();
        expect(waktu).toBeInTheDocument();
        //expect(danger).toBeInTheDocument();
  
        const back = screen.getByRole("button", { name: /kembali/i });
        const next = screen.getByRole("button", { name: /booking untuk besok/i });

        expect(back).toBeInTheDocument();
        expect(next).toBeInTheDocument();
      });
});