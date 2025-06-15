
export type Order = {
  id: string;
  customer: { name: string; email: string; avatar: string };
  product: string;
  amount: number;
  status: "Success" | "Processing" | "Failed" | "Paid";
  date: string;
};

export const orders: Order[] = [
  { id: '#3456', customer: { name: 'Liam Johnson', email: 'liam.j@example.com', avatar: '/placeholder.svg' }, product: 'Headlight Bulb', amount: 25, status: 'Success', date: '2025-06-15' },
  { id: '#3457', customer: { name: 'Emma Williams', email: 'emma.w@example.com', avatar: '/placeholder.svg' }, product: 'Air Filter', amount: 45, status: 'Paid', date: '2025-06-15' },
  { id: '#3458', customer: { name: 'Noah Brown', email: 'noah.b@example.com', avatar: '/placeholder.svg' }, product: 'Spark Plugs', amount: 30, status: 'Processing', date: '2025-06-14' },
  { id: '#3459', customer: { name: 'Olivia Jones', email: 'olivia.j@example.com', avatar: '/placeholder.svg' }, product: 'Windshield Wipers', amount: 35, status: 'Success', date: '2025-06-14' },
  { id: '#3460', customer: { name: 'William Garcia', email: 'william.g@example.com', avatar: '/placeholder.svg' }, product: 'Brake Fluid', amount: 20, status: 'Failed', date: '2025-06-14' },
  { id: '#3461', customer: { name: 'Ava Miller', email: 'ava.m@example.com', avatar: '/placeholder.svg' }, product: 'Oil Filter', amount: 15, status: 'Paid', date: '2025-06-13' },
  { id: '#3462', customer: { name: 'James Davis', email: 'james.d@example.com', avatar: '/placeholder.svg' }, product: 'Car Battery', amount: 150, status: 'Success', date: '2025-06-13' },
  { id: '#3463', customer: { name: 'Isabella Rodriguez', email: 'isabella.r@example.com', avatar: '/placeholder.svg' }, product: 'Coolant', amount: 22, status: 'Processing', date: '2025-06-13' },
  { id: '#3464', customer: { name: 'Logan Martinez', email: 'logan.m@example.com', avatar: '/placeholder.svg' }, product: 'Tire Pressure Gauge', amount: 18, status: 'Paid', date: '2025-06-12' },
  { id: '#3465', customer: { name: 'Sophia Hernandez', email: 'sophia.h@example.com', avatar: '/placeholder.svg' }, product: 'Jumper Cables', amount: 40, status: 'Success', date: '2025-06-12' },
  { id: '#3466', customer: { name: 'Mason Lopez', email: 'mason.l@example.com', avatar: '/placeholder.svg' }, product: 'Floor Mats', amount: 60, status: 'Paid', date: '2025-06-11' },
  { id: '#3467', customer: { name: 'Mia Gonzalez', email: 'mia.g@example.com', avatar: '/placeholder.svg' }, product: 'Phone Mount', amount: 25, status: 'Success', date: '2025-06-11' },
  { id: '#3468', customer: { name: 'Ethan Wilson', email: 'ethan.w@example.com', avatar: '/placeholder.svg' }, product: 'Seat Covers', amount: 80, status: 'Processing', date: '2025-06-10' },
  { id: '#3469', customer: { name: 'Amelia Anderson', email: 'amelia.a@example.com', avatar: '/placeholder.svg' }, product: 'Steering Wheel Cover', amount: 30, status: 'Success', date: '2025-06-10' },
  { id: '#3470', customer: { name: 'Lucas Thomas', email: 'lucas.t@example.com', avatar: '/placeholder.svg' }, product: 'Car Wax', amount: 28, status: 'Paid', date: '2025-06-09' },
  { id: '#3471', customer: { name: 'Harper Taylor', email: 'harper.t@example.com', avatar: '/placeholder.svg' }, product: 'Microfiber Towels', amount: 20, status: 'Failed', date: '2025-06-09' },
  { id: '#3472', customer: { name: 'Alexander Moore', email: 'alex.m@example.com', avatar: '/placeholder.svg' }, product: 'Car Wash Soap', amount: 15, status: 'Success', date: '2025-06-08' },
  { id: '#3473', customer: { name: 'Evelyn Jackson', email: 'evelyn.j@example.com', avatar: '/placeholder.svg' }, product: 'Wheel Cleaner', amount: 18, status: 'Paid', date: '2025-06-08' },
  { id: '#3474', customer: { name: 'Michael White', email: 'michael.w@example.com', avatar: '/placeholder.svg' }, product: 'Tire Shine', amount: 16, status: 'Processing', date: '2025-06-07' },
  { id: '#3475', customer: { name: 'Abigail Harris', email: 'abigail.h@example.com', avatar: '/placeholder.svg' }, product: 'Interior Detailer', amount: 22, status: 'Success', date: '2025-06-07' },
  { id: '#3476', customer: { name: 'Daniel Martin', email: 'daniel.m@example.com', avatar: '/placeholder.svg' }, product: 'Air Freshener', amount: 5, status: 'Success', date: '2025-06-06' },
  { id: '#3477', customer: { name: 'Ella Thompson', email: 'ella.t@example.com', avatar: '/placeholder.svg' }, product: 'Car Vacuum', amount: 50, status: 'Paid', date: '2025-06-06' },
  { id: '#3478', customer: { name: 'Matthew Garcia', email: 'matthew.g@example.com', avatar: '/placeholder.svg' }, product: 'First Aid Kit', amount: 35, status: 'Processing', date: '2025-06-05' },
  { id: '#3479', customer: { name: 'Charlotte Martinez', email: 'charlotte.m@example.com', avatar: '/placeholder.svg' }, product: 'Roadside Emergency Kit', amount: 75, status: 'Success', date: '2025-06-05' },
  { id: '#3480', customer: { name: 'David Robinson', email: 'david.r@example.com', avatar: '/placeholder.svg' }, product: 'Portable Jump Starter', amount: 120, status: 'Paid', date: '2025-06-04' },
];
