import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section id="hero" className="bg-gray-50">
        <div className="mx-auto max-w-7xl grid grid-cols-2 items-center gap-8 px-4 py-16">
          <div>
            <div>
              <h1 className="text-gray-700 text-4xl font-bold mb-4">
                Solutions without side effects.
              </h1>
              <p className="text-gray-700 text-sm mb-6 max-w-md">
                All of our journeys are unique. It is important that each
                individual finds a path to wellness that is comfortable for you!
              </p>
              <h3 className="text-gray-700 text-3xl font-semibold mb-4">
                Safe. Caring. Respect
              </h3>
            </div>
            <Link href="/contact">
              <button
                type="button"
                className="bg-purple-500 text-white font-semibold py-2 px-4 rounded"
              >
                Contact us today
              </button>
            </Link>
          </div>
          <div className="relative h-96 rounded-3xl overflow-hidden">
            <Image
              src="/stockPhotos/male_counselor.jpg"
              alt="Male Counselor speaking with a client"
              fill
            />
          </div>
        </div>
      </section>
    </div>
  );
}
