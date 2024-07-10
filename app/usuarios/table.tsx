import { EditarUsuario, EliminarUsuario } from "./buttons"
import { lusitana } from "../lib/fonts"
import { fetchingGet } from "../lib/endPoint";
import { useState, useEffect } from "react";
import  User  from "../lib/data";


export default function Usuariostable() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const consultUsers = await fetchingGet("https://edercmf.com/API/GetUsers.php");
                localStorage.setItem('users', JSON.stringify(consultUsers));
                setUsers(consultUsers);
                console.log(consultUsers);
            } catch (error) {
                console.error('Error al traer los usuarios:', error);
                console.log("Error al traer los usuarios");
            }
        };
        fetchUsers();
    }, []);
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Usuarios</h1>
            </div>
            <br />
            <br />
            <table className="shadow-lg hidden min-w-full text-gray-900 md:table overflow-scroll">
                <thead className="rounded-lg text-left text-sm font-normal">
                    <tr>
                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                            User Id
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Code
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Fecha
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Ultima conexión
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Email
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Country
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Points
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Número de retiros
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Ads
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Video Ads
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium ">
                            Estado
                        </th>
                    </tr>
                </thead>
                {users?.map((user) => (
                    <tbody className="bg-white">
                        <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <div className="flex items-center gap-3">
                                    {user.userId}
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                               {user. code}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {user.fecha}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {user.lastDate}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {user.email}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {user.country}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {user.points}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {user.numberW}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {user.ads}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {user.videoads}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {user.userStateId}
                            </td>
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <div className="flex justify-end gap-2">
                                    <EditarUsuario id={user.userId} />
                                    <EliminarUsuario id="userId" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

