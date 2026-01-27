import AppLayout from "@/components/layout/AppLayout";
import PropertyContent from "@/components/PropertyContent";
import Link from "next/link";

export default function Home() {
  return (
    <AppLayout>
      <div className="col-span-full pb-4 flex justify-end">
        <Link
          href="/builder"
          className="py-2 px-4 bg-primary rounded-full text-center text-surface font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Create My Site
        </Link>
      </div>

      <PropertyContent />
    </AppLayout>
  );
}
