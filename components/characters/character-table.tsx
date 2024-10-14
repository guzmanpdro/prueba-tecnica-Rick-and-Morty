import { Table } from "@/components/ui/table";
import TableHeaders from "./character-table/table-headers";
import CharacterTableBody from "./character-table/table-body";
import responseCharacters from '@/mocks/character.json'

export default function CharacterTable() {
    const characters = responseCharacters.results
    const hasCharacters = characters?.length > 0
    return(
        <Table>
            <TableHeaders />
            <CharacterTableBody characters={characters} />
        </Table>
    );
}