import AdminLayout from '@/components/layouts/AdminLayout';
import AdminOrdersComponent from '@/components/admin_pages/Orders';

export default function OrdersPage() {
  return (
    <AdminLayout>
      <AdminOrdersComponent />
    </AdminLayout>
  );
}
