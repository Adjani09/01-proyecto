import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export function EditarUsuario({ id }: { id: string }) {
    const pathname = usePathname();
    return (
        <Link
            href={`/usuarios/${id}/editForm`}
            className="rounded-md border p-2 hover:bg-gray-100"
        >
            <PencilIcon className="w-5" />
        </Link>
    );
}

export function EliminarUsuario({ id }: { id: string }) {
    return (
        <>
            <button className="rounded-md border p-2 hover:bg-gray-100">
                <span className="sr-only">Delete</span>
                <TrashIcon className="w-5" />
            </button>
        </>
    );
}