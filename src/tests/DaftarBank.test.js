import { DaftarListBank } from "../components/DaftarBank";
import { render, screen } from "@testing-library/react";
import { data } from "../pages/dashboard/DaftarBankPage"; 

describe("Daftar Bank component should render correctly", () =>{
    test("Render text correctly", ()=>{
        render(<DaftarListBank />);
        const title = screen.getByText(/daftar bank/i);
        const search = screen.getByRole('textbox');

        expect(title).toBeInTheDocument();
        expect(search).toBeInTheDocument();
    });

    test("Render table correctly", ()=>{
        render(<DaftarListBank/>);
        // const { getByRowColumn, getByText } = screen.getByRowColumn('cell', {  getByText: /bank kcp soreang/i})
        const column = [
            { title: 'No', dataIndex: 'id_bank', key: 'no'},
            { title: 'Bank', dataIndex: 'nama_bank', key: 'bank'},
            { title: 'Alamat', dataIndex: 'alamat', key: 'alamat'}
        ]
        
        const dataSource = [
            { id_bank:'1', nama_bank: 'BANK KCP SOREANG', alamat:'Jl.Soreang No.180'}
        ]
        
        // console.log(column.map(a => a.title)[0]);
        // console.log(dataSource.map(a => a.id_bank));

        // expect( column.map(a => a.title)[0]).toEqual(expect(dataSource.map(a => a.id_bank)));
        
        // expect(column.at(0).text()).toEqual(data[dataIndex].no);
        // expect(column.at(1).text()).toEqual(data[dataIndex].bank);
        // expect(column.at(2).text()).toEqual(data[dataIndex].alamat);
    });

    test("Render tag a correctly", ()=>{
        render(<DaftarListBank/>);
        const direct = screen.getByText(/lihat detail/i);
        expect(direct).toBeInTheDocument();
    });
});