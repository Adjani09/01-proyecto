'use client';

import { Button } from "@/app/lib/button";
import { lusitana } from "@/app/lib/fonts";
import Link from "next/link";
import { useState, useEffect } from "react";
import Retiro from "@/app/lib/data";
import { updateRetiros } from "@/app/lib/endPoint";
import { useRouter } from "next/navigation";


export default function EditRetiros({ params }: { params: { id: string } }) {
    // const [retiro, setRetiro] = useState<Retiro>();
    const [withdrawalsId, setWithdrawalsId] = useState('');
    const [userId, setUserId] = useState('');
    const [fecha, setFecha] = useState('');
    const [selectedCoin, setSelectedCoin] = useState('');
    const [status, setStatus] = useState('');
    const [ip, setIp] = useState('');
    const [email, setEmail] = useState('');
    const [withdrawalEmail, setWithdrawalEmail] = useState('');
    const [points, setPoints] = useState(0);
    const [coins, setCoins] = useState('');
    const [usd, setUsd] = useState('');
    const [usdPrice, setUsdPrice] = useState('');
    const [SatoshiSend, setSatoshiSend] = useState('');
    const [conversion, setConversion] = useState('');
    const [withdrawalNumber, setWithdrawalNumber] = useState(0);
    const [videoAdsSum, setVideoAdsSum] = useState(0);
    const [WalletName, setWalletName] = useState('');
    const [note, setNote] = useState('');
    const [note2, setNote2] = useState('');

    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchRetiros = async () => {
            const consult = localStorage.getItem('retiros');
            if (consult != null) {
                const AllRetiros: Retiro[] = JSON.parse(consult);
                const findRetiro = AllRetiros.find((retiro) => { return retiro.withdrawalsId === params.id });
                if (findRetiro != null) {
                    setWithdrawalsId(findRetiro.withdrawalsId);
                    setUserId(findRetiro.userId);
                    setFecha(findRetiro.fecha);
                    setSelectedCoin(findRetiro.selectedCoin);
                    setStatus(findRetiro.status);
                    setIp(findRetiro.ip);
                    setEmail(findRetiro.email);
                    setWithdrawalEmail(findRetiro.withdrawalEmail);
                    setPoints(findRetiro.points);
                    setCoins(findRetiro.coins);
                    setUsd(findRetiro.usd);
                    setUsdPrice(findRetiro.usdPrice);
                    setSatoshiSend(findRetiro.SatoshiSend);
                    setConversion(findRetiro.conversion);
                    setWithdrawalNumber(findRetiro.withdrawalNumber);
                    setVideoAdsSum(findRetiro.videoAdsSum);
                    setWalletName(findRetiro.WalletName);
                    setNote(findRetiro.note);
                    setNote2(findRetiro.note2);
                }
            }
            
        };
        fetchRetiros();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await updateRetiros(withdrawalsId, userId, fecha, selectedCoin, status, ip, email, withdrawalEmail, points, coins, usd, usdPrice, SatoshiSend, conversion, withdrawalNumber, videoAdsSum, WalletName, note, note2);
            if (response === "OK") {
                router.push('/retiros');
            } else {
                console.log('error de edición:', response);
            }
        } catch (error) {
            console.error('error de edición:', error);
            setError('error de edicións');
            console.log("error de edición");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="shadow-lg hidden min-w-full text-gray-900 md:table overflow-scroll" >
                <div className="flex w-full items-center justify-between">
                    <h1 className={`${lusitana.className} text-2xl`}>Retiros</h1>
                </div>
                <br />
                <br />
                <div className="mb-4">
                    {/* <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                    WithdrawalsId
                </label>
                <div className="relative">
                    <input
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="withdrawalsId"
                        name="withdrawalsId"
                        type="text"
                        placeholder="withdrawalsId"
                        value={retiro?.retiro}
                        required />
                </div> */}
                    {/* <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                    UserId
                </label>
                <div className="relative">
                    <input
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="userId"
                        name="userId"
                        type="text"
                        placeholder="userId"
                        value={retiro?.userId}
                        required />
                </div> */}
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        Fecha
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="fecha"
                            name="fecha"
                            type="text"
                            placeholder="fecha"
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                            required />
                    </div>
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        Moneda
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="selectedCoin"
                            name="selectedCoin"
                            type="text"
                            placeholder="selectedCoin"
                            value={selectedCoin}
                            onChange={(e) => setSelectedCoin(e.target.value)}
                            required />
                    </div>
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        Estado
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="status"
                            name="status"
                            type="text"
                            placeholder="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            required />
                    </div>
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        Ip
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="ip"
                            name="ip"
                            type="text"
                            placeholder="ip"
                            value={ip}
                            onChange={(e) => setIp(e.target.value)}
                            required />
                    </div>
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        Email
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="email"
                            name="email"
                            type="text"
                            placeholder="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </div>
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        Email Retiro
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="withdrawalEmail"
                            name="withdrawalEmail"
                            type="text"
                            placeholder="withdrawalEmail"
                            value={withdrawalEmail}
                            onChange={(e) => setWithdrawalEmail(e.target.value)}
                            required />
                    </div>
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        Puntos
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="points"
                            name="points"
                            type="text"
                            placeholder="points"
                            value={points}
                            onChange={(e) => setPoints(Number.parseInt(e.target.value))}
                            required />
                    </div>
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        Coins
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="coins"
                            name="coins"
                            type="text"
                            placeholder="coins"
                            value={coins}
                            onChange={(e) => setCoins(e.target.value)}
                            required />
                    </div>
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        USD
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="usd"
                            name="usd"
                            type="text"
                            placeholder="usd"
                            value={usd}
                            onChange={(e) => setUsd(e.target.value)}
                            required />
                    </div>
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        UsdPrice
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="usdPrice"
                            name="usdPrice"
                            type="text"
                            placeholder="usdPrice"
                            value={usdPrice}
                            onChange={(e) => setUsdPrice(e.target.value)}
                            required />
                    </div>
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                    SatoshiSend
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="SatoshiSend"
                            name="SatoshiSend"
                            type="text"
                            placeholder="SatoshiSend"
                            value={SatoshiSend}
                            onChange={(e) => setSatoshiSend(e.target.value)}
                            required />
                    </div>
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        Conversion
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="conversion"
                            name="conversion"
                            type="text"
                            placeholder="conversion"
                            value={conversion}
                            onChange={(e) => setConversion(e.target.value)}
                            required />
                    </div>
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        Numero de Retiro
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="withdrawalNumber"
                            name="withdrawalNumber"
                            type="text"
                            placeholder="withdrawalNumber"
                            value={withdrawalNumber}
                            onChange={(e) => setWithdrawalNumber(Number.parseInt(e.target.value))}
                            required />
                    </div>
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                    videoAdsSum
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="videoAdsSum"
                            name="videoAdsSum"
                            type="text"
                            placeholder="videoAdsSum"
                            value={videoAdsSum}
                            onChange={(e) => setVideoAdsSum(Number.parseInt(e.target.value))}
                            required />
                    </div>
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        Wallet
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="WalletName"
                            name="WalletName"
                            type="text"
                            placeholder="WalletName"
                            value={WalletName}
                            onChange={(e) => setWalletName(e.target.value)}
                            required />
                    </div>
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        Note
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="note"
                            name="note"
                            type="text"
                            placeholder="note"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            required />
                    </div>
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        Note2
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="note2"
                            name="note2"
                            type="text"
                            placeholder="note2"
                            value={note2}
                            onChange={(e) => setNote2(e.target.value)}
                            required />
                    </div>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="mt-6 flex justify-end gap-4">
                            <Link
                                href="/retiros"
                                className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                            >
                                Cancelar
                            </Link>
                            <Button type="submit">Editar Retiros</Button>
                        </div>
                    </td>
                </div>
            </form>
        </div>
    )
}
