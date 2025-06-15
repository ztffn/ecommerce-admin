
# Webshop Analytics Dashboard

## Project Overview

**URL**: https://lovable.dev/projects/d4e3ae88-917a-4794-a608-71b8bcff9597

A comprehensive analytics dashboard for e-commerce businesses featuring real-time insights, profit analysis, and an integrated A/B testing framework. Built with React, TypeScript, and modern web technologies.

## Quick Start

```sh
# Clone and setup
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm i
npm run dev
```

## Technical Stack

- **Frontend**: React 18.3.1, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Routing**: React Router DOM v6.26.2
- **Charts**: Recharts v2.12.7
- **State Management**: TanStack React Query v5.56.2
- **Forms**: React Hook Form v7.53.0 with Zod validation
- **Icons**: Lucide React v0.462.0
- **Mock Data**: Faker.js

## Application Structure

### Pages & Routes

#### Landing Page (`/`)
- Hero section with company branding
- A/B tested CTA button (integrated experiment)
- Conversion tracking for CTA interactions

#### Admin Dashboard (`/admin`)
Core analytics interface with multiple sections:

- **Overview** (`/admin/overview`): Revenue trends, KPIs, traffic sources
- **Funnels** (`/admin/funnels`): Conversion funnel analysis and drop-off tracking
- **ROAS** (`/admin/roas`): Ad campaign performance and profitability analysis
- **Orders** (`/admin/orders`): Order management and fulfillment tracking
- **Products** (`/admin/products`): Product catalog and profit margin analysis
- **Customers** (`/admin/customers`): Customer analytics and relationship management
- **Experiments** (`/admin/experiments`): A/B test management dashboard

### Key Features

#### Analytics Capabilities
- Revenue tracking and profit margin analysis
- Customer lifetime value (CLV) and churn analysis
- ROAS calculations across advertising platforms
- Purchase funnel optimization
- Inventory and product performance tracking

#### A/B Testing Framework
- Client-side experiment assignment with localStorage persistence
- Real-time conversion tracking
- Admin interface for experiment management
- Type-safe API with full TypeScript support

## A/B Testing Integration

### Basic Usage
```tsx
import { useExperiment } from '@/hooks/useExperiment';

function MyComponent() {
  const experiment = useExperiment('button-color-test', 'click');
  
  const buttonColor = experiment.variant === 'red' 
    ? 'bg-red-500' 
    : 'bg-blue-500';
  
  return (
    <button 
      className={buttonColor}
      onClick={() => experiment.trackConversion()}
    >
      Click me
    </button>
  );
}
```

### Adding New Experiments
Edit `src/data/experimentsData.ts`:
```typescript
{
  id: 'my-experiment',
  name: 'My Experiment',
  description: 'Testing X vs Y',
  status: 'active',
  variants: [
    { id: 'control', name: 'Original', weight: 50, config: {} },
    { id: 'variant-a', name: 'New Version', weight: 50, config: {} }
  ],
  metrics: { primary: 'conversion' }
}
```

### Current Active Experiments
- **Landing CTA Button**: Tests button colors and text variations
- **Admin Navigation**: Tests sidebar layout preferences
- **Chart Visualizations**: Tests different chart types for data display

## Data Models

### Core Types
```typescript
// Customer data structure
type Customer = {
  id: string;
  name: string;
  email: string;
  totalOrders: number;
  totalSpent: number;
  status: "Active" | "Inactive";
};

// Product data structure
type Product = {
  id: string;
  name: string;
  price: number;
  profitMargin: number;
  stock: number;
  isActive: boolean;
};

// Campaign performance data
type CampaignData = {
  id: string;
  name: string;
  source: 'Facebook' | 'Instagram' | 'TikTok' | 'Google';
  spend: number;
  revenue: number;
  roas: number;
};
```

## Key Performance Indicators

### Financial Metrics
- Revenue Growth, Profit Margins, AOV, CAC

### Marketing Metrics
- ROAS, CPC, Conversion Rates, CLV

### Operational Metrics
- Inventory Turnover, Fulfillment Rates, Customer Satisfaction

### A/B Testing Metrics
- Conversion Rate Lift, Statistical Significance, Revenue Impact

## Development Guidelines

### Component Architecture
- Small, focused components (< 50 lines preferred)
- Create new files for each component/hook
- Use TypeScript for all new code
- Follow existing naming conventions

### Styling
- Use Tailwind CSS exclusively
- Leverage shadcn/ui components
- Ensure responsive design
- Maintain consistent spacing and colors

### Data Management
- Use TanStack Query for API calls (object format)
- Mock data with Faker.js for development
- Type all data structures
- Use localStorage for experiment persistence

## Deployment

### Quick Deploy
1. Open [Lovable Project](https://lovable.dev/projects/d4e3ae88-917a-4794-a608-71b8bcff9597)
2. Click Share → Publish

### Custom Domain
Navigate to Project > Settings > Domains

## File Structure Overview

```
src/
├── components/
│   ├── admin/          # Dashboard components
│   └── ui/             # shadcn/ui components
├── contexts/           # React contexts (ExperimentContext)
├── data/              # Mock data and experiment configs
├── hooks/             # Custom hooks (useExperiment)
├── pages/             # Route components
├── types/             # TypeScript definitions
└── lib/               # Utilities
```

## Important Notes for Handover

### Critical Files
- `src/contexts/ExperimentContext.tsx` - A/B testing core logic
- `src/data/experimentsData.ts` - Experiment configurations
- `src/hooks/useExperiment.ts` - Main A/B testing hook
- `src/components/admin/ExperimentManager.tsx` - Admin interface

### Data Sources
- All data is currently mocked with Faker.js
- Experiment results stored in localStorage
- Ready for backend integration

### Extension Points
- Replace mock data with real API calls
- Add server-side experiment assignment
- Integrate with external analytics platforms
- Add automated experiment lifecycle management

### Dependencies Management
- Use `<lov-add-dependency>` and `<lov-remove-dependency>` commands
- All packages are managed through Lovable interface
- See current dependencies in package.json

## Next Steps for New Developer

1. **Familiarize** with the A/B testing framework by reviewing active experiments
2. **Explore** the admin dashboard to understand data relationships
3. **Test** experiment assignment by visiting different pages
4. **Review** mock data structures in `/src/data/` folder
5. **Consider** replacing mock data with real backend integration

This dashboard provides a solid foundation for e-commerce analytics with built-in optimization capabilities through A/B testing.
