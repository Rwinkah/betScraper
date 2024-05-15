import { DataTable } from "./payments/data-table"
import {columns, Plugin} from './payments/columns'



 const plugins: Plugin[] = [
  {
    plugID: "728ed52f",
    plugName: 'Betway',
    plugStatus: false,
    plugLoc: "ZA",
    plugRate: false,
  },
  {
    plugID: "489e1d42",
    plugName: 'SportyBet',
    plugStatus: false,
    plugLoc: "NG",
    plugRate: false,
  },
  {
    plugID: "091r7c01",
    plugName: 'KenyaBet',
    plugStatus: false,
    plugLoc: "KE",
    plugRate: false,
  },
  // ...
]


function App() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={plugins}/>
    </div>
  )
}

export default App
