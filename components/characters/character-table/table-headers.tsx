import {
    TableHeader,
    TableRow,
    TableHead
} from "@/components/ui/table"

const headers = ['Imágen', 'Nombre', 'Especie', 'Género'];

export default function TableHeaders() {
    return (
        <TableHeader>
            <TableRow>
                {
                    headers.map(header => (
                        <TableHead>{header}</TableHead>
                    ))
                }
            </TableRow>
        </TableHeader>
    );
}