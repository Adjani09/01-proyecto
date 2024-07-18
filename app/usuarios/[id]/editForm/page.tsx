'use client';

import { Button } from "@/app/lib/button";
import { lusitana } from "@/app/lib/fonts";
import Link from "next/link";
import { useState, useEffect } from "react";
import User from "@/app/lib/data";
import { updateUsers } from "@/app/lib/endPoint";
import { useRouter } from "next/navigation";


export default function EditForm({ params }: { params: { id: string } }) {
    // const [user, setUser] = useState<User>();
    const [userId, setUserId] = useState('');
    const [code, setCode] = useState('');
    const [fecha, setFecha] = useState('');
    const [lastDate, setLastDate] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [points, setPoints] = useState(0);
    const [numberW, setNumberW] = useState(0);
    const [ads, setAds] = useState(0);
    const [videoads, setVideoads] = useState(0);
    const [userStateId, setUserStateId] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchUsers = async () => {
            const consult = localStorage.getItem('users');
            if (consult != null) {
                const AllUsers: User[] = JSON.parse(consult);
                const findUser = AllUsers.find((user) => { return user.userId === params.id });
                if (findUser != null) {
                    setUserId(findUser.userId);
                    setCode(findUser.code);
                    setFecha(findUser.fecha);
                    setLastDate(findUser.lastDate);
                    setEmail(findUser.email);
                    setCountry(findUser.country);
                    setPoints(findUser.points);
                    setNumberW(findUser.numberW);
                    setAds(findUser.ads);
                    setVideoads(findUser.videoads);
                    setUserStateId(findUser.userStateId);
                }
            }
        };
        fetchUsers();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await updateUsers(userId, code, fecha, lastDate, email, country, points, numberW, ads, videoads, userStateId,);
            if (response === "OK") {
                router.push('/usuarios');
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
                    <h1 className={`${lusitana.className} text-2xl`}>Usuarios</h1>
                </div>
                <br />
                <br />
                <div className="mb-4">
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
                        value={user?.userId}
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
                        Ultima Conexión
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="lastDate"
                            name="lastDate"
                            type="text"
                            placeholder="lastDate"
                            value={lastDate}
                            onChange={(e) => setLastDate(e.target.value)}
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
                        Country
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="country"
                            name="country"
                            type="text"
                            placeholder="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
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
                        Numero de Retiros
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="numberW"
                            name="numberW"
                            type="text"
                            placeholder="numberW"
                            value={numberW}
                            onChange={(e) => setNumberW(Number.parseInt(e.target.value))}
                            required />
                    </div>
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        Ads
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="ads"
                            name="ads"
                            type="text"
                            placeholder="ads"
                            value={ads}
                            onChange={(e) => setAds(Number.parseInt(e.target.value))}
                            required />
                    </div>
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        VideoAds
                    </label>
                    <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="videoads"
                            name="videoads"
                            type="text"
                            placeholder="videoads"
                            value={videoads}
                            onChange={(e) => setVideoads(Number.parseInt(e.target.value))}
                            required />
                    </div>
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        Estado
                   </label>
                     <div className="relative">
                        <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                            id="userStateId"
                            name="userStateId"
                            type="text"
                            placeholder="userStateId"
                            value={userStateId}
                            onChange={(e) => setUserStateId(Number.parseInt(e.target.value))}
                            required />
                    </div>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="mt-6 flex justify-end gap-4">
                            <Link
                                href="/usuarios"
                                className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                            >
                                Cancelar
                            </Link>
                            <Button type="submit">Editar Usuario</Button>
                        </div>
                    </td>
                </div>
            </form>
        </div>
    )
}
