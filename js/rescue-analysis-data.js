/*
 * AEGIS Rescue Command System - Flood Risk Analysis Dedicated Data Matrix
 * Real-time River Level Trends, GIS Spatial Extent, Rainfall Impact & 72-Hour Forecast Projections
 */

const rescueAnalysisData = {
  summaryKpis: {
    avgRainfall24h: "248.6 mm",
    avgRainfallChange: "↑ 18% vs yesterday",
    maxRiverLevel: "18.35 m",
    maxRiverChange: "↑ 0.85 m in 6 hrs",
    affectedDistricts: "17 / 33",
    affectedDistrictsChange: "↑ 5 more than yesterday",
    peopleAffected: "5.21 Lakh",
    peopleAffectedChange: "↑ 12% vs yesterday",
    activeSos: "342",
    activeSosChange: "↑ 48 in last 6 hrs",
    riskScoreAvg: "72 /100",
    riskScoreLabel: "High Risk"
  },

  // 4 Brahmaputra River Gauging Stations Telemetry (Line Graph)
  riverStations: [
    { name: "Dibrugarh", max: "18.35 m", color: "#ef4444", data: [12.5, 14.2, 15.8, 16.9, 17.5, 18.1, 18.35] },
    { name: "Tezpur", max: "15.40 m", color: "#f59e0b", data: [10.2, 11.5, 12.8, 13.6, 14.4, 15.0, 15.40] },
    { name: "Guwahati", max: "12.85 m", color: "#38bdf8", data: [7.8, 8.9, 10.1, 11.0, 11.8, 12.4, 12.85] },
    { name: "Goalpara", max: "10.25 m", color: "#10b981", data: [4.2, 5.1, 6.0, 7.2, 8.4, 9.5, 10.25] }
  ],

  // 72-Hour Rainfall vs Impact Score (Dual Bar + Line Chart)
  rainfallImpact72h: [
    { date: "9 Aug", rainfall: 85, impactScore: 35 },
    { date: "10 Aug", rainfall: 140, impactScore: 55 },
    { date: "11 Aug", rainfall: 195, impactScore: 72 },
    { date: "12 Aug", rainfall: 248, impactScore: 92 }
  ],

  // Daily District Average Rainfall Trend (Bar Chart)
  rainfallDailyTrend: [
    { day: "6 Aug", val: 95 },
    { day: "7 Aug", val: 130 },
    { day: "8 Aug", val: 175 },
    { day: "9 Aug", val: 210 },
    { day: "10 Aug", val: 220 },
    { day: "11 Aug", val: 235 },
    { day: "12 Aug", val: 248.6 }
  ],

  // Flood Impact Over Time (Dual Line Graph)
  impactOverTime: [
    { date: "6 Aug", peopleLakhs: 0.8, sosCount: 45 },
    { date: "7 Aug", peopleLakhs: 1.5, sosCount: 92 },
    { date: "8 Aug", peopleLakhs: 2.1, sosCount: 145 },
    { date: "9 Aug", peopleLakhs: 3.2, sosCount: 210 },
    { date: "10 Aug", peopleLakhs: 4.0, sosCount: 265 },
    { date: "11 Aug", peopleLakhs: 4.7, sosCount: 305 },
    { date: "12 Aug", peopleLakhs: 5.21, sosCount: 342 }
  ],

  // District Risk Level Matrix
  districtRiskLevels: [
    { district: "Golaghat", score: 92, level: "Very High", color: "#ef4444", trend: "↑" },
    { district: "Jorhat", score: 87, level: "Very High", color: "#ef4444", trend: "↑" },
    { district: "Sivasagar", score: 84, level: "High", color: "#f59e0b", trend: "↑" },
    { district: "Darrang", score: 79, level: "High", color: "#f59e0b", trend: "↑" },
    { district: "Nagaon", score: 72, level: "Moderate", color: "#eab308", trend: "↑" },
    { district: "Dibrugarh", score: 64, level: "Moderate", color: "#eab308", trend: "↑" },
    { district: "Sonitpur", score: 62, level: "Moderate", color: "#eab308", trend: "↑" },
    { district: "Barpeta", score: 48, level: "Low", color: "#10b981", trend: "—" },
    { district: "Goalpara", score: 44, level: "Low", color: "#10b981", trend: "—" },
    { district: "Kamrup (M)", score: 38, level: "Low", color: "#10b981", trend: "—" }
  ],

  // Risk Factor Breakdown (5 Gauges)
  riskFactorBreakdown: [
    { factor: "Water Level", pct: 30, impact: "High Impact", color: "#ef4444" },
    { factor: "Rainfall Intensity", pct: 25, impact: "High Impact", color: "#f59e0b" },
    { factor: "Flood Spread", pct: 20, impact: "Medium Impact", color: "#38bdf8" },
    { factor: "Population Exposure", pct: 15, impact: "Medium Impact", color: "#10b981" },
    { factor: "Shelter Occupancy", pct: 10, impact: "Low Impact", color: "#eab308" }
  ],

  // Risk Forecast 72-Hour Projections
  riskForecast72h: {
    labels: ["Now", "+24 Hours", "+48 Hours", "+72 Hours"],
    highRiskDistricts: [60, 68, 72, 78],
    moderateRiskDistricts: [25, 30, 32, 35],
    lowRiskDistricts: [10, 10, 12, 12]
  }
};

window.rescueAnalysisData = rescueAnalysisData;
