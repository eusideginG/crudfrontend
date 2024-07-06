import Card from "@/components/card/card";
import Table from "@/components/card/table";
import { data } from "@/../services/data";


export default function Home() {




  return (
    <main className="min-w-full flex flex-col items-center">
      <Table>
        {data.map(d => <Card key={d.Id} Form={d}/>)}
      </Table>
    </main>
  );
}
