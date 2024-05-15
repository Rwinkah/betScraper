import { ColumnDef } from "@tanstack/react-table";
import { Switch } from "@/components/ui/switch";
import ReactCountryFlag from "react-country-flag"

export type Plugin = {
    plugName: string
    plugID: string
    plugStatus: boolean
    plugLoc: string
    plugRate: boolean
}

export const columns: ColumnDef<Plugin>[] = [
    {
        accessorKey: 'plugName', 
        header: "Plugin"
    },
    {
        accessorKey: "plugID",
        header: "Plugin ID"
    },
    {
            accessorKey: 'plugStatus',
            header: 'Status',
            cell: ({ row }) => (
                    <Switch 
                        // checked={row.original.plugStatus} 
                        // onChange={() => { row.original.plugStatus = !row.original.plugStatus} /* handle change here */}
                    />
                )
    },
    {
        accessorKey: "plugLoc",
        header: "Location",
        cell: ({ row }) => <ReactCountryFlag countryCode={row.original.plugLoc} alt="Location" /> 
    },
    {
        accessorKey: 'plugRate',
        header: 'Rate Limiting',
        cell: ({ row }) => (
            <Switch 
                // checked={row.original.plugStatus} 
                // onChange={() => { row.original.plugStatus = !row.original.plugStatus} /* handle change here */}
            />
        )
    },

]