
# Webshop Analytics Dashboard

## Project Overview

**URL**: https://lovable.dev/projects/d4e3ae88-917a-4794-a608-71b8bcff9597

A comprehensive analytics dashboard for e-commerce businesses to analyze product performance, profit margins, customer behavior, and advertising return on investment (ROAS). Built with modern web technologies to provide real-time insights and data-driven decision making.

## Technical Stack

This project is built with:
- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM v6.26.2
- **Data Visualization**: Recharts v2.12.7
- **State Management**: TanStack React Query v5.56.2
- **Form Handling**: React Hook Form v7.53.0 with Zod validation
- **Icons**: Lucide React v0.462.0
- **Mock Data**: Faker.js for realistic test data

## Application Architecture

### Landing Page (`/`)
- **Purpose**: Welcome page and entry point to the analytics dashboard
- **Features**:
  - Hero section with company branding
  - Call-to-action button directing to admin dashboard
  - Responsive design optimized for all devices

### Admin Dashboard (`/admin`)
The main analytics interface with comprehensive data analysis across multiple domains:

#### Overview (`/admin/overview`)
- **Purpose**: High-level business metrics and performance indicators
- **Key Metrics**:
  - Revenue tracking with trend analysis
  - Sales volume and conversion rates
  - New customer acquisition metrics
  - Customer returning rate percentage
- **Data Visualizations**:
  - Monthly revenue bar charts
  - KPI trend cards with sparkline charts
  - Geographic sales distribution
  - Traffic source analysis (Direct, Social, Email, Referrals)
  - Customer review sentiment analysis
  - Best-selling products table
  - Recent orders tracking
- **Data Sources**: Aggregated from orders, products, and customer databases

#### Purchase Funnels (`/admin/funnels`)
- **Purpose**: Conversion funnel analysis and drop-off identification
- **Key Features**:
  - Multi-step funnel visualization
  - Conversion rate tracking at each stage
  - Drop-off analysis and bottleneck identification
  - Micro-step detailed breakdowns
  - Session tracking and user journey mapping
- **Data Analysis**:
  - Visitor to lead conversion rates
  - Lead to customer conversion tracking
  - Cart abandonment analysis
  - Checkout completion rates

#### Return on Ad Spend (ROAS) (`/admin/roas`)
- **Purpose**: Advertising campaign performance and profitability analysis
- **Key Metrics**:
  - ROAS calculations (Revenue ÷ Ad Spend)
  - Campaign-level performance tracking
  - Platform comparison (Facebook, Instagram, TikTok, Google)
  - Break-even analysis and time-to-profitability
- **Data Visualizations**:
  - ROAS trend charts over time
  - Campaign leaderboard with profitability rankings
  - Cost vs. Revenue scatter plots
  - Break-even days analysis
- **Campaign Data Tracking**:
  - Ad spend and revenue correlation
  - Click-through rates and conversion metrics
  - Platform-specific performance analytics
  - ROI calculations and profit margins

#### Orders Management (`/admin/orders`)
- **Purpose**: Order tracking and fulfillment analytics
- **Features**:
  - Comprehensive order listing and search
  - Order status tracking and management
  - Customer order history analysis
  - Revenue attribution and reporting
- **Data Points**:
  - Order values and quantities
  - Customer information and contact details
  - Product performance per order
  - Payment and fulfillment status

#### Products Management (`/admin/products`)
- **Purpose**: Product catalog management and profitability analysis
- **Key Features**:
  - Global profit margin and discount settings
  - Individual product performance tracking
  - Stock level monitoring and alerts
  - Pricing optimization tools
- **Profit Analysis**:
  - Cost of goods sold (COGS) calculations
  - Profit margin analysis per product
  - Discount impact on profitability
  - Inventory turnover rates
- **Data Management**:
  - Product catalog with images and descriptions
  - Pricing and discount configuration
  - Stock level tracking and low-stock alerts
  - Product performance metrics

#### Customer Management (`/admin/customers`)
- **Purpose**: Customer relationship management and behavioral analysis
- **Customer Analytics**:
  - Customer lifetime value (CLV) calculations
  - Purchase frequency and recency analysis
  - Customer segmentation and cohort analysis
  - Churn rate prediction and retention metrics
- **Data Export**:
  - Customer data export functionality
  - Segmentation for targeted marketing
  - Purchase history and behavior patterns

## Data Models and Analysis

### Customer Data Structure
```typescript
type Customer = {
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
```

### Product Data Structure
```typescript
type Product = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  profitMargin: number; // percentage
  discount: number; // percentage
  stock: number;
  isActive: boolean;
};
```

### Campaign Data Structure
```typescript
type CampaignData = {
  id: string;
  name: string;
  source: 'Facebook' | 'Instagram' | 'TikTok' | 'Google';
  spend: number;
  revenue: number;
  roas: number;
  clicks: number;
  launchDate: string;
  breakEvenDays?: number;
};
```

## Key Performance Indicators (KPIs)

### Financial Metrics
- **Revenue Growth**: Month-over-month revenue tracking
- **Profit Margins**: Product-level and overall profitability
- **Average Order Value (AOV)**: Customer spending patterns
- **Customer Acquisition Cost (CAC)**: Marketing efficiency

### Marketing Metrics
- **Return on Ad Spend (ROAS)**: Campaign profitability
- **Cost Per Click (CPC)**: Advertising efficiency
- **Conversion Rates**: Marketing funnel performance
- **Customer Lifetime Value (CLV)**: Long-term customer value

### Operational Metrics
- **Inventory Turnover**: Stock efficiency
- **Order Fulfillment Rates**: Operational performance
- **Customer Satisfaction**: Review and feedback analysis
- **Churn Rate**: Customer retention metrics

## Data Visualization Features

### Chart Types
- **Bar Charts**: Revenue trends, monthly comparisons
- **Line Charts**: Time-series data, trend analysis
- **Area Charts**: Cumulative metrics, filled trend lines
- **Pie Charts**: Market share, traffic source distribution
- **Scatter Plots**: Correlation analysis, cost vs. revenue
- **Funnel Charts**: Conversion process visualization

### Interactive Elements
- **Tooltips**: Detailed data on hover
- **Responsive Design**: Charts adapt to screen size
- **Real-time Updates**: Dynamic data refresh
- **Filtering**: Date ranges and category selection

## Development Setup

### Prerequisites
- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Local Development
```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

### Code Structure
- **Components**: Reusable UI components in `/src/components`
- **Pages**: Route-specific page components in `/src/pages`
- **Data**: Mock data and type definitions in `/src/data`
- **Utilities**: Helper functions and utilities in `/src/lib`

## Deployment and Publishing

### Quick Deployment
Simply open [Lovable](https://lovable.dev/projects/d4e3ae88-917a-4794-a608-71b8bcff9597) and click on Share → Publish.

### Custom Domain Setup
Navigate to Project > Settings > Domains and click Connect Domain.
Read more: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Data Analysis Capabilities

### Revenue Analysis
- Track revenue trends across different time periods
- Analyze revenue by product categories and individual items
- Monitor seasonal patterns and growth trajectories
- Calculate profit margins and identify top-performing products

### Customer Insights
- Segment customers by purchase behavior and value
- Analyze customer lifetime value and retention rates
- Track customer acquisition channels and effectiveness
- Monitor customer satisfaction through review analysis

### Marketing Performance
- Measure ROAS across different advertising platforms
- Track campaign performance and optimize ad spend
- Analyze conversion funnels and identify improvement opportunities
- Monitor traffic sources and channel effectiveness

### Operational Intelligence
- Track inventory levels and predict stock needs
- Monitor order fulfillment and shipping performance
- Analyze product performance and identify trends
- Generate reports for business decision making

## Future Enhancements

### Planned Features
- Real-time data synchronization
- Advanced predictive analytics
- A/B testing framework
- Automated reporting and alerts
- Mobile application companion
- API integrations with e-commerce platforms

### Scalability Considerations
- Database optimization for large datasets
- Caching strategies for improved performance
- Real-time data processing capabilities
- Advanced filtering and search functionality

This analytics dashboard provides comprehensive insights for data-driven e-commerce decision making, from customer behavior analysis to advertising ROI optimization.
