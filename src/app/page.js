import Card from "@/components/card/card";
import Table from "@/components/card/table";
import { data } from "@/../services/data";
import { urlForm } from "../../services/endpoints";


export default async function Home() {

  // const req = await fetch(urlForm);
  // const forms = await req.json();

  // console.log(forms);


  return (
    <main className="min-w-full flex flex-col items-center">
      <Table>
        {data.map(d => <Card key={d.Id} Form={d}/>)}
      </Table>
    </main>
  );
}
