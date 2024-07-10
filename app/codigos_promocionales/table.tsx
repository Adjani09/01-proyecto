import { EditarCodigo, EliminarCodigo } from "./buttons"
import { lusitana } from "../lib/fonts"
import { fetchingGet } from "../lib/endPoint"
import { useState, useEffect } from "react";
import Code from "../lib/data";


export default function Promostable() {
    const [codes, setCodes] = useState<Code[]>([]);

    useEffect(() => {
        const fetchCodes = async () => {
            try {
                //const codes = await codigosPromocionales();
                const codes = await fetchingGet("https://edercmf.com/API/GetCodes.php");
                localStorage.setItem('codes', JSON.stringify(codes));
                setCodes(codes);
                console.log(codes);
            } catch (error) {
                console.error('Error al traer los codigos:', error);
                //   setError('Usuario o contraseña incorrectos');
                console.log("Error al traer los codigos");
            }
        }; 
        fetchCodes();
    }, []);

    return (
        <div >
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Codigos Promocionales</h1>
            </div>
            <br />
            <br />
            <table className="shadow-lg hidden min-w-full text-gray-900 md:table overflow-scroll">
                <thead className="rounded-lg text-left text-sm font-normal">
                    <tr>
                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                            CodeId
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Code
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Puntos
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Fecha Expiración
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Nota
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {codes?.map((code) => (
                        <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <div className="flex items-center gap-3">
                                    {code.codeId}
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {code.code}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {code.points}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {code.expirationDate}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {code.notes}
                            </td>
                            <div className="flex justify-end gap-3">
                                <td className="whitespace-nowrap px-3 py-3">
                                    <div className="flex justify-end gap-2">
                                        <EditarCodigo id={code.codeId} />
                                        <EliminarCodigo id="code" />
                                    </div>
                                </td>
                            </div>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
