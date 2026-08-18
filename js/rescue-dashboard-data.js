/*
 * AEGIS Rescue Command System - State-Wide Assam Dashboard Data Matrix
 * Full 21 District Telemetry, Dynamic SOS Queue, Team Deployments & Coordinates
 */

const assamStateDistrictData = {
  "Golaghat": {
    district: "Golaghat, Assam",
    division: "Upper Assam",
    riskLevel: "Critical",
    riskColor: "#ef4444",
    coordinates: [26.4049, 94.0321],
    activeSos: 12,
    ongoingRescues: 7,
    peopleRescuedToday: 86,
    teamsDeployed: 8,
    river: "Dhansiri River: Rising (4.8m)",
    rainfall: "186 mm (Heavy Rain)",
    status: "High Alert",
    activeSosList: [
      { id: "SOS-1087", priority: "HIGH", priorityClass: "red", countBadge: "3", title: "Trapped in Water", headcount: "Family of 4", location: "Near Kabori Pul", coordinates: [26.4020, 94.0190], time: "10:25 AM", assignedTeam: "NDRF Team-4", statusBadge: "On the way", eta: "18 min" },
      { id: "SOS-1088", priority: "MEDIUM", priorityClass: "orange", countBadge: "1", title: "Elderly Person Emergency", headcount: "1 Senior Citizen", location: "Dergaon Area", coordinates: [26.4180, 94.0320], time: "10:30 AM", assignedTeam: "SDRF Team-2", statusBadge: "Rescue in Progress", eta: "Reached" },
      { id: "SOS-1089", priority: "HIGH", priorityClass: "red", countBadge: "3", title: "Trapped on Roof", headcount: "Family of 5", location: "Dimoria Village", coordinates: [26.4290, 94.0480], time: "10:35 AM", assignedTeam: "NDRF Team-5", statusBadge: "On the way", eta: "22 min" }
    ],
    teams: [
      { team: "NDRF Team-4", type: "Rescue Boat", location: "Enroute to Kabori Pul", eta: "ETA: 18 min", statusColor: "#38bdf8" },
      { team: "SDRF Team-2", type: "Rescue Boat", location: "Dergaon Area", eta: "ETA: 12 min", statusColor: "#f59e0b" },
      { team: "NDRF Team-5", type: "Rescue Boat", location: "Dimoria Village", eta: "ETA: 22 min", statusColor: "#38bdf8" },
      { team: "NDRF Team-6", type: "Rescue Vehicle", location: "Rangajan Area", eta: "Patrolling", statusColor: "#10b981" },
      { team: "SDRF Team-1", type: "Rescue Vehicle", location: "Near Titabor", eta: "Standby", statusColor: "#a78bfa" }
    ]
  },
  "Jorhat": {
    district: "Jorhat, Assam",
    division: "Upper Assam",
    riskLevel: "High",
    riskColor: "#f59e0b",
    coordinates: [26.7578, 94.2080],
    activeSos: 8,
    ongoingRescues: 4,
    peopleRescuedToday: 64,
    teamsDeployed: 5,
    river: "Bhogdoi River: High Level (3.9m)",
    rainfall: "142 mm (Moderate-Heavy Rain)",
    status: "Severe Risk",
    activeSosList: [
      { id: "SOS-1092", priority: "HIGH", priorityClass: "red", countBadge: "2", title: "Embankment Breach Hazard", headcount: "Family of 6", location: "Tarajan River Bank", coordinates: [26.7650, 94.2010], time: "10:15 AM", assignedTeam: "SDRF Team-3", statusBadge: "Enroute", eta: "14 min" },
      { id: "SOS-1094", priority: "MEDIUM", priorityClass: "orange", countBadge: "1", title: "Medical Evacuation Needed", headcount: "Pregnant Woman", location: "Rowriah Bypass", coordinates: [26.7320, 94.1750], time: "10:28 AM", assignedTeam: "108 Boat EMS", statusBadge: "Dispatched", eta: "10 min" }
    ],
    teams: [
      { team: "SDRF Team-3", type: "Rescue Boat", location: "Tarajan Bank", eta: "ETA: 14 min", statusColor: "#38bdf8" },
      { team: "108 Boat EMS", type: "Ambulance Boat", location: "Rowriah Bypass", eta: "ETA: 10 min", statusColor: "#10b981" }
    ]
  },
  "Dibrugarh": {
    district: "Dibrugarh, Assam",
    division: "Upper Assam",
    riskLevel: "High",
    riskColor: "#f59e0b",
    coordinates: [27.4845, 94.9019],
    activeSos: 9,
    ongoingRescues: 5,
    peopleRescuedToday: 72,
    teamsDeployed: 6,
    river: "Brahmaputra River: Above Danger Mark (105.4m)",
    rainfall: "165 mm (Heavy Rain)",
    status: "High Alert",
    activeSosList: [
      { id: "SOS-1101", priority: "HIGH", priorityClass: "red", countBadge: "4", title: "Urban Waterlogging Isolation", headcount: "8 Citizens", location: "Chowkidinghee", coordinates: [27.4990, 94.9210], time: "09:50 AM", assignedTeam: "NDRF 1st Bn", statusBadge: "Rescuing", eta: "Active" }
    ],
    teams: [
      { team: "NDRF 1st Bn", type: "Motorboat Unit", location: "Chowkidinghee", eta: "Active", statusColor: "#10b981" }
    ]
  },
  "Sivasagar": {
    district: "Sivasagar, Assam",
    division: "Upper Assam",
    riskLevel: "High",
    riskColor: "#f59e0b",
    coordinates: [26.9826, 94.6425],
    activeSos: 6,
    ongoingRescues: 3,
    peopleRescuedToday: 48,
    teamsDeployed: 4,
    river: "Dikhow River: Rising (2.8m)",
    rainfall: "128 mm",
    status: "Alert",
    activeSosList: [
      { id: "SOS-1108", priority: "MEDIUM", priorityClass: "orange", countBadge: "1", title: "Low-Lying Inundation", headcount: "Family of 3", location: "Joysagar Tank", coordinates: [26.9650, 94.6290], time: "10:05 AM", assignedTeam: "SDRF Unit 4", statusBadge: "On the way", eta: "15 min" }
    ],
    teams: [
      { team: "SDRF Unit 4", type: "Rescue Vehicle", location: "Joysagar", eta: "ETA: 15 min", statusColor: "#38bdf8" }
    ]
  },
  "Dhemaji": {
    district: "Dhemaji, Assam",
    division: "Upper Assam",
    riskLevel: "Critical",
    riskColor: "#ef4444",
    coordinates: [27.4844, 94.5949],
    activeSos: 14,
    ongoingRescues: 9,
    peopleRescuedToday: 110,
    teamsDeployed: 9,
    river: "Jiadhal & Subansiri Rivers: Flash Flood",
    rainfall: "210 mm (Torrential Rain)",
    status: "CRITICAL EMERGENCY",
    activeSosList: [
      { id: "SOS-1115", priority: "HIGH", priorityClass: "red", countBadge: "5", title: "Flash Surge Cut-off", headcount: "14 Villagers", location: "Silapathar Bank", coordinates: [27.6110, 94.7310], time: "09:30 AM", assignedTeam: "NDRF Air-Drop & Boat", statusBadge: "In Progress", eta: "Reached" }
    ],
    teams: [
      { team: "NDRF Air-Drop", type: "Helicopter & Boat", location: "Silapathar", eta: "Active Rescue", statusColor: "#ef4444" }
    ]
  },
  "Lakhimpur": {
    district: "Lakhimpur, Assam",
    division: "Upper Assam",
    riskLevel: "Critical",
    riskColor: "#ef4444",
    coordinates: [27.2374, 94.0954],
    activeSos: 11,
    ongoingRescues: 6,
    peopleRescuedToday: 95,
    teamsDeployed: 7,
    river: "Ranganadi River: Gate Release Overflow",
    rainfall: "195 mm",
    status: "High Alert",
    activeSosList: [
      { id: "SOS-1120", priority: "HIGH", priorityClass: "red", countBadge: "4", title: "Dam Release Water Surge", headcount: "10 Citizens", location: "North Lakhimpur", coordinates: [27.2550, 94.1190], time: "10:00 AM", assignedTeam: "SDRF Team 5", statusBadge: "On the way", eta: "12 min" }
    ],
    teams: [
      { team: "SDRF Team 5", type: "Motorboat", location: "North Lakhimpur", eta: "ETA: 12 min", statusColor: "#38bdf8" }
    ]
  },
  "Nagaon": {
    district: "Nagaon, Assam",
    division: "Central Assam",
    riskLevel: "Moderate",
    riskColor: "#f59e0b",
    coordinates: [26.3471, 92.6841],
    activeSos: 5,
    ongoingRescues: 2,
    peopleRescuedToday: 42,
    teamsDeployed: 4,
    river: "Kolong River: Stable (2.1m)",
    rainfall: "98 mm",
    status: "Moderate Risk",
    activeSosList: [],
    teams: []
  },
  "Kamrup Metropolitan": {
    district: "Kamrup Metropolitan (Guwahati), Assam",
    division: "Lower Assam",
    riskLevel: "Moderate",
    riskColor: "#38bdf8",
    coordinates: [26.1445, 91.7362],
    activeSos: 4,
    ongoingRescues: 2,
    peopleRescuedToday: 38,
    teamsDeployed: 5,
    river: "Brahmaputra (Guwahati Port): 48.2m",
    rainfall: "112 mm",
    status: "Urban Drainage Alert",
    activeSosList: [],
    teams: []
  },
  "Cachar": {
    district: "Cachar (Silchar), Assam",
    division: "Barak Valley",
    riskLevel: "Critical",
    riskColor: "#ef4444",
    coordinates: [24.8333, 92.7789],
    activeSos: 15,
    ongoingRescues: 10,
    peopleRescuedToday: 130,
    teamsDeployed: 11,
    river: "Barak River: Above Danger Mark (20.5m)",
    rainfall: "230 mm (Torrential Downpour)",
    status: "CRITICAL FLOOD SURGE",
    activeSosList: [],
    teams: []
  }
};

// Summary metrics across all 21 districts of Assam
const assamStateTotalMetrics = {
  totalDistricts: 21,
  criticalDistrictsCount: 4,
  highRiskDistrictsCount: 6,
  totalActiveSos: 94,
  totalOngoingRescues: 48,
  totalPeopleRescuedToday: 842,
  totalTeamsDeployed: 68,
  totalRescueAssets: 142,
  averageFuelStatus: "76%"
};

window.assamStateDistrictData = assamStateDistrictData;
window.assamStateTotalMetrics = assamStateTotalMetrics;
