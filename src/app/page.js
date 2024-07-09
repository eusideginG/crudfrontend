import Card from "@/components/card/card";
import Table from "@/components/card/table";
import { urlForm } from "../../services/endpoints";


export default async function Home() {

  const req = await fetch(urlForm);
  const forms = await req.json();

  return (
    <main className="min-w-full flex flex-col items-center">
      <Table>
        {forms.map(form => <Card key={form.Id} Form={form}/>)}
      </Table>
    </main>
  );
}
