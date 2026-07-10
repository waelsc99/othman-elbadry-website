import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import companies from "@/data/companies";
import PageHeader from "@/components/shared/PageHeader";
import InfoCard from "@/components/shared/InfoCard";
import SectionTitle from "@/components/shared/SectionTitle";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return companies.map((company) => ({
    slug: company.slug,
  }));
}

export default async function CompanyPage({ params }: Props) {
  const { slug } = await params;

  const company = companies.find((item) => item.slug === slug);

  if (!company) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <PageHeader
        title={company.name}
        description={company.description}
        image={company.cover}
        logo={company.logo}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-20 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-slate-900 p-8 text-center border border-slate-800">

            <h3 className="mb-3 text-yellow-400 text-xl font-bold">
              سنة التأسيس
            </h3>

            <p className="text-4xl font-black">
              {company.established}
            </p>

          </div>

          <div className="rounded-3xl bg-slate-900 p-8 text-center border border-slate-800">

            <h3 className="mb-3 text-yellow-400 text-xl font-bold">
              عدد الخدمات
            </h3>

            <p className="text-4xl font-black">
              {company.services.length}
            </p>

          </div>

          <div className="rounded-3xl bg-slate-900 p-8 text-center border border-slate-800">

            <h3 className="mb-3 text-yellow-400 text-xl font-bold">
              النشاط
            </h3>

            <p className="text-lg font-semibold">
              {company.shortName}
            </p>

          </div>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          <InfoCard title="نبذة عن الشركة">

            <p>{company.fullDescription}</p>

          </InfoCard>

          <InfoCard title="الرؤية والرسالة">

            <h3 className="mb-2 font-bold text-yellow-400">
              الرؤية
            </h3>

            <p className="mb-8">
              {company.vision}
            </p>

            <h3 className="mb-2 font-bold text-yellow-400">
              الرسالة
            </h3>

            <p>
              {company.mission}
            </p>

          </InfoCard>

        </div>

        <div className="mt-24">

          <SectionTitle
            title="خدمات الشركة"
            subtitle="نقدم مجموعة متكاملة من الخدمات الاحترافية بأعلى معايير الجودة."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {company.services.map((service) => (

              <div
                key={service}
                className="rounded-2xl border border-yellow-500/20 bg-slate-900 p-6 transition hover:border-yellow-400 hover:-translate-y-1"
              >
                <div className="mb-4 text-3xl">
                  ✔
                </div>

                <h3 className="text-lg font-bold">
                  {service}
                </h3>

              </div>

            ))}

          </div>

        </div>

        <div className="mt-24 flex flex-col items-center gap-6 md:flex-row md:justify-center">

          <Link
            href="/contact"
            className="rounded-full bg-yellow-400 px-8 py-4 font-bold text-slate-950 transition hover:scale-105"
          >
            تواصل معنا
          </Link>

          <Link
            href="/companies"
            className="rounded-full border border-yellow-400 px-8 py-4 font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-slate-950"
          >
            العودة إلى الشركات
          </Link>

        </div>

      </section>

    </main>
  );
}