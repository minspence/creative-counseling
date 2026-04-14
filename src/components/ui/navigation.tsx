"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navList = [
  { name: "Home", href: "/" },
  { name: "Our Team", href: "/employee" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  if (pathname.startsWith("/studio")) return null;

  return (
    <div className="flex items-center justify-between p-4 bg-gray-100">
      <div>
        <Image src="/logo.png" alt="Logo" width={350} height={75} />
      </div>
      <nav className="text-black font-semibold">
        <ul className="flex items-center gap-6">
          {navList.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={
                  pathname === item.href ? "bg-gray-300 py-2 px-4 rounded" : ""
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
