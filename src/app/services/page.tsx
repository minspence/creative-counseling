import { sanityFetch } from "@/sanity/lib/live";
import { SERVICES_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";

export default async function ServicesPage() {
  const { data: services } = await sanityFetch({ query: SERVICES_QUERY });

  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Services</h1>
      <ul className="grid grid-cols-3 gap-8">
        {services.map((service) => (
          <li key={service._id}>
            <Link href={`/services/${service.slug?.current}`}>
              <h2>{service.title}</h2>
            </Link>
            <p>{service.shortDescription}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
