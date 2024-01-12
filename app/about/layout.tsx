import PageLayout from "@/components/page-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout title="kiyoon Jung" description="안녕하세요.">
      {children}
    </PageLayout>
  );
}
