import Card from "@/components/card/card";
import Table from "@/components/card/table";
import { Suspense } from "react";
import { get } from "@/actions/get";

export default async function Home() {
  const forms = await get();
  console.log("forms: ", forms);

  return (
    <main className="min-w-full flex flex-col items-center">
      <Table>
        {forms.map((form) => {
          return (
            <Suspense key={form.Id} fallback={<p>Loading card...</p>}>
              <Card Form={form} />
            </Suspense>
          );
        })}
      </Table>
    </main>
  );
}
