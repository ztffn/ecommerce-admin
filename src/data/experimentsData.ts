
import { Experiment } from '@/types/experiments';

export const experimentsData: Experiment[] = [
  {
    id: 'landing-cta-button',
    name: 'Landing Page CTA Button Test',
    description: 'Testing different CTA button colors and text on the landing page',
    status: 'active',
    startDate: '2024-01-15',
    variants: [
      {
        id: 'control',
        name: 'Original Button',
        weight: 50,
        config: {
          buttonText: 'Go to Dashboard',
          buttonClass: 'bg-primary text-primary-foreground hover:bg-primary/90'
        }
      },
      {
        id: 'green-urgent',
        name: 'Green Urgent Button',
        weight: 25,
        config: {
          buttonText: 'Start Analyzing Now →',
          buttonClass: 'bg-green-600 text-white hover:bg-green-700'
        }
      },
      {
        id: 'orange-action',
        name: 'Orange Action Button',
        weight: 25,
        config: {
          buttonText: 'View My Analytics',
          buttonClass: 'bg-orange-500 text-white hover:bg-orange-600'
        }
      }
    ],
    metrics: {
      primary: 'cta_click',
      secondary: ['page_engagement_time', 'dashboard_visit']
    }
  },
  {
    id: 'admin-nav-layout',
    name: 'Admin Navigation Layout',
    description: 'Testing expanded vs collapsed sidebar navigation',
    status: 'active',
    variants: [
      {
        id: 'control',
        name: 'Collapsed Sidebar',
        weight: 50,
        config: {
          sidebarExpanded: false
        }
      },
      {
        id: 'expanded',
        name: 'Expanded Sidebar',
        weight: 50,
        config: {
          sidebarExpanded: true
        }
      }
    ],
    metrics: {
      primary: 'navigation_efficiency',
      secondary: ['page_views_per_session', 'session_duration']
    }
  },
  {
    id: 'overview-chart-type',
    name: 'Overview Chart Visualization',
    description: 'Testing different chart types for revenue overview',
    status: 'draft',
    variants: [
      {
        id: 'control',
        name: 'Bar Chart',
        weight: 50,
        config: {
          chartType: 'bar'
        }
      },
      {
        id: 'line-chart',
        name: 'Line Chart',
        weight: 50,
        config: {
          chartType: 'line'
        }
      }
    ],
    metrics: {
      primary: 'chart_interaction',
      secondary: ['time_on_overview_page']
    }
  }
];
