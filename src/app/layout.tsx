import { AppSidebar } from "@/components/ui/sidebar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1 p-8 ml-16">
        {children}
      </main>
    </div>
  )
}