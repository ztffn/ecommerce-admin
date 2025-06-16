import AdminLayout from '@/components/layouts/AdminLayout';
import AdminProductsComponent from '@/components/admin_pages/Products';

export default function ProductsPage() {
  return (
    <AdminLayout>
      <AdminProductsComponent />
    </AdminLayout>
  );
}
