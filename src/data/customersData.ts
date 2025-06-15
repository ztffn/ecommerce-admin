
import { faker } from '@faker-js/faker';

export type Customer = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  joinDate: string;
  totalOrders: number;
  totalSpent: number;
  lastOrderDate: string;
  status: "Active" | "Inactive";
};

export const customersData: Customer[] = Array.from({ length: 50 }, (_, i) => {
    const joinDate = faker.date.past({ years: 2 });
    const lastOrderDate = faker.date.between({ from: joinDate, to: new Date() });
    return {
        id: `CUST-${String(i + 1).padStart(3, '0')}`,
        name: faker.person.fullName(),
        email: faker.internet.email().toLowerCase(),
        avatarUrl: `/placeholder.svg`,
        joinDate: joinDate.toISOString(),
        totalOrders: faker.number.int({ min: 1, max: 50 }),
        totalSpent: faker.number.float({ min: 20, max: 5000, fractionDigits: 2 }),
        lastOrderDate: lastOrderDate.toISOString(),
        status: faker.helpers.arrayElement(["Active", "Inactive"]),
    };
});
