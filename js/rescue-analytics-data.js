/*
 * AEGIS Rescue Command System - Analytics & Reports Dedicated Data Matrix
 * Executive Performance Telemetry, 7-Day Trend Series, District Performance Ranking & AI Executive Takeaways
 */

const rescueAnalyticsData = {
  summaryKpis: {
    totalSos: "2,458",
    sosSub: "↑ 18% vs last 7 days",
    totalRescues: "1,856",
    rescuesSub: "↑ 22% vs last 7 days",
    peopleRescued: "8,542",
    peopleSub: "↑ 19% vs last 7 days",
    avgResponseTime: "18.6 min",
    responseSub: "↓ 12% vs last 7 days",
    successRate: "94.2%",
    successSub: "↑ 6% vs last 7 days",
    resourcesDeployed: "512",
    resourcesSub: "↑ 15% vs last 7 days",
    shelterOccupancy: "67.6%",
    shelterSub: "↑ 8% vs last 7 days"
  },

  // 7-Day SOS Requests Trend (Line Chart Points)
  sosRequestsTrend: [
    { day: "Aug 6", count: 236 },
    { day: "Aug 7", count: 289 },
    { day: "Aug 8", count: 312 },
    { day: "Aug 9", count: 415 },
    { day: "Aug 10", count: 392 },
    { day: "Aug 11", count: 365 },
    { day: "Aug 12", count: 449 }
  ],

  // 7-Day Response Time Trend (Line Chart Points in Minutes)
  responseTimeTrend: [
    { day: "Aug 6", val: 21.3 },
    { day: "Aug 7", val: 20.7 },
    { day: "Aug 8", val: 19.8 },
    { day: "Aug 9", val: 17.6 },
    { day: "Aug 10", val: 18.2 },
    { day: "Aug 11", val: 20.1 },
    { day: "Aug 12", val: 18.6 }
  ],

  // 7-Day Rescue Success Rate Trend (Line Chart Points in %)
  successRateTrend: [
    { day: "Aug 6", val: 88 },
    { day: "Aug 7", val: 89 },
    { day: "Aug 8", val: 90 },
    { day: "Aug 9", val: 92 },
    { day: "Aug 10", val: 93 },
    { day: "Aug 11", val: 93 },
    { day: "Aug 12", val: 94 }
  ],

  // SOS By District Donut Breakdown
  sosByDistrict: {
    total: "2,458",
    slices: [
      { district: "Golaghat", count: 492, pct: "20.0%", color: "#2563eb" },
      { district: "Jorhat", count: 389, pct: "15.8%", color: "#ef4444" },
      { district: "Darrang", count: 312, pct: "12.7%", color: "#f59e0b" },
      { district: "Nagaon", count: 286, pct: "11.6%", color: "#10b981" },
      { district: "Sivasagar", count: 247, pct: "10.0%", color: "#a78bfa" },
      { district: "Dibrugarh", count: 198, pct: "8.1%", color: "#ec4444" },
      { district: "Other Districts", count: 534, pct: "21.8%", color: "#eab308" }
    ]
  },

  // District Performance Ranking Table
  districtRanking: [
    { rank: 1, district: "Sivasagar", sos: 247, rescued: 912, responseTime: "14.2 min", success: "96.5%", badge: "🥇" },
    { rank: 2, district: "Jorhat", sos: 389, rescued: 1376, responseTime: "16.8 min", success: "95.1%", badge: "🥈" },
    { rank: 3, district: "Golaghat", sos: 492, rescued: 1682, responseTime: "17.4 min", success: "94.3%", badge: "🥉" },
    { rank: 4, district: "Darrang", sos: 312, rescued: 1086, responseTime: "18.9 min", success: "93.2%", badge: "4" },
    { rank: 5, district: "Nagaon", sos: 286, rescued: 980, responseTime: "19.6 min", success: "92.4%", badge: "5" },
    { rank: 6, district: "Dibrugarh", sos: 198, rescued: 694, responseTime: "20.3 min", success: "91.8%", badge: "6" },
    { rank: 7, district: "Lakhimpur", sos: 142, rescued: 512, responseTime: "21.7 min", success: "90.6%", badge: "7" }
  ],

  // Resource Utilization Gauge & Bars
  resourceUtilization: {
    overall: "76%",
    bars: [
      { name: "Rescue Boats", pct: 82, color: "#2563eb", icon: "fa-sailboat" },
      { name: "NDRF Teams", pct: 75, color: "#ef4444", icon: "fa-shield-halved" },
      { name: "Ambulances", pct: 71, color: "#38bdf8", icon: "fa-truck-medical" },
      { name: "Helicopters", pct: 68, color: "#a78bfa", icon: "fa-helicopter" },
      { name: "Medical Teams", pct: 80, color: "#10b981", icon: "fa-user-nurse" },
      { name: "Relief Trucks", pct: 74, color: "#eab308", icon: "fa-truck-field" },
      { name: "Shelters", pct: 77, color: "#2563eb", icon: "fa-campground" }
    ]
  },

  // Rescue Operations Summary
  operationsSummary: {
    active: 24,
    completed: 156,
    inProgress: 18,
    onHold: 8,
    cancelled: 4,
    byType: [
      { type: "Flood Rescue", active: 12, completed: 89, success: "95.7%" },
      { type: "Medical Evacuation", active: 5, completed: 32, success: "94.1%" },
      { type: "Boat Rescue", active: 8, completed: 48, success: "96.3%" },
      { type: "Helicopter Rescue", active: 3, completed: 15, success: "93.3%" },
      { type: "Relief Supply", active: 6, completed: 28, success: "91.2%" }
    ]
  },

  // Impact Overview Cards & 7-Day Trend Series
  impactOverview: {
    affectedPop: "245,630",
    popSub: "↑ 14%",
    damagedHouses: "18,746",
    housesSub: "↑ 11%",
    exposedVillages: "326",
    villagesSub: "↑ 8%",
    infraDamage: "₹ 1,245 Cr",
    infraSub: "↑ 13%",
    trendDays: ["Aug 6", "Aug 7", "Aug 8", "Aug 9", "Aug 10", "Aug 11", "Aug 12"],
    popSeries: [180000, 195000, 210000, 225000, 235000, 240000, 245630],
    houseSeries: [45000, 52000, 60000, 71000, 84000, 98000, 115000],
    villageSeries: [180, 210, 245, 270, 290, 310, 326]
  },

  // AI Insights & Key Takeaways
  aiInsights: [
    {
      title: "SOS requests increased by 18% compared to last week.",
      text: "Golaghat and Jorhat are the most affected districts.",
      icon: "fa-users-line",
      color: "#10b981"
    },
    {
      title: "Average response time improved by 12%.",
      text: "Continue optimizing resource allocation.",
      icon: "fa-stopwatch",
      color: "#38bdf8"
    },
    {
      title: "Rescue success rate is 94.2% which is above target.",
      text: "Excellent coordination between teams.",
      icon: "fa-award",
      color: "#10b981"
    },
    {
      title: "Boat and Medical resources are in high demand.",
      text: "Consider deploying more to high-risk zones.",
      icon: "fa-triangle-exclamation",
      color: "#ef4444"
    }
  ]
};

window.rescueAnalyticsData = rescueAnalyticsData;
