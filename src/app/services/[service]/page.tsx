import { sanityFetch } from "@/sanity/lib/live";
import { SERVICE_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import { components } from "@/sanity/portableTextComponents";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: slug } = await params;
  const { data: service } = await sanityFetch({
    query: SERVICE_QUERY,
    params: { slug },
  });

  if (!service) notFound();

  return (
    <div>
      <h1>{service.title}</h1>
      {service?.description ? (
        <div className="prose">
          <PortableText value={service.description} components={components} />
        </div>
      ) : null}
    </div>
  );
}
