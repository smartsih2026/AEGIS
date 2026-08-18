/*
 * AEGIS Rescue Command System - Impact Assessment Dedicated Data Matrix
 * Total Damage Breakdown, Population Displacement Timeline, Sectoral Damage & 72h Impact Forecast
 */

const rescueImpactData = {
  summaryKpis: {
    totalAffectedPopulation: "8.75 Lakh",
    totalAffectedChange: "↑ 18% vs yesterday",
    affectedFamilies: "1.68 Lakh",
    familiesChange: "↑ 16% vs yesterday",
    exposedVillages: "2,347",
    villagesChange: "↑ 14% vs yesterday",
    damagedHouses: "18,542",
    housesChange: "↑ 22% vs yesterday",
    infrastructureDamage: "₹ 1,256 Cr",
    infraChange: "↑ 19% vs yesterday",
    displacedPeople: "2.95 Lakh",
    displacedChange: "↑ 17% vs yesterday",
    fatalities: "32",
    fatalitiesChange: "↑ 6 vs yesterday",
    livestockAffected: "12,845",
    livestockChange: "↑ 21% vs yesterday"
  },

  // Population Trend Timeline (Multi-Line Graph)
  populationTrend: [
    { date: "6 Aug", affected: 2.1, displaced: 0.5 },
    { date: "7 Aug", affected: 3.8, displaced: 0.9 },
    { date: "8 Aug", affected: 5.2, displaced: 1.4 },
    { date: "9 Aug", affected: 6.4, displaced: 1.9 },
    { date: "10 Aug", affected: 7.1, displaced: 2.2 },
    { date: "11 Aug", affected: 7.9, displaced: 2.6 },
    { date: "12 Aug", affected: 8.75, displaced: 2.95 }
  ],

  // Zone-Wise Impact Summary Table
  zoneWiseSummary: [
    { zone: "Upper Assam", affectedPop: "3.12 Lakh", villagesExposed: 876, damageCr: 512, level: "Severe", color: "#ef4444" },
    { zone: "Central Assam", affectedPop: "2.45 Lakh", villagesExposed: 643, damageCr: 318, level: "High", color: "#f59e0b" },
    { zone: "Lower & North Assam", affectedPop: "2.28 Lakh", villagesExposed: 612, damageCr: 286, level: "High", color: "#f59e0b" },
    { zone: "Barak Valley", affectedPop: "0.90 Lakh", villagesExposed: 216, damageCr: 140, level: "Moderate", color: "#eab308" }
  ],

  // Sectoral Impact Breakdown
  sectoralImpact: [
    { sector: "Housing", level: "Severe", color: "#ef4444", details: "18,542 houses damaged" },
    { sector: "Roads & Bridges", level: "High", color: "#f59e0b", details: "245 roads, 37 bridges damaged" },
    { sector: "Agriculture", level: "High", color: "#f59e0b", details: "45,230 Ha crop area affected" },
    { sector: "Education", level: "Moderate", color: "#eab308", details: "312 schools affected" },
    { sector: "Health", level: "Moderate", color: "#eab308", details: "28 health facilities affected" },
    { sector: "Power Supply", level: "Low", color: "#10b981", details: "52 power structures damaged" },
    { sector: "Water Supply", level: "Moderate", color: "#eab308", details: "145 water supply schemes affected" },
    { sector: "Livestock", level: "Severe", color: "#ef4444", details: "12,845 livestock affected" }
  ],

  // Infrastructure Damage Overview Donut Breakdown (₹ 1,256 Cr Total)
  infrastructureDamageBreakdown: {
    totalCrores: "1,256",
    slices: [
      { sector: "Roads & Bridges", crores: 512, pct: "40.8%", color: "#ef4444" },
      { sector: "Water Supply", crores: 248, pct: "19.7%", color: "#38bdf8" },
      { sector: "Power Infrastructure", crores: 186, pct: "14.8%", color: "#f59e0b" },
      { sector: "Irrigation", crores: 152, pct: "12.1%", color: "#eab308" },
      { sector: "Other Infrastructure", crores: 158, pct: "12.6%", color: "#2563eb" }
    ]
  },

  // Exposed Villages Bar Chart
  exposedVillages: {
    total: 2347,
    severe: { count: 824, pct: "35.1%", color: "#ef4444" },
    high: { count: 912, pct: "38.9%", color: "#f59e0b" },
    moderate: { count: 398, pct: "17.0%", color: "#eab308" },
    low: { count: 213, pct: "9.0%", color: "#10b981" }
  },

  // Top Affected Districts Table
  topAffectedDistricts: [
    { district: "Golaghat", affectedPop: "1.25 Lakh", pctTotal: "14.28%", level: "Severe", color: "#ef4444" },
    { district: "Jorhat", affectedPop: "1.08 Lakh", pctTotal: "12.34%", level: "Severe", color: "#ef4444" },
    { district: "Sivasagar", affectedPop: "0.96 Lakh", pctTotal: "10.97%", level: "High", color: "#f59e0b" },
    { district: "Darrang", affectedPop: "0.78 Lakh", pctTotal: "8.91%", level: "High", color: "#f59e0b" },
    { district: "Nagaon", affectedPop: "0.72 Lakh", pctTotal: "8.23%", level: "High", color: "#f59e0b" }
  ],

  // Specific Damage Counts by Type
  damageByType: [
    { type: "Roads", count: 245, color: "#ef4444" },
    { type: "Bridges", count: 37, color: "#f59e0b" },
    { type: "Embankments", count: 68, color: "#2563eb" },
    { type: "Water Schemes", count: 145, color: "#38bdf8" },
    { type: "Power Structures", count: 52, color: "#10b981" }
  ],

  // 72-Hour Impact Forecast Badges
  impactForecast72h: [
    { label: "Heavy Rain", val: "Very Likely", sub: "80% Probability", color: "#38bdf8", icon: "fa-cloud-showers-heavy" },
    { label: "Water Level Rise", val: "0.5 - 1.2 m", sub: "Expected", color: "#ef4444", icon: "fa-water" },
    { label: "More People Affected", val: "+1.5 to 2 Lakh", sub: "Estimated", color: "#a78bfa", icon: "fa-users" },
    { label: "More Houses at Risk", val: "2,000+", sub: "Estimated", color: "#f59e0b", icon: "fa-house-crack" }
  ]
};

window.rescueImpactData = rescueImpactData;
