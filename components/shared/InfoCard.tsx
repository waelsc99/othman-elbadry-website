import { ReactNode } from "react";

type InfoCardProps = {
  title: string;
  children: ReactNode;
};

export default function InfoCard({
  title,
  children,
}: InfoCardProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-lg transition hover:border-yellow-500/30">
      <h2 className="mb-6 text-3xl font-bold text-yellow-400">
        {title}
      </h2>

      <div className="leading-9 text-slate-300">
        {children}
      </div>
    </div>
  );
}