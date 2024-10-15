import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-full bg-zinc-800 p-6 mt-3 bg-gradient-to-b from-pink-500 to-blue-400 md:mt-0 md:grid md:place-content-center">
      <section className="flex flex-col gap-8 md:flex-row md:max-w-screen-md">
        <div className="flex flex-col items-center gap-3 md:items-start md:justify-center">
          <h1 className="text-4xl font-bold text-neutral-100 text-center md:text-start">Consulta, crea y edita personajes y episodios de Rick And Morty</h1>
          <Link
            className={`${buttonVariants()} w-1/2`}
            href="/login"
          >
            Iniciar Sesión
          </Link>
        </div>
        <Image
          src="/card-landing.webp"
          alt="Rick Sánchez"
          width={439}
          height={621}
          className="md:w-1/2"
        />
      </section>
    </div>
  );
}
