import { sanityFetch } from "@/sanity/lib/live";
import { THERAPIST_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import { components } from "@/sanity/portableTextComponents";

export default async function EmployeePage({
  params,
}: {
  params: Promise<{ employee: string }>;
}) {
  const { employee: slug } = await params;
  const { data: therapist } = await sanityFetch({
    query: THERAPIST_QUERY,
    params: { slug },
  });

  if (!therapist) notFound();

  return (
    <div>
      {therapist.mainImage && (
        <Image
          src={urlFor(therapist.mainImage).url()}
          alt={therapist.name ?? ""}
          width={200}
          height={200}
          className="rounded-2xl object-cover mb-2.5"
        />
      )}
      <h1>{therapist?.name}</h1>
      {therapist?.credentials && (
        <span className="text-gray-500">{therapist.credentials}</span>
      )}
      <p>{therapist?.role}</p>
      {therapist?.bio ? (
        <div className="prose">
          <PortableText value={therapist.bio} components={components} />
        </div>
      ) : null}
    </div>
  );
}
