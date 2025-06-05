// src/pages/ServiceDetails.jsx
import LoadingSpinner from "@/components/LoadingSpinner";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ServiceDetails() {
  const { slug } = useParams();

  console.log("Slug:", slug);

  const [service, setService] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/Data.json");
        const data = await response.json();

        const foundService = data.find((item) => item.slug === slug);
        console.log(foundService);
        setService(foundService);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadData();
  }, [slug]);

  return (
    <section>
      {service ? (
        <section>
          <header className="bg-emerald-100/50 p-10">
            <h2 className=" text-5xl font-bold text-center">{service.title}</h2>
            <p className="text-2xl text-center pt-5">
              Services / {service.title}
            </p>
          </header>

          <div className="mx-auto px-30 py-10">
            <section className="bg-white shadow-md rounded-lg w-full h-[300px] overflow-hidden flex items-center justify-center">
              <img src={service.image} alt={slug} className="object-contain" />
            </section>

            <section className="py-10 font-medium">
              <h1 className="text-4xl">Sobre {service.title}</h1>
            </section>
            <section>
              <p>{service.description}</p>
            </section>
          </div>
        </section>
      ) : (
        <section className="flex items-center justify-center h-screen">
          <LoadingSpinner />
        </section>
      )}
    </section>
  );
}
