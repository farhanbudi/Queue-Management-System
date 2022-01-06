import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Beranda from "../components/Beranda";

describe("Beranda component should render correctly", () => {
  test("Render text correctly", () => {
    render(<Beranda />);
    const title = screen.getByRole("heading", { name: /detail booking/i });
    const antrian = screen.getAllByText(/nomor antrian/i);
    const bank = screen.getByText(/bank tujuan/i);
    const keperluan = screen.getByText(/keperluan layanan/i);
    const tanggal = screen.getByText(
      /nomor antrian akan dilayani pada tanggal:/i
    );
    const pukul = screen.getByText(/, pukul \./i);
    const eform = screen.getByText(
      /untuk mempercepat transaksi, silahkan kunjungi/i
    );
    const link = screen.getByRole("link", {
      name: /e\-form\./i,
    });
    const danger = screen.getByText(
      /\*harap mendatangi kantor sebelum waktu pelayanan\./i
    );

    expect(title).toBeInTheDocument();
    expect(antrian[0]).toBeInTheDocument();
    expect(bank).toBeInTheDocument();
    expect(keperluan).toBeInTheDocument();
    expect(tanggal).toBeInTheDocument();
    expect(pukul).toBeInTheDocument();
    expect(eform).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(danger).toBeInTheDocument();

    // Render Button Correctly
    const button = screen.getByRole("button", { name: /layanan selesai/i });
    expect(button).toBeInTheDocument();
  });
});

// describe("function in beranda page work correctly", () => {
//   test("Button can be clicked", () => {
//     const serviceDone = jest.fn();
//     render(<Beranda />);
//     //const button = screen.getByRole("button", { name: /layanan selesai/i }).firstElementChild;;
//     const button = screen.getByRole("button", { name: /aaa/i });
//     userEvent.click(button);
//     expect(serviceDone).toHaveBeenCalled();
//   });

// });
