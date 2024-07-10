'use client';

import { Button } from "@/app/lib/button";
import { lusitana } from "@/app/lib/fonts";
import Link from "next/link";
import { useState, useEffect } from "react";
import Retiro from "@/app/lib/data";


export default function EditRetiros({ params }: { params: { id: string } }) {
    const [retiro, setRetiro] = useState<Retiro>();

    useEffect(() => {
        const fetchRetiros = async () => {
            const consult = localStorage.getItem('retiros');
            if (consult != null) {
                const AllRetiros: Retiro[] = JSON.parse(consult);
                const findRetiro = AllRetiros.find((retiro) => { return retiro.withdrawalsId === params.id });
                if (findRetiro != null) {
                    setRetiro(findRetiro);
                }
            }
        };
        fetchRetiros();
    }, []);

    return (
        <div>
            <form className="shadow-lg hidden min-w-full text-gray-900 md:table overflow-scroll" />
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
                        value={retiro?.fecha}
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
                        value={retiro?.selectedCoin}
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
                        value={retiro?.status}
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
                        value={retiro?.ip}
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
                        value={retiro?.email}
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
                        value={retiro?.withdrawalEmail}
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
                        value={retiro?.points}
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
                        value={retiro?.coins}
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
                        value={retiro?.usd}
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
                        value={retiro?.usdPrice}
                        required />
                </div>
                <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                    SatoshiSend
                </label>
                <div className="relative">
                    <input
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="satoshiSend"
                        name="satoshiSend"
                        type="text"
                        placeholder="satoshiSend"
                        value={retiro?.satoshiSend}
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
                        value={retiro?.conversion}
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
                        value={retiro?.withdrawalNumber}
                        required />
                </div>
                <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                    SumADS
                </label>
                <div className="relative">
                    <input
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="videoAdsSum"
                        name="videoAdsSum"
                        type="text"
                        placeholder="videoAdsSum"
                        value={retiro?.videoAdsSum}
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
                        value={retiro?.walletName}
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
                        value={retiro?.note}
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
                        value={retiro?.note2}
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
        </div>
    )
}
