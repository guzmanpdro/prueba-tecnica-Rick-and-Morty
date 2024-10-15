import {
    TableHeader,
    TableRow,
    TableHead
} from "@/components/ui/table"
import { Headers } from "@/lib/definitions";

export default function TableHeaders({ headers }: Headers) {
    return (
        <TableHeader>
            <TableRow>
                {
                    headers.map(header => (
                        <TableHead key={header}>{header}</TableHead>
                    ))
                }
            </TableRow>
        </TableHeader>
    );
}