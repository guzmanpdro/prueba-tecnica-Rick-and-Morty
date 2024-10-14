import {
    TableRow,
    TableBody,
    TableCell
} from "@/components/ui/table";
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Characters } from '@/lib/definitions'

export default function CharacterTableBody({ characters }: Characters) {
    return (
        <TableBody>
            {
                characters.map(character => {
                    const { image, name, species, gender } = character
                    return (
                    <TableRow>
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