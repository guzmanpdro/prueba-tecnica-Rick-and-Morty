import { Table } from "@/components/ui/table";
import TableHeaders from "../table-headers";
import CharacterTableBody from "./table-body";
import responseCharacters from '@/mocks/character.json'

export default function CharacterTable() {
    const characters = responseCharacters.results
    const hasCharacters = characters?.length > 0

    const headers = ['Imágen', 'Nombre', 'Especie', 'Género'];

    return(
        <Table>
            <TableHeaders headers={headers}/>
            { 
                hasCharacters
                ? <CharacterTableBody characters={characters} />
                : <p>No hay personajes para mostrar</p>
            }
        </Table>
    );
}