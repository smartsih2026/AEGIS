/*
 * AEGIS Rescue Command System - Citizen SOS Center Dedicated Data Matrix
 * Real-Time Emergency SOS Telemetry, Image Upload Streams, AI Severity Scoring & Response Metrics
 */

const rescueSosData = {
  summaryKpis: {
    totalRequests: "128",
    totalChange: "↑ 18 in last 1 hour",
    pending: "28",
    pendingSub: "High Priority",
    inProgress: "62",
    inProgressSub: "Rescue Assigned",
    resolved: "38",
    resolvedSub: "↑ 12 in last 3 hrs",
    peopleAffected: "1,856",
    peopleSub: "Across All Districts",
    avgResponseTime: "18.6 min",
    responseChange: "↓ 15% vs yesterday"
  },

  // 5 Detailed Live Citizen SOS Upload Requests with Images & Severity Scoring
  liveSosRequests: [
    {
      id: "SOS-1087",
      time: "10:42 AM Today",
      zone: "Zone A",
      district: "Golaghat District",
      locationName: "Kaboru Pathar, Golaghat",
      coordsText: "26.53°N, 94.01°E",
      coords: [26.5300, 94.0100],
      photo: "https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=300&q=80",
      severityScore: 92,
      severityCategory: "Critical",
      severityColor: "#ef4444",
      peopleCount: 8,
      childrenCount: 2,
      details: "Water level rising rapidly. House surrounded by water. Need immediate rescue.",
      tag: "Flooded House",
      status: "PENDING",
      statusSub: "High Priority",
      aiScoreText: "AI Score: 92/100",
      actionText: "Assign Rescue",
      actionColor: "#ef4444"
    },
    {
      id: "SOS-1086",
      time: "10:38 AM Today",
      zone: "Zone B",
      district: "Jorhat District",
      locationName: "Titabor, Jorhat",
      coordsText: "26.75°N, 94.20°E",
      coords: [26.7500, 94.2000],
      photo: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=300&q=80",
      severityScore: 85,
      severityCategory: "High",
      severityColor: "#f59e0b",
      peopleCount: 5,
      childrenCount: 1,
      details: "Elderly people trapped. Need boat and medical help. No food and clean water.",
      tag: "Elderly & Medical",
      status: "IN PROGRESS",
      statusSub: "Rescue Team On Way",
      aiScoreText: "AI Score: 85/100",
      actionText: "Track Rescue",
      actionColor: "#f59e0b"
    },
    {
      id: "SOS-1085",
      time: "10:31 AM Today",
      zone: "Zone A",
      district: "Darrang District",
      locationName: "Mangaldoi, Darrang",
      coordsText: "26.41°N, 92.01°E",
      coords: [26.4100, 92.0100],
      photo: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=300&q=80",
      severityScore: 78,
      severityCategory: "High",
      severityColor: "#f59e0b",
      peopleCount: 12,
      childrenCount: 3,
      details: "Water entered home. 12 people including 3 kids. Need evacuation.",
      tag: "Evacuation",
      status: "PENDING",
      statusSub: "High Priority",
      aiScoreText: "AI Score: 78/100",
      actionText: "Assign Rescue",
      actionColor: "#ef4444"
    },
    {
      id: "SOS-1084",
      time: "10:27 AM Today",
      zone: "Zone C",
      district: "Sivasagar District",
      locationName: "Nazira, Sivasagar",
      coordsText: "26.98°N, 94.64°E",
      coords: [26.9800, 94.6400],
      photo: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=300&q=80",
      severityScore: 65,
      severityCategory: "Moderate",
      severityColor: "#eab308",
      peopleCount: 3,
      childrenCount: 0,
      details: "Road washed away. Stranded on other side. Need boat/transport.",
      tag: "Stranded",
      status: "IN PROGRESS",
      statusSub: "Rescue Team On Way",
      aiScoreText: "AI Score: 65/100",
      actionText: "Track Rescue",
      actionColor: "#eab308"
    },
    {
      id: "SOS-1083",
      time: "10:20 AM Today",
      zone: "Zone B",
      district: "Nagaon District",
      locationName: "Raha, Nagaon",
      coordsText: "26.35°N, 92.68°E",
      coords: [26.3500, 92.6800],
      photo: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=300&q=80",
      severityScore: 48,
      severityCategory: "Low",
      severityColor: "#10b981",
      peopleCount: 4,
      childrenCount: 1,
      details: "Low lying area flooded. Requesting food & water. Situation stable.",
      tag: "Relief Request",
      status: "PENDING",
      statusSub: "Normal Priority",
      aiScoreText: "AI Score: 48/100",
      actionText: "Assign Relief",
      actionColor: "#10b981"
    }
  ],

  // All 21 Assam District SOS Map Pins & Clusters
  districtSosPins: [
    { district: "Golaghat", sosCount: 12, coords: [26.5167, 93.9667], color: "#ef4444", severity: "Critical (90-100)" },
    { district: "Jorhat", sosCount: 7, coords: [26.7578, 94.2080], color: "#f59e0b", severity: "High (70-89)" },
    { district: "Sivasagar", sosCount: 6, coords: [26.9826, 94.6425], color: "#f59e0b", severity: "High (70-89)" },
    { district: "Darrang", sosCount: 5, coords: [26.4497, 92.0294], color: "#f59e0b", severity: "High (70-89)" },
    { district: "Nagaon", sosCount: 3, coords: [26.3471, 92.6841], color: "#eab308", severity: "Moderate (40-69)" },
    { district: "Goalpara", sosCount: 2, coords: [26.1754, 90.6267], color: "#10b981", severity: "Low (0-39)" },
    { district: "Lakhimpur", sosCount: 8, coords: [27.2374, 94.0954], color: "#ef4444", severity: "Critical (90-100)" },
    { district: "Dhemaji", sosCount: 9, coords: [27.4844, 94.5949], color: "#ef4444", severity: "Critical (90-100)" },
    { district: "Dibrugarh", sosCount: 11, coords: [27.4845, 94.9019], color: "#ef4444", severity: "Critical (90-100)" },
    { district: "Tinsukia", sosCount: 5, coords: [27.4922, 95.3558], color: "#f59e0b", severity: "High (70-89)" },
    { district: "Morigaon", sosCount: 4, coords: [26.2573, 92.3377], color: "#f59e0b", severity: "High (70-89)" },
    { district: "Sonitpur", sosCount: 4, coords: [26.6338, 92.8000], color: "#eab308", severity: "Moderate (40-69)" },
    { district: "Kamrup (M)", sosCount: 6, coords: [26.1445, 91.7362], color: "#eab308", severity: "Moderate (40-69)" },
    { district: "Barpeta", sosCount: 5, coords: [26.3184, 90.9818], color: "#eab308", severity: "Moderate (40-69)" },
    { district: "Dhubri", sosCount: 7, coords: [26.0190, 89.9911], color: "#f59e0b", severity: "High (70-89)" },
    { district: "East Karbi Anglong", sosCount: 3, coords: [25.8450, 93.4350], color: "#10b981", severity: "Low (0-39)" },
    { district: "Dima Hasao", sosCount: 4, coords: [25.1764, 93.0159], color: "#eab308", severity: "Moderate (40-69)" },
    { district: "Cachar", sosCount: 8, coords: [24.8333, 92.7789], color: "#ef4444", severity: "Critical (90-100)" },
    { district: "Hailakandi", sosCount: 4, coords: [24.6885, 92.5738], color: "#f59e0b", severity: "High (70-89)" },
    { district: "Karimganj", sosCount: 5, coords: [24.8690, 92.3590], color: "#f59e0b", severity: "High (70-89)" }
  ],

  // AI Recommendation Engine
  aiRecommendations: {
    summary: "Golaghat and Jorhat districts have highest severity SOS requests. Immediate deployment of boats and medical teams recommended.",
    actions: [
      { action: "Deploy 2 Rescue Boats", target: "To Golaghat (Zone A)", priority: "High Priority", color: "#10b981" },
      { action: "Deploy 1 Medical Team", target: "To Jorhat (Zone B)", priority: "High Priority", color: "#10b981" },
      { action: "Deploy Relief Supplies", target: "To Darrang (Zone A)", priority: "Medium Priority", color: "#eab308" },
      { action: "Monitor Low Risk Areas", target: "Nagaon, Sivasagar", priority: "Low Priority", color: "#10b981" }
    ]
  },

  // 24-Hour SOS Request Volume Trend (Line Curve Data)
  trend24h: [
    { time: "10 AM", count: 12 },
    { time: "2 PM", count: 22 },
    { time: "6 PM", count: 18 },
    { time: "10 PM", count: 25 },
    { time: "2 AM", count: 30 },
    { time: "6 AM", count: 26 },
    { time: "10 AM", count: 28 }
  ],

  // SOS Severity Donut Breakdown
  severityDonut: {
    total: 128,
    critical: { count: 28, pct: "21.9%", color: "#ef4444" },
    high: { count: 56, pct: "43.8%", color: "#f59e0b" },
    moderate: { count: 32, pct: "25.0%", color: "#eab308" },
    low: { count: 12, pct: "9.3%", color: "#10b981" }
  },

  // Response Performance Metrics
  performance: {
    avgResponseTime: "18.6 min",
    timeChange: "↓ 15%",
    resolvedPct: "92%",
    resolvedChange: "↑ 8%",
    satisfactionScore: "4.8 / 5",
    satisfactionChange: "↑ 0.6"
  },

  // Recent Resolved SOS History
  recentResolved: [
    { id: "SOS-1081", district: "Sivasagar District", time: "09:58 AM" },
    { id: "SOS-1080", district: "Dibrugarh District", time: "09:45 AM" },
    { id: "SOS-1079", district: "Morigaon District", time: "09:32 AM" },
    { id: "SOS-1078", district: "Tinsukia District", time: "09:21 AM" }
  ]
};

window.rescueSosData = rescueSosData;
