import { sanityFetch } from "@/sanity/lib/live";
import { THERAPISTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default async function EmployeePage() {
  const { data: therapists } = await sanityFetch({ query: THERAPISTS_QUERY });

  return (
    <div>
      <h1>Meet our team</h1>
      <div className="grid grid-cols-4 gap-8">
        {therapists.map((therapist) => (
          <div key={therapist._id} className="px-2 py-4 rounded-2xl bg-gray-50">
            {therapist.mainImage && (
              <Image
                src={urlFor(therapist.mainImage).url()}
                alt={therapist.name ?? ""}
                width={200}
                height={200}
                className="rounded-2xl object-cover mb-2.5"
              />
            )}
            <h2 className="text-3xl font-semibold">{therapist.name}</h2>
            {therapist.credentials && (
              <span className="text-gray-500">{therapist.credentials}</span>
            )}
            <p>{therapist.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
