import { useState } from 'react';
import { getStats, getMonthlyRevenue, getMonthlyMembers } from '../adminData';

export function useAdminDashboardState() {
  const [stats] = useState(() => getStats());
  const [revenueData] = useState(() => getMonthlyRevenue());
  const [memberData] = useState(() => getMonthlyMembers());

  return { stats, revenueData, memberData };
}
