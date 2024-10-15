import {
    TableRow,
    TableBody,
    TableCell
} from "@/components/ui/table";
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { DataCharacters } from '@/lib/definitions'

export default function CharacterTableBody({ characters }: DataCharacters) {
    return (
        <TableBody>
            {
                characters.map(character => {
                    const { id, image, name, species, gender } = character
                    return (
                    <TableRow key={id}>
                        <TableCell>
                            <Avatar>
                                <AvatarImage src={image} />
                            </Avatar>
                        </TableCell>
                        <TableCell>{name}</TableCell>
                        <TableCell>{species}</TableCell>
                        <TableCell>{gender}</TableCell>
                    </TableRow>
                    )
                })
            }
        </TableBody>
    );
}