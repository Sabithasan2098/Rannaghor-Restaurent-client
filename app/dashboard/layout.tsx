import DashboardNavbar from "../components/dashboard/dashboardNavbar/DashboardNavbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex md:gap-10">
      <div>
        <DashboardNavbar />{" "}
      </div>
      <div>{children}</div>
    </div>
  );
}
