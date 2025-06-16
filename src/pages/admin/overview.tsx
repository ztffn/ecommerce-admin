import AdminLayout from '@/components/layouts/AdminLayout';
import AdminOverviewComponent from '@/components/admin_pages/Overview';

export default function OverviewPage() {
  return (
    <AdminLayout>
      <AdminOverviewComponent />
    </AdminLayout>
  );
}
