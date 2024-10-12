import Link from "next/link";
import SidebarLogo from "../ui/sidebar-logo";
import NavLinks from "./nav-link";

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
            </nav>
        </aside>
    );
}