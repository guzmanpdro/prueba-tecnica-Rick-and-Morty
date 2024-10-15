import { Table } from "@/components/ui/table";
import TableHeaders from "../table-headers";
import EpisodesTableBody from "./table-body";
import responseEpisode from '@/mocks/episode.json'

export default function EpisodesTable() {
    const episodes = responseEpisode.results
    const hasEpisodes = episodes?.length > 0

    const headers = ['ID', 'Nombre', 'Episodio', 'Fecha de emisión'];

    return(
        <Table>
            <TableHeaders headers={headers} />
            { 
                hasEpisodes
                ? <EpisodesTableBody episodes={episodes} />
                : <p>No hay episodios para mostrar</p>
            }
        </Table>
    );
}