import { render, screen } from "@testing-library/react";
import Beranda from "../components/Beranda/Beranda";
import userEvent from "@testing-library/user-event";
import NoData from "../components/Beranda/noData";

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
    const eform = screen.getByText(
      /untuk mempercepat transaksi, silahkan kunjungi/i
    );
    const link = screen.getByRole("link", {
      name: /e\-form\./i,
    });
    const danger = screen.getByText(
      /harap mendatangi kantor sebelum waktu pelayanan/i
    );
    const buttonText = screen.getByText(/layanan selesai/i);

    expect(title).toBeInTheDocument();
    expect(antrian[0]).toBeInTheDocument();
    expect(bank).toBeInTheDocument();
    expect(keperluan).toBeInTheDocument();
    expect(tanggal).toBeInTheDocument();
    expect(eform).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(danger).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });

  test("Render Button Correctly", () => {
    render(<Beranda />);
    const button = screen.getByRole("button", { name: /layanan selesai/i });
    expect(button).toBeInTheDocument();
  });
});

describe("function in beranda component work correctly", () => {
  test("Button can be clicked", () => {
    const onClick = jest.fn();
    render(<Beranda onClick={onClick} />);
    const button = screen.getByRole("button", { name: /layanan selesai/i });
    userEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  test("link e-form should link to e-form bri", () => {
    render(<Beranda />);
    const link = screen.getByRole("link", {
      name: /e\-form\./i,
    });
    expect(link).toHaveAttribute("href", "https://eform.bri.co.id");
  });

  test("API call work correctly", () => {
    const bookData = {
      id: 4,
      nomor_antrian: 4,
      nama_bank: "BANK KCP Setra Sari",
      alamat: "Jl. Surya Sumantri No. 34A Bandung",
      keperluan_layanan: 3,
      jam_pelayanan: "08:00",
      tanggal_pelayanan: "2021-10-19T00:00:00Z",
      booking_slot: 19,
    };

    render(<Beranda detail={bookData} />);
    const noAntrian = screen.getByText(/4/i);
    const bank = screen.getByText(/bank kcp setra sari/i);
    const keperluan = screen.getByText(
      /pinjaman \(dilayani oleh petugas kredit\)/i
    );
    const time = screen.getByText(/19 oktober 2021, pukul 08:00 wib\./i);

    expect(noAntrian).toBeInTheDocument();
    expect(bank).toBeInTheDocument();
    expect(keperluan).toBeInTheDocument();
    expect(time).toBeInTheDocument();
  });
});

describe("noData component should render correctly", () => {
  test("Render text correctly", () => {
    render(<NoData />);
    const text1 = screen.getByText(
      /anda sedang tidak membooking antrian saat ini\./i
    );
    const text2 = screen.getByText(
      /silahkan lakukan booking melalui aplikasi pada h\-1\./i
    );
    const buttonText = screen.getByText(/booking nomor antrian/i);
    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });

  test("Render Button Correctly", () => {
    render(<NoData />);
    const button = screen.getByText(/booking nomor antrian/i);
    expect(button).toBeInTheDocument();
  });
});

describe("function in noData component work correctly", () => {
  test("Button can be clicked", () => {
    const redirectBook = jest.fn();
    render(<NoData redirectBook={redirectBook} />);
    const button = screen.getByRole("button", {
      name: /booking nomor antrian/i,
    });
    userEvent.click(button);
    expect(redirectBook).toHaveBeenCalled();
  });

  // test("triggers path change", () => {
  //   const history = createMemoryHistory();

  //   render(
  //     <Router history={history}>
  //       <NoData />
  //     </Router>
  //   );

  //   const button = screen.getByRole("button", {
  //     name: /booking nomor antrian/i,
  //   });

  //   userEvent.click(button);
  //   expect(history.length).toBe(2);
  //   //expect(history.location.pathname).toBe("/book-nomor-antrian");
  // });
});
