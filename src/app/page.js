"use client";
import { urlForm } from "../../services/endpoints";
import Card from "@/components/card/card";
import Table from "@/components/card/table";
import { useState, useEffect } from "react";

export default function Home() {
  const [forms, setForms] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(urlForm)
      .then((res) => res.json())
      .then((data) => {
        setForms(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <main className="min-w-full flex flex-col items-center">
      <Table>
        {forms.map((form) => {
          return <Card key={form.Id} Form={form} />;
        })}
      </Table>
    </main>
  );
}
