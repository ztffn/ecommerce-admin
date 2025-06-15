
export type CampaignData = {
  id: string;
  name: string;
  source: 'Meta' | 'TikTok' | 'Google';
  spend: number;
  revenue: number;
  roas: number;
  clicks: number;
  launchDate: string; // "YYYY-MM-DD"
  breakEvenDays?: number;
};

export type DailyRoasData = {
    date: string;
    Meta?: number;
    TikTok?: number;
    Google?: number;
}

export const campaigns: CampaignData[] = [
  { id: 'cam1', name: 'Summer Sale 2025', source: 'Meta', spend: 5000, revenue: 15000, roas: 3, clicks: 1200, launchDate: '2025-05-01', breakEvenDays: 5 },
  { id: 'cam2', name: 'New Product Launch', source: 'TikTok', spend: 8000, revenue: 12000, roas: 1.5, clicks: 2500, launchDate: '2025-05-10', breakEvenDays: 12 },
  { id: 'cam3', name: 'Brand Awareness Q2', source: 'Google', spend: 3000, revenue: 2500, roas: 0.83, clicks: 500, launchDate: '2025-04-20' },
  { id: 'cam4', name: 'Holiday Special', source: 'Meta', spend: 12000, revenue: 40000, roas: 3.33, clicks: 3000, launchDate: '2025-05-15', breakEvenDays: 3 },
  { id: 'cam5', name: 'Influencer Collab', source: 'TikTok', spend: 10000, revenue: 9000, roas: 0.9, clicks: 4000, launchDate: '2025-05-20' },
  { id: 'cam6', name: 'Search Ads - Core', source: 'Google', spend: 6000, revenue: 18000, roas: 3, clicks: 1500, launchDate: '2025-04-01', breakEvenDays: 8 },
];

const today = new Date('2025-06-15');
export const dailyRoas: DailyRoasData[] = Array.from({ length: 30 }, (_, i) => {
    const date = new Date(today);
    date.setDate(date.getDate() - 29 + i);
    return {
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        Meta: Number((Math.random() * 2 + 1.5).toFixed(2)),
        TikTok: Number((Math.random() * 1.5 + 0.5).toFixed(2)),
        Google: Number((Math.random() * 2.5 + 1).toFixed(2)),
    };
});
