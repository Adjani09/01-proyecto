'use client';

import { Button } from "@/app/lib/button";
import { lusitana } from "@/app/lib/fonts";
import Link from "next/link";
import { useState, useEffect } from "react";
import Code from "@/app/lib/data";
import { updateCodes } from "@/app/lib/endPoint";
import { useRouter } from "next/navigation";


export default function EditCodigos({ params }: { params: { id: string } }) {
    //const [codeLocalStorage, setCodeLocalStorage] = useState<Code>();
    const [codeId, setCodeId] = useState('');
    const [code, setCode] = useState('');
    const [points, setPoints] = useState(0);
    const [expirationDate, setExpirationDate] = useState('');
    const [notes, setNotes] = useState('');
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchCodes = async () => {
            const consult = localStorage.getItem('codes');
            if (consult != null) {
                const AllCodes: Code[] = JSON.parse(consult);
                const findCode = AllCodes.find((code) => { return code.codeId === params.id });
                if (findCode != null) {
                    setCodeId(findCode.codeId);
                    setCode(findCode.code);
                    setPoints(findCode.points);
                    setExpirationDate(findCode.expirationDate);
                    setNotes(findCode.notes);
                    //setCodeLocalStorage(findCode);
                }
            }
        };
        fetchCodes();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await updateCodes(codeId, code, points, expirationDate, notes);
            if (response === "OK") {
                router.push('/codigos_promocionales');
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
                    <h1 className={`${lusitana.className} text-2xl`}>Códigos Promocionales</h1>
                </div>
                <br />
                <br />
                <div className="mb-4">
                    {/* <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                    CodeId
                </label>
                <div className="relative">
                    <input
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="codeId"
                        name="codeId"
                        type="text"
                        placeholder="codeId"
                        required />
                </div> */}
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        Code
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="code"
                            name="code"
                            type="text"
                            placeholder="code"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            required />
                    </div>
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        Points
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
                        Fecha de expiración
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="expirationDate"
                            name="expirationDate"
                            type="text"
                            placeholder="expirationDate"
                            value={expirationDate}
                            onChange={(e) => setExpirationDate(e.target.value)}
                            required />
                    </div>
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        Nota
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="notes"
                            name="notes"
                            type="text"
                            placeholder="notes"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            required />
                    </div>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="mt-6 flex justify-end gap-4">
                            <Link
                                href="/codigos_promocionales"
                                className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200">
                                Cancelar
                            </Link>
                            <Button type="submit">
                                Editar Codigos
                            </Button>
                        </div>
                    </td>
                </div>
            </form>
        </div>
    )
}
