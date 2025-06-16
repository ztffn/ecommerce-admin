import AdminLayout from '@/components/layouts/AdminLayout';
import AdminExperimentsComponent from '@/components/admin_pages/Experiments';

export default function ExperimentsPage() {
  return (
    <AdminLayout>
      <AdminExperimentsComponent />
    </AdminLayout>
  );
}
