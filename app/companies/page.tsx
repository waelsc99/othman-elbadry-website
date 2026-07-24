import Companies from "@/components/Companies";

export const metadata = {
  title: "مجموعة الشركات | عثمان أحمد محمد عبدالله البدري",
  description:
    "تعرف على مجموعة الشركات والمؤسسات التابعة للأستاذ عثمان أحمد محمد عبدالله البدري.",
};

export default function CompaniesPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Companies />
    </main>
  );
}