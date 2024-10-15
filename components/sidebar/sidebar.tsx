import Link from "next/link";
import SidebarLogo from "../ui/sidebar-logo";
import NavLinks from "./nav-link";
import { signOut } from "@/auth";

export default function Sidebar() {
    return (
        <aside className="flex h-full flex-col px-3 py4 md:px-2">
            <Link
                className="mb-4 h-20 items-end justify-start rounded-md p-4 md:h-40 md:flex md:items-center md:justify-center"
                href="/"
            >
                <div className="flex justify-center">
                    <SidebarLogo />
                </div>
            </Link>
            <nav className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-gray-200 md:block"></div>
                <form
                    action={async () => {
                        'use server';
                        await signOut();
                    }}
                    >
                    <button className="w-full text-start h-[48px] rounded-md bg-neutral-200 hover:bg-neutral-300 p-3 text-sm font-medium md:p-2 md:px-3">
                        Sign Out
                    </button>
                </form>
            </nav>
        </aside>
    );
}