import {
    TableRow,
    TableBody,
    TableCell
} from "@/components/ui/table";
import { DataEpisodes } from '@/lib/definitions'

export default function EpisodesTableBody({ episodes }: DataEpisodes) {
    return (
        <TableBody>
            {
                episodes.map(elem => {
                    const { id, name, episode, air_date } = elem
                    return (
                    <TableRow key={id}>
                        <TableCell>{id}</TableCell>
                        <TableCell>{name}</TableCell>
                        <TableCell>{episode}</TableCell>
                        <TableCell>{air_date}</TableCell>
                    </TableRow>
                    )
                })
            }
        </TableBody>
    );
}