import {
    TableHeader,
    TableRow,
    TableHead
} from "@/components/ui/table"

export default function TableHeaders({ headers }: any) {
    return (
        <TableHeader>
            <TableRow>
                {
                    headers.map((header: any) => (
                        <TableHead key={header}>{header}</TableHead>
                    ))
                }
            </TableRow>
        </TableHeader>
    );
}