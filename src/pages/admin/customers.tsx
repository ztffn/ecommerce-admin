import AdminLayout from '@/components/layouts/AdminLayout';
import AdminCustomersComponent from '@/components/admin_pages/Customers';

export default function CustomersPage() {
  return (
    <AdminLayout>
      <AdminCustomersComponent />
    </AdminLayout>
  );
}
