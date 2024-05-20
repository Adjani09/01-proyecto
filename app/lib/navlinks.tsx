'use client'

import { HomeIcon, 
    BuildingOffice2Icon, 
    UsersIcon,
    ArrowRightStartOnRectangleIcon,
    LockClosedIcon,
    InformationCircleIcon,
    ChartBarIcon,
    EnvelopeIcon,
    ClipboardDocumentListIcon  } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from "clsx";


const links = [
    { name: 'Home', href: '/home', icon: HomeIcon },
    { name: 'Administracion', href: '/administracion', icon: BuildingOffice2Icon },
    { name: 'Usuarios', href: '/usuarios', icon: UsersIcon },
    { name: 'Retiros', href: '/retiros', icon: ArrowRightStartOnRectangleIcon },
    { name: 'Bloqueos', href: '/bloqueos', icon: LockClosedIcon },
    { name: 'Codigos Promocionales', href: '/codigos_promocionales', icon: InformationCircleIcon },
    { name: 'Reporte Diario', href: '/reporte_diario', icon: ChartBarIcon },
    { name: 'Mensajes', href: '/mensajes', icon: EnvelopeIcon },
    { name: 'Registros', href: '/registros', icon: ClipboardDocumentListIcon },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx('flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                            { 'bg-sky-100 text-blue-600': pathname === link.href, },)}>
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}