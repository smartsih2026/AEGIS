/*
 * AEGIS Rescue Command System - Shelter Network Management Dedicated Data Matrix
 * Real-Time Shelter Occupancy Telemetry, Supply Inventories, Evacuation Tracking & Animated Alert Cards
 */

const rescueSheltersData = {
  summaryKpis: {
    totalShelters: "156",
    sheltersSub: "Across Assam",
    totalCapacity: "48,560",
    capacitySub: "People",
    currentOccupancy: "32,843",
    occupancySub: "67.6% Occupied",
    availableBeds: "15,717",
    availableSub: "32.4% Available",
    criticalShelters: "18",
    criticalSub: ">90% Occupancy",
    suppliesStatus: "Good",
    suppliesSub: "Sufficient"
  },

  // Interactive Pins across ALL 21 Assam Districts with Occupancy Levels & Status
  districtShelterPins: [
    { district: "Golaghat", name: "Golaghat Relief Camp", coords: [26.5167, 93.9667], cap: 1200, occ: 1150, pct: 95.8, color: "#ef4444", status: "Critical (>90%)" },
    { district: "Jorhat", name: "Jorhat Central Shelter", coords: [26.7578, 94.2080], cap: 2000, occ: 1720, pct: 86.0, color: "#f59e0b", status: "High (70-90%)" },
    { district: "Sivasagar", name: "Sivasagar Shelter", coords: [26.9826, 94.6425], cap: 1500, occ: 1050, pct: 70.0, color: "#f59e0b", status: "High (70-90%)" },
    { district: "Darrang", name: "Darrang Relief Center", coords: [26.4497, 92.0294], cap: 1000, occ: 550, pct: 55.0, color: "#eab308", status: "Moderate (40-70%)" },
    { district: "Nagaon", name: "Nagaon Community Hall", coords: [26.3471, 92.6841], cap: 1800, occ: 1080, pct: 60.0, color: "#eab308", status: "Moderate (40-70%)" },
    { district: "Kamrup (M)", name: "Kamrup Metro Shelter", coords: [26.1445, 91.7362], cap: 3500, occ: 1400, pct: 40.0, color: "#10b981", status: "Low (<40%)" },
    { district: "Cachar", name: "Cachar Relief Camp", coords: [24.8333, 92.7789], cap: 1500, occ: 450, pct: 30.0, color: "#10b981", status: "Low (<40%)" },
    { district: "Dhubri", name: "Dhubri Shelter", coords: [26.0190, 89.9911], cap: 1000, occ: 280, pct: 28.0, color: "#10b981", status: "Low (<40%)" },
    { district: "Dibrugarh", name: "Dibrugarh Stadium Shelter", coords: [27.4845, 94.9019], cap: 2500, occ: 2350, pct: 94.0, color: "#ef4444", status: "Critical (>90%)" },
    { district: "Dhemaji", name: "Dhemaji High School Relief", coords: [27.4844, 94.5949], cap: 1200, occ: 1110, pct: 92.5, color: "#ef4444", status: "Critical (>90%)" },
    { district: "Lakhimpur", name: "Lakhimpur Town Relief Camp", coords: [27.2374, 94.0954], cap: 1600, occ: 1480, pct: 92.5, color: "#ef4444", status: "Critical (>90%)" },
    { district: "Tinsukia", name: "Tinsukia Relief Center", coords: [27.4922, 95.3558], cap: 1400, occ: 1050, pct: 75.0, color: "#f59e0b", status: "High (70-90%)" },
    { district: "Morigaon", name: "Morigaon College Shelter", coords: [26.2573, 92.3377], cap: 1300, occ: 1120, pct: 86.1, color: "#f59e0b", status: "High (70-90%)" },
    { district: "Sonitpur", name: "Tezpur Community Center", coords: [26.6338, 92.8000], cap: 1800, occ: 1170, pct: 65.0, color: "#eab308", status: "Moderate (40-70%)" },
    { district: "Barpeta", name: "Barpeta Relief Complex", coords: [26.3184, 90.9818], cap: 2000, occ: 1300, pct: 65.0, color: "#eab308", status: "Moderate (40-70%)" },
    { district: "Goalpara", name: "Goalpara Relief Camp", coords: [26.1754, 90.6267], cap: 1100, occ: 380, pct: 34.5, color: "#10b981", status: "Low (<40%)" },
    { district: "Dima Hasao", name: "Haflong Town Shelter", coords: [25.1764, 93.0159], cap: 800, occ: 320, pct: 40.0, color: "#10b981", status: "Low (<40%)" },
    { district: "East Karbi Anglong", name: "Diphu Relief Center", coords: [25.8450, 93.4350], cap: 1000, occ: 350, pct: 35.0, color: "#10b981", status: "Low (<40%)" },
    { district: "Hailakandi", name: "Hailakandi Town Hall", coords: [24.6885, 92.5738], cap: 900, occ: 540, pct: 60.0, color: "#eab308", status: "Moderate (40-70%)" },
    { district: "Karimganj", name: "Karimganj Relief Base", coords: [24.8690, 92.3590], cap: 1200, occ: 980, pct: 81.6, color: "#f59e0b", status: "High (70-90%)" }
  ],

  // Shelter Status Overview (Donut Breakdown: 156 Total)
  statusBreakdown: {
    total: 156,
    critical: { count: 18, pct: "11.5%", color: "#ef4444" },
    high: { count: 42, pct: "26.9%", color: "#f59e0b" },
    moderate: { count: 56, pct: "35.9%", color: "#eab308" },
    low: { count: 40, pct: "25.6%", color: "#10b981" }
  },

  // Supply Status Overview (Progress Bars)
  supplyOverview: [
    { name: "Food Supplies", pct: 78, color: "#10b981" },
    { name: "Water Supplies", pct: 85, color: "#2563eb" },
    { name: "Medical Supplies", pct: 72, color: "#ec4899" },
    { name: "Blankets & Bedding", pct: 68, color: "#a78bfa" },
    { name: "Sanitation Kits", pct: 65, color: "#06b6d4" },
    { name: "Fuel & Power", pct: 60, color: "#eab308" }
  ],

  // Evacuation Planning Metrics
  evacuationMetrics: {
    planned: "12,450 People",
    inProgress: "3,226 People",
    completedToday: "2,118 People",
    pending: "7,106 People"
  },

  // Primary Shelter List Table
  shelterList: [
    { name: "Golaghat Relief Camp", district: "Golaghat", location: "Golaghat Town", cap: 1200, occ: 1150, avail: 50, pct: 95.8, supplyStatus: "Good", status: "Critical", color: "#ef4444" },
    { name: "Jorhat Central Shelter", district: "Jorhat", location: "Jorhat Town", cap: 2000, occ: 1720, avail: 280, pct: 86.0, supplyStatus: "Good", status: "High", color: "#f59e0b" },
    { name: "Sivasagar Shelter", district: "Sivasagar", location: "Sivasagar Town", cap: 1500, occ: 1050, avail: 450, pct: 70.0, supplyStatus: "Good", status: "High", color: "#f59e0b" },
    { name: "Nagaon Community Hall", district: "Nagaon", location: "Nagaon Town", cap: 1800, occ: 1080, avail: 720, pct: 60.0, supplyStatus: "Moderate", status: "Moderate", color: "#eab308" },
    { name: "Darrang Relief Center", district: "Darrang", location: "Mangaldoi", cap: 1000, occ: 550, avail: 450, pct: 55.0, supplyStatus: "Good", status: "Moderate", color: "#eab308" },
    { name: "Kamrup Metro Shelter", district: "Kamrup (M)", location: "Guwahati", cap: 3500, occ: 1400, avail: 2100, pct: 40.0, supplyStatus: "Good", status: "Low", color: "#10b981" },
    { name: "Cachar Relief Camp", district: "Cachar", location: "Silchar", cap: 1500, occ: 450, avail: 1050, pct: 30.0, supplyStatus: "Good", status: "Low", color: "#10b981" },
    { name: "Dhubri Shelter", district: "Dhubri", location: "Dhubri Town", cap: 1000, occ: 280, avail: 720, pct: 28.0, supplyStatus: "Good", status: "Low", color: "#10b981" }
  ],

  // Animated Critical Alerts List
  criticalAlerts: [
    { name: "Golaghat Relief Camp", text: "Occupancy > 95%", action: "Take Action", color: "#ef4444" },
    { name: "Jorhat Central Shelter", text: "Occupancy > 85%", action: "Take Action", color: "#f59e0b" },
    { name: "Sivasagar Shelter", text: "Occupancy > 70%", action: "Take Action", color: "#f59e0b" }
  ],

  // AI Recommendations
  aiRecommendations: {
    summary: "AI suggests opening 5 new shelters in high risk zones.",
    districts: ["Darrang District", "Morigaon District", "Lakhimpur District"]
  }
};

window.rescueSheltersData = rescueSheltersData;
