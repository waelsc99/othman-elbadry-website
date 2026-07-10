import Image from "next/image";

type PageHeaderProps = {
  title: string;
  description: string;
  image: string;
  logo: string;
};

export default function PageHeader({
  title,
  description,
  image,
  logo,
}: PageHeaderProps) {
  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-slate-950" />

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <Image
            src={logo}
            alt={title}
            width={120}
            height={120}
            className="mx-auto mb-8"
          />

          <h1 className="mb-6 text-4xl font-black text-yellow-400 md:text-6xl">
            {title}
          </h1>

          <p className="text-lg leading-9 text-slate-200 md:text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}