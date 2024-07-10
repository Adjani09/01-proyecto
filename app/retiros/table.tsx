import { lusitana } from "../lib/fonts"
import { EditarRetiro, EliminarRetiro } from "./buttons"
import { fetchingGet } from "../lib/endPoint"
import { useState, useEffect } from "react"
import Retiro from "../lib/data";


export default function Retirostable() {
    const [retiros, setRetiros] = useState<Retiro[]>([]);

    useEffect(() => {
        const fetchRetiros = async () => {
            try {
                const consultRetiros = await fetchingGet("https://edercmf.com/API/GetWithdrawals.php");
                localStorage.setItem('retiros', JSON.stringify(consultRetiros));
                setRetiros(consultRetiros);
                console.log(consultRetiros);
            } catch (error) {
                console.error('Error al traer los retiros:', error);
                //   setError('Usuario o contraseña incorrectos');
                console.log("Error al traer los retiros");
            }
        };
        fetchRetiros();
    }, []);

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Retiros</h1>
            </div>
            <br />
            <br />
            <table className="shadow-lg hidden min-w-full text-gray-900 md:table overflow-scroll">
                <thead className="rounded-lg text-left text-sm font-normal">
                    <tr>
                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                            WithdrawalsId
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                            User Id
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Fecha
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Moneda
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Estado
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Ip
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Email
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Email Retiro
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Puntos
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Coins
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            USD
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            UsdPrice
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            SatoshiSend
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Conversion
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Numero de Retiro
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            SumADS
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Wallet
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Note
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Note2
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {retiros?.map((retiro) => (
                        <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <div className="flex items-center gap-3">
                                    {retiro.withdrawalsId}
                                </div>
                            </td>
                            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                {retiro.userId}
                            </th>
                            <td className="whitespace-nowrap px-3 py-3">
                                {retiro.fecha}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {retiro.selectedCoin}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {retiro.status}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {retiro.ip}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {retiro.email}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {retiro.withdrawalEmail}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {retiro.points}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {retiro.coins}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {retiro.usd}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {retiro.usdPrice}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {retiro.satoshiSend}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {retiro.conversion}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {retiro.withdrawalNumber}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {retiro.videoAdsSum}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {retiro.walletName}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {retiro.note}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {retiro.note2}
                            </td>
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <div className="flex justify-end gap-2">
                                    <EditarRetiro id={retiro.withdrawalsId} />
                                    <EliminarRetiro id="retiro" />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

