import { columns } from "@/components/Users/columns";
import { DataTable } from "@/components/Data-table";
import { users } from "@/lib/data";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Data table for users</h1>

      <DataTable columns={columns} data={users} />
    </div>
  );
}
