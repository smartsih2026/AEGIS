/*
 * AEGIS Rescue Command System - Resource Command Center Dedicated Data Matrix
 * Real-Time Resource Inventory, AI Deployment Recommendations, Fleet Telemetry & Active Alert Cards
 */

const rescueResourcesData = {
  summaryKpis: {
    rescueBoats: "48",
    rescueBoatsSub: "32 Active | 16 Standby",
    rescueTeams: "124",
    rescueTeamsSub: "85 Deployed | 39 Available",
    ambulances: "68",
    ambulancesSub: "42 Deployed | 26 Available",
    reliefTrucks: "36",
    reliefTrucksSub: "21 On Route | 15 Available",
    foodSupplies: "158.7 Tons",
    foodSuppliesSub: "Sufficient for 2.8 Lakh People",
    medicalSupplies: "85%",
    medicalSuppliesSub: "Stock Adequate",
    fuelReserves: "72%",
    fuelReservesSub: "Sufficient for 5 Days",
    totalPersonnel: "1,256",
    totalPersonnelSub: "Active Personnel"
  },

  // Interactive Pins across ALL 21 Assam Districts with Resource Types
  districtResourcePins: [
    { district: "Golaghat", name: "Golaghat Command Hub", coords: [26.5167, 93.9667], type: "boat", icon: "fa-sailboat", color: "#38bdf8", status: "8 Boats Active" },
    { district: "Jorhat", name: "Jorhat River Base", coords: [26.7578, 94.2080], type: "team", icon: "fa-users-gear", color: "#10b981", status: "16 Teams Deployed" },
    { district: "Dibrugarh", name: "Dibrugarh Air & Fleet Base", coords: [27.4845, 94.9019], type: "helicopter", icon: "fa-helicopter", color: "#f59e0b", status: "2 Helicopters Ready" },
    { district: "Sivasagar", name: "Sivasagar Relief Depot", coords: [26.9826, 94.6425], type: "truck", icon: "fa-truck-field", color: "#ef4444", status: "5 Relief Trucks" },
    { district: "Darrang", name: "Darrang Medical Forward Base", coords: [26.4497, 92.0294], type: "ambulance", icon: "fa-truck-medical", color: "#ef4444", status: "6 Ambulances" },
    { district: "Lakhimpur", name: "Lakhimpur Supply Center", coords: [27.2374, 94.0954], type: "supply", icon: "fa-boxes-packing", color: "#38bdf8", status: "25 Tons Ration" },
    { district: "Dhemaji", name: "Dhemaji Boat Station", coords: [27.4844, 94.5949], type: "boat", icon: "fa-sailboat", color: "#38bdf8", status: "6 Boats Active" },
    { district: "Nagaon", name: "Nagaon Central Logistics Depot", coords: [26.3471, 92.6841], type: "truck", icon: "fa-truck-field", color: "#f59e0b", status: "10 Relief Trucks" },
    { district: "Morigaon", name: "Morigaon Emergency Depot", coords: [26.2573, 92.3377], type: "team", icon: "fa-users-gear", color: "#10b981", status: "10 Teams Deployed" },
    { district: "Sonitpur", name: "Tezpur NDRF Station", coords: [26.6338, 92.8000], type: "team", icon: "fa-users-gear", color: "#10b981", status: "12 Teams Deployed" },
    { district: "Kamrup (M)", name: "Guwahati HQ Air Base", coords: [26.1445, 91.7362], type: "helicopter", icon: "fa-helicopter", color: "#f59e0b", status: "4 Helicopters" },
    { district: "Barpeta", name: "Barpeta Water Rescue Hub", coords: [26.3184, 90.9818], type: "boat", icon: "fa-sailboat", color: "#38bdf8", status: "7 Boats Deployed" },
    { district: "Dhubri", name: "Dhubri Border Rescue Post", coords: [26.0190, 89.9911], type: "boat", icon: "fa-sailboat", color: "#38bdf8", status: "5 Boats Active" },
    { district: "Goalpara", name: "Goalpara Fuel Reserve Station", coords: [26.1754, 90.6267], type: "fuel", icon: "fa-gas-pump", color: "#eab308", status: "4 Fuel Tankers" },
    { district: "Dima Hasao", name: "Haflong Hill Response Station", coords: [25.1764, 93.0159], type: "ambulance", icon: "fa-truck-medical", color: "#ef4444", status: "4 Ambulances" },
    { district: "East Karbi Anglong", name: "Diphu Medical Post", coords: [25.8450, 93.4350], type: "medical", icon: "fa-user-nurse", color: "#06b6d4", status: "3 Medical Teams" },
    { district: "Cachar", name: "Silchar NDRF Battalion Base", coords: [24.8333, 92.7789], type: "team", icon: "fa-users-gear", color: "#10b981", status: "14 Teams Deployed" },
    { district: "Hailakandi", name: "Hailakandi Relief Hub", coords: [24.6885, 92.5738], type: "truck", icon: "fa-truck-field", color: "#f59e0b", status: "4 Relief Trucks" },
    { district: "Karimganj", name: "Karimganj Flood Control Post", coords: [24.8690, 92.3590], type: "boat", icon: "fa-sailboat", color: "#38bdf8", status: "4 Boats Active" }
  ],

  // AI Deployment Recommendation Engine Data
  aiRecommendation: {
    summary: "High severity in Golaghat, Jorhat & Darrang districts. Resources should be prioritized to these areas.",
    recommendations: [
      { type: "Rescue Boats", icon: "fa-sailboat", qty: "8 Units", target: "Golaghat, Morigaon", color: "#38bdf8" },
      { type: "Rescue Teams", icon: "fa-users-gear", qty: "16 Teams", target: "Jorhat, Sivasagar", color: "#10b981" },
      { type: "Ambulances", icon: "fa-truck-medical", qty: "6 Units", target: "Darrang, Nagaon", color: "#ef4444" },
      { type: "Relief Trucks", icon: "fa-truck-field", qty: "5 Units", target: "Lakhimpur, Dhemaji", color: "#f59e0b" },
      { type: "Medical Teams", icon: "fa-user-nurse", qty: "4 Teams", target: "Golaghat, Dima Hasao", color: "#06b6d4" },
      { type: "Fuel Tankers", icon: "fa-gas-pump", qty: "3 Units", target: "Jorhat, Tinsukia", color: "#eab308" }
    ],
    priorityZones: [
      { id: 1, district: "Golaghat", level: "Critical", score: "92/100", color: "#ef4444" },
      { id: 2, district: "Jorhat", level: "High", score: "87/100", color: "#f59e0b" },
      { id: 3, district: "Darrang", level: "High", score: "79/100", color: "#f59e0b" }
    ]
  },

  // Resource Status Breakdown (Donut Chart Data: 415 Total)
  statusBreakdown: {
    total: 415,
    deployed: { count: 246, pct: "59%", color: "#2563eb" },
    available: { count: 107, pct: "26%", color: "#10b981" },
    onRoute: { count: 42, pct: "10%", color: "#f59e0b" },
    maintenance: { count: 20, pct: "5%", color: "#ef4444" }
  },

  // Resource Deployment Table
  deploymentTable: [
    { type: "Rescue Boats", icon: "fa-sailboat", deployed: 32, available: 16, onRoute: "—", maintenance: "—", utilization: 67, color: "#38bdf8" },
    { type: "Rescue Teams", icon: "fa-users-gear", deployed: 85, available: 39, onRoute: "—", maintenance: "—", utilization: 69, color: "#10b981" },
    { type: "Ambulances", icon: "fa-truck-medical", deployed: 42, available: 26, onRoute: "—", maintenance: "—", utilization: 62, color: "#ef4444" },
    { type: "Relief Trucks", icon: "fa-truck-field", deployed: 21, available: 15, onRoute: 5, maintenance: "—", utilization: 58, color: "#f59e0b" },
    { type: "Medical Teams", icon: "fa-user-nurse", deployed: 28, available: 18, onRoute: 2, maintenance: "—", utilization: 61, color: "#06b6d4" },
    { type: "Helicopters", icon: "fa-helicopter", deployed: 6, available: 4, onRoute: 1, maintenance: 1, utilization: 55, color: "#eab308" },
    { type: "Fuel Tankers", icon: "fa-gas-pump", deployed: 12, available: 20, onRoute: 3, maintenance: 2, utilization: 33, color: "#a78bfa" }
  ],

  // Supply Inventory Level
  supplyInventory: [
    { name: "Food Supplies", qty: "158.7 Tons", pct: 70, color: "#2563eb" },
    { name: "Medical Supplies", qty: "85%", pct: 85, color: "#2563eb" },
    { name: "Water Bottles", qty: "2.45 Lakh", pct: 65, color: "#2563eb" },
    { name: "Tents", qty: "1,850 Units", pct: 60, color: "#2563eb" },
    { name: "Blankets", qty: "18,600 Units", pct: 75, color: "#2563eb" },
    { name: "Life Jackets", qty: "2,400 Units", pct: 80, color: "#2563eb" }
  ],

  // Fuel Monitoring Telemetry
  fuelTelemetry: {
    pct: 72,
    totalLiters: "1,44,000 Liters",
    lowFuelAlerts: ["Dima Hasao", "Karimganj", "Dhemaji"]
  },

  // Recent Activity Log
  recentActivity: [
    { time: "10:35 AM", text: "Rescue Boat dispatched to Golaghat" },
    { time: "10:32 AM", text: "Ambulance deployed to Jorhat" },
    { time: "10:28 AM", text: "Relief Truck departed to Lakhimpur" },
    { time: "10:25 AM", text: "Medical Team reached Darrang" }
  ],

  // Active Alerts Grid
  activeAlerts: [
    { type: "High Flood Risk", icon: "fa-triangle-exclamation", location: "Golaghat, Morigaon", detail: "Water level rising rapidly", color: "#ef4444", bg: "rgba(239,68,68,0.15)", border: "rgba(239,68,68,0.35)" },
    { type: "Bridge Closed", icon: "fa-bridge-lock", location: "NH-715, Near Tezpur", detail: "Use alternate route", color: "#f59e0b", bg: "rgba(245,158,11,0.15)", border: "rgba(245,158,11,0.35)" },
    { type: "Fuel Low", icon: "fa-gas-pump", location: "Dima Hasao, Karimganj", detail: "Refuel required soon", color: "#eab308", bg: "rgba(234,179,8,0.15)", border: "rgba(234,179,8,0.35)" },
    { type: "Resource Request", icon: "fa-box-open", location: "Nagaon, East Karbi Anglong", detail: "Additional boats requested", color: "#38bdf8", bg: "rgba(56,189,248,0.15)", border: "rgba(56,189,248,0.35)" }
  ],

  // Communication Status Badges
  communicationStatus: [
    { name: "Radio Network", icon: "fa-radio", status: "Operational", color: "#10b981" },
    { name: "Satellite Link", icon: "fa-satellite-dish", status: "Operational", color: "#10b981" },
    { name: "Mobile Network", icon: "fa-tower-cell", status: "Unstable", color: "#f59e0b" },
    { name: "Internet Connectivity", icon: "fa-globe", status: "Operational", color: "#10b981" }
  ]
};

window.rescueResourcesData = rescueResourcesData;
