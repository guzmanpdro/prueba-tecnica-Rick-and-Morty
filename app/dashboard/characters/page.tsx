import CharacterTable from "@/components/characters/character-table";

export default function CharactersPage() {
    return (
        <section className="text-neutral-200">
            <h1 className="text-2xl mb-5">Personajes</h1>
            <CharacterTable />
        </section>
    );
}