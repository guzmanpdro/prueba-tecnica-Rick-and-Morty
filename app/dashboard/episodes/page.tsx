import EpisodesTable from "@/components/episodes/episodes-table";

export default function CharactersPage() {
    return (
        <section className="text-neutral-200">
            <h1 className="text-2xl mb-5">Episodios</h1>
            <EpisodesTable />
        </section>
    );
}