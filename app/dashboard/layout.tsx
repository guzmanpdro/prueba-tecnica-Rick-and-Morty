import Sidebar from "../../components/sidebar/sidebar"

export default function AppLayout({ children, }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <Sidebar />
            </div>
            <main className="bg-neutral-800 flex-grow p-6 md:overflow-y-auto md:p-12">{children}</main>
        </div>
    )
}