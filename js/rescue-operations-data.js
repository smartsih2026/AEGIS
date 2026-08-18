/*
 * AEGIS Rescue Command System - Live Rescue Operations Dedicated Data Matrix
 * Real-Time Rescue Mission Tracking, GPS Route Vectors, Team Deployment & Weather Impact
 */

const rescueOperationsData = {
  summaryKpis: {
    activeMissions: "24",
    activeSub: "+4 in last 1 hr",
    deployedTeams: "18",
    teamsSub: "82 Personnel",
    rescuesCompleted: "156",
    completedSub: "+23 Today",
    peopleRescued: "1,248",
    rescuedSub: "+187 Today",
    inProgress: "8",
    inProgressSub: "High Priority",
    avgEta: "18.6 min",
    etaSub: "↓ 12% vs yesterday",
    successRate: "94%",
    successSub: "↑ 8% vs yesterday"
  },

  // Interactive Live Rescue Operations Map Pins & Vectors across ALL 21 Assam Districts
  districtOperationsPins: [
    { district: "Golaghat", name: "Golaghat Mission (MIS-1024)", coords: [26.5167, 93.9667], team: "NDRF-01", type: "ndrf", icon: "fa-shield-halved", color: "#2563eb", status: "In Progress (60%)" },
    { district: "Jorhat", name: "Jorhat Evacuation (MIS-1023)", coords: [26.7578, 94.2080], team: "BOAT-03", type: "boat", icon: "fa-sailboat", color: "#38bdf8", status: "In Progress (75%)" },
    { district: "Darrang", name: "Darrang Water Rescue (MIS-1022)", coords: [26.4497, 92.0294], team: "MED-02", type: "medical", icon: "fa-user-nurse", color: "#ef4444", status: "En Route (40%)" },
    { district: "Morigaon", name: "Morigaon Boat Rescue (MIS-1021)", coords: [26.2573, 92.3377], team: "NDRF-04", type: "ndrf", icon: "fa-shield-halved", color: "#10b981", status: "In Progress (80%)" },
    { district: "Sivasagar", name: "Sivasagar Relief (MIS-1020)", coords: [26.9826, 94.6425], team: "SUP-01", type: "truck", icon: "fa-truck-field", color: "#f59e0b", status: "Completed (100%)" },
    { district: "Dibrugarh", name: "Dibrugarh Air Recon (MIS-1019)", coords: [27.4845, 94.9019], team: "HELI-01", type: "helicopter", icon: "fa-helicopter", color: "#eab308", status: "In Progress (50%)" },
    { district: "Dhemaji", name: "Dhemaji Evacuation (MIS-1018)", coords: [27.4844, 94.5949], team: "BOAT-05", type: "boat", icon: "fa-sailboat", color: "#38bdf8", status: "In Progress (85%)" },
    { district: "Lakhimpur", name: "Lakhimpur Relief (MIS-1017)", coords: [27.2374, 94.0954], team: "SUP-02", type: "truck", icon: "fa-truck-field", color: "#f59e0b", status: "En Route (30%)" },
    { district: "Tinsukia", name: "Tinsukia Rescue (MIS-1016)", coords: [27.4922, 95.3558], team: "NDRF-05", type: "ndrf", icon: "fa-shield-halved", color: "#10b981", status: "Completed (100%)" },
    { district: "Nagaon", name: "Nagaon Supply Convoy (MIS-1015)", coords: [26.3471, 92.6841], team: "SUP-03", type: "truck", icon: "fa-truck-field", color: "#f59e0b", status: "In Progress (70%)" },
    { district: "Sonitpur", name: "Tezpur Bridge Ops (MIS-1014)", coords: [26.6338, 92.8000], team: "NDRF-02", type: "ndrf", icon: "fa-shield-halved", color: "#2563eb", status: "Completed (100%)" },
    { district: "Kamrup (M)", name: "Guwahati Air Command (MIS-1013)", coords: [26.1445, 91.7362], team: "HELI-02", type: "helicopter", icon: "fa-helicopter", color: "#eab308", status: "On Standby" },
    { district: "Barpeta", name: "Barpeta Water Ops (MIS-1012)", coords: [26.3184, 90.9818], team: "BOAT-02", type: "boat", icon: "fa-sailboat", color: "#38bdf8", status: "In Progress (65%)" },
    { district: "Goalpara", name: "Goalpara Fuel Patrol (MIS-1011)", coords: [26.1754, 90.6267], team: "SUP-04", type: "truck", icon: "fa-truck-field", color: "#a78bfa", status: "Completed (100%)" },
    { district: "Dhubri", name: "Dhubri River Patrol (MIS-1010)", coords: [26.0190, 89.9911], team: "BOAT-04", type: "boat", icon: "fa-sailboat", color: "#38bdf8", status: "En Route (45%)" },
    { district: "Dima Hasao", name: "Haflong Landslide Medical (MIS-1009)", coords: [25.1764, 93.0159], team: "MED-01", type: "medical", icon: "fa-user-nurse", color: "#ef4444", status: "In Progress (90%)" },
    { district: "East Karbi Anglong", name: "Diphu Transport (MIS-1008)", coords: [25.8450, 93.4350], team: "SUP-05", type: "truck", icon: "fa-truck-field", color: "#f59e0b", status: "Completed (100%)" },
    { district: "Cachar", name: "Silchar Rescue Ops (MIS-1007)", coords: [24.8333, 92.7789], team: "NDRF-03", type: "ndrf", icon: "fa-shield-halved", color: "#2563eb", status: "In Progress (80%)" },
    { district: "Hailakandi", name: "Hailakandi Relief (MIS-1006)", coords: [24.6885, 92.5738], team: "SUP-06", type: "truck", icon: "fa-truck-field", color: "#f59e0b", status: "En Route (20%)" },
    { district: "Karimganj", name: "Karimganj Water Rescue (MIS-1005)", coords: [24.8690, 92.3590], team: "BOAT-01", type: "boat", icon: "fa-sailboat", color: "#38bdf8", status: "In Progress (70%)" }
  ],

  // Active Missions List
  activeMissions: [
    { id: "MIS-1024", name: "Golaghat Flood Rescue", location: "Zone A, Golaghat", people: "8 People", priority: "High Priority", status: "IN PROGRESS", eta: "12 min", progress: 60, pColor: "#ef4444" },
    { id: "MIS-1023", name: "Jorhat Medical Evacuation", location: "Jorhat Town", people: "2 People", priority: "High Priority", status: "IN PROGRESS", eta: "18 min", progress: 75, pColor: "#ef4444" },
    { id: "MIS-1022", name: "Darrang Water Rescue", location: "Mangaldoi Area", people: "5 People", priority: "Medium Priority", status: "EN ROUTE", eta: "15 min", progress: 40, pColor: "#f59e0b" },
    { id: "MIS-1021", name: "Morigaon Boat Rescue", location: "Katiipara Area", people: "6 People", priority: "High Priority", status: "IN PROGRESS", eta: "10 min", progress: 80, pColor: "#ef4444" },
    { id: "MIS-1020", name: "Sivasagar Relief Supply", location: "Sivasagar Town", people: "—", priority: "Medium Priority", status: "COMPLETED", eta: "09:45 AM", progress: 100, pColor: "#f59e0b" }
  ],

  // Team Status Overview Donut (18 Total Teams)
  teamStatusDonut: {
    total: 18,
    inProgress: { count: 8, pct: "44%", color: "#10b981" },
    enRoute: { count: 4, pct: "22%", color: "#2563eb" },
    onStandby: { count: 3, pct: "17%", color: "#f59e0b" },
    completed: { count: 3, pct: "17%", color: "#38bdf8" }
  },

  // Team Deployment Breakdown List
  teamDeployment: [
    { type: "NDRF Teams", count: "5 Teams", color: "#2563eb", icon: "fa-shield-halved" },
    { type: "Rescue Boats", count: "6 Boats", color: "#38bdf8", icon: "fa-sailboat" },
    { type: "Medical Teams", count: "3 Teams", color: "#ef4444", icon: "fa-user-nurse" },
    { type: "Helicopter Units", count: "2 Units", color: "#eab308", icon: "fa-helicopter" },
    { type: "Ambulances", count: "4 Units", color: "#ef4444", icon: "fa-truck-medical" },
    { type: "Relief Trucks", count: "6 Vehicles", color: "#f59e0b", icon: "fa-truck-field" }
  ],

  // Mission Progress Summary Donut (24 Total Missions)
  missionProgressDonut: {
    total: 24,
    completed: { count: 12, pct: "50%", color: "#10b981" },
    inProgress: { count: 8, pct: "33%", color: "#2563eb" },
    enRoute: { count: 4, pct: "17%", color: "#f59e0b" },
    onHold: { count: 0, pct: "0%", color: "#94a3b8" }
  },

  // Recent Rescue Activity Log
  recentRescueActivity: [
    { time: "10:32 AM", text: "8 people rescued in Golaghat", team: "Team BR-06" },
    { time: "10:15 AM", text: "2 people evacuated in Jorhat", team: "Team MT-03" },
    { time: "10:08 AM", text: "Medical aid provided in Darrang", team: "Team MED-02" },
    { time: "09:58 AM", text: "5 people rescued in Morigaon", team: "Team BR-04" },
    { time: "09:45 AM", text: "Relief supplies delivered in Sivasagar", team: "Team SUP-01" }
  ],

  // Rescue Time Analytics Line Chart Data
  etaAnalytics: [
    { time: "12 AM", val: 32.4 },
    { time: "3 AM", val: 28.7 },
    { time: "6 AM", val: 25.1 },
    { time: "9 AM", val: 18.6 },
    { time: "12 PM", val: 16.3 },
    { time: "3 PM", val: 18.9 },
    { time: "6 PM", val: 22.4 },
    { time: "9 PM", val: 24.8 }
  ],

  // Weather Impact Metrics
  weatherImpact: {
    rain: "Heavy Rain (High)",
    wind: "24 km/h (Moderate)",
    water: "5.2 m (Rising)",
    visibility: "2.1 km (Low)"
  },

  // Team Tracking List Table
  teamTrackingList: [
    { id: "NDRF-01", type: "NDRF Team", location: "Golaghat (Zone A)", mission: "MIS-1024", status: "In Progress", color: "#10b981", eta: "12 min", progress: 60 },
    { id: "BOAT-03", type: "Rescue Boat", location: "Jorhat River Area", mission: "MIS-1023", status: "In Progress", color: "#10b981", eta: "18 min", progress: 75 },
    { id: "MED-02", type: "Medical Team", location: "Darrang Area", mission: "MIS-1022", status: "En Route", color: "#f59e0b", eta: "15 min", progress: 40 },
    { id: "NDRF-04", type: "NDRF Team", location: "Morigaon Area", mission: "MIS-1021", status: "In Progress", color: "#10b981", eta: "10 min", progress: 80 },
    { id: "SUP-01", type: "Relief Truck", location: "Sivasagar Town", mission: "MIS-1020", status: "Completed", color: "#2563eb", eta: "—", progress: 100 }
  ],

  // Mission Route Details Checkpoints
  routeDetails: {
    missionId: "MIS-1024: Golaghat Flood Rescue",
    team: "NDRF-01",
    checkpoints: [
      { type: "start", title: "Start Point: Golaghat NDRF Base", time: "10:10 AM", color: "#10b981" },
      { type: "check", title: "En Route Checkpoint: Dergaon Bridge", time: "10:18 AM", color: "#eab308" },
      { type: "rescue", title: "Rescue Location: Kabir Pathar, Zone A", time: "10:22 AM", color: "#ef4444" },
      { type: "dest", title: "Destination: Temporary Shelter", time: "10:35 AM", color: "#10b981" }
    ]
  },

  // AI Recommendations
  aiRecommendations: [
    { title: "Deploy 2 more rescue boats to Golaghat (Zone B)", priority: "High Priority", color: "#f59e0b" },
    { title: "Medical team recommended for Jorhat (Waterborne diseases risk)", priority: "Medium Priority", color: "#eab308" },
    { title: "Alternative route suggested for Darrang (Road blocked ahead)", priority: "Low Priority", color: "#10b981" }
  ]
};

window.rescueOperationsData = rescueOperationsData;
