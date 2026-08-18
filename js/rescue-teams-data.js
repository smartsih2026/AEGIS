/*
 * AEGIS Rescue Command System - Team Management Dedicated Data Matrix
 * Real-Time Rescue Personnel Telemetry, Deployed Teams, Operational Units, Skill Certifications & Vehicle Inventories
 */

const rescueTeamsData = {
  summaryKpis: {
    totalPersonnel: "1,248",
    personnelSub: "+32 Today",
    activeTeams: "84",
    teamsSub: "+6 Deployed",
    vehicles: "156",
    vehiclesSub: "+8 On Mission",
    operationalUnits: "12",
    unitsSub: "+1 New Unit",
    onDuty: "1,036",
    dutySub: "83% of Total",
    available: "212",
    availSub: "17% of Total"
  },

  // Team Deployment Overview Donut (84 Total Teams)
  deploymentDonut: {
    total: 84,
    slices: [
      { status: "On Mission", count: 42, pct: "50%", color: "#2563eb" },
      { status: "En Route", count: 18, pct: "21%", color: "#38bdf8" },
      { status: "On Standby", count: 10, pct: "12%", color: "#f59e0b" },
      { status: "At Base", count: 9, pct: "11%", color: "#a78bfa" },
      { status: "Offline", count: 5, pct: "6%", color: "#ef4444" }
    ]
  },

  // Team Status Overview Cards Stack
  statusOverview: [
    { status: "On Mission", teams: 42, personnel: 505, color: "#10b981", icon: "fa-shield-halved" },
    { status: "En Route", teams: 18, personnel: 211, color: "#38bdf8", icon: "fa-person-walking" },
    { status: "On Standby", teams: 10, personnel: 132, color: "#f59e0b", icon: "fa-pause" },
    { status: "At Base", teams: 9, personnel: 98, color: "#a78bfa", icon: "fa-building" },
    { status: "Offline", teams: 5, personnel: 52, color: "#ef4444", icon: "fa-power-off" }
  ],

  // Operational Units Table
  operationalUnitsList: [
    { name: "NDRF Unit - 01", type: "NDRF", teams: 8, personnel: 96, status: "Active", color: "#10b981" },
    { name: "NDRF Unit - 02", type: "NDRF", teams: 6, personnel: 72, status: "Active", color: "#10b981" },
    { name: "SDRF Unit - Assam", type: "SDRF", teams: 10, personnel: 120, status: "Active", color: "#10b981" },
    { name: "Fire & Rescue Unit", type: "Fire", teams: 6, personnel: 68, status: "Active", color: "#10b981" },
    { name: "Medical Response Unit", type: "Medical", teams: 8, personnel: 104, status: "Active", color: "#10b981" },
    { name: "Maritime Rescue Unit", type: "Marine", teams: 4, personnel: 48, status: "Active", color: "#10b981" },
    { name: "Air Support Unit", type: "Air Support", teams: 3, personnel: 36, status: "Standby", color: "#f59e0b" },
    { name: "Drone Surveillance Unit", type: "Drone", teams: 2, personnel: 20, status: "Active", color: "#10b981" },
    { name: "Logistics Support Unit", type: "Logistics", teams: 3, personnel: 24, status: "Active", color: "#10b981" },
    { name: "Communication Unit", type: "Comms", teams: 2, personnel: 16, status: "Active", color: "#10b981" },
    { name: "Engineering Unit", type: "Engineer", teams: 2, personnel: 16, status: "Standby", color: "#f59e0b" },
    { name: "Animal Rescue Unit", type: "Rescue", teams: 2, personnel: 12, status: "Active", color: "#10b981" }
  ],

  // Primary Deployed Teams Table
  deployedTeamsTable: [
    { id: "T-001", name: "Golaghat Rescue Team", unit: "NDRF Unit - 01", leader: "Inspector R. Das", personnel: 12, status: "On Mission", sColor: "#10b981", location: "Golaghat, Zone A", eta: "10 min", progress: 60 },
    { id: "T-002", name: "Jorhat Medical Team", unit: "Medical Response Unit", leader: "Dr. M. Ahmed", personnel: 8, status: "On Mission", sColor: "#10b981", location: "Jorhat, Zone B", eta: "15 min", progress: 75 },
    { id: "T-003", name: "Darrang Boat Team", unit: "SDRF Unit - Assam", leader: "SI P. Barman", personnel: 10, status: "En Route", sColor: "#38bdf8", location: "En Route to Darrang", eta: "12 min", progress: 40 },
    { id: "T-004", name: "Nagaon Relief Team", unit: "NDRF Unit - 02", leader: "Inspector A. Singh", personnel: 12, status: "On Mission", sColor: "#10b981", location: "Nagaon, Zone C", eta: "8 min", progress: 80 },
    { id: "T-005", name: "Sivasagar Evac Team", unit: "SDRF Unit - Assam", leader: "SI L. Saikia", personnel: 10, status: "On Mission", sColor: "#10b981", location: "Sivasagar, Zone A", eta: "20 min", progress: 55 },
    { id: "T-006", name: "Tinsukia Support Team", unit: "Logistics Support Unit", leader: "ASI K. Das", personnel: 6, status: "At Base", sColor: "#a78bfa", location: "Tinsukia Base Camp", eta: "—", progress: 0 },
    { id: "T-007", name: "Morigaon Response", unit: "Fire & Rescue Unit", leader: "FSO B. Kalita", personnel: 8, status: "En Route", sColor: "#38bdf8", location: "En Route to Morigaon", eta: "18 min", progress: 30 },
    { id: "T-008", name: "Dibrugarh Drone Team", unit: "Drone Surveillance Unit", leader: "Tech. R. Gogoi", personnel: 5, status: "On Standby", sColor: "#f59e0b", location: "Dibrugarh Base", eta: "—", progress: 0 }
  ],

  // Personnel Summary Donut
  personnelSummaryDonut: {
    total: 1248,
    slices: [
      { label: "On Mission", count: 505, pct: "40%", color: "#2563eb" },
      { label: "En Route", count: 211, pct: "17%", color: "#38bdf8" },
      { label: "On Standby", count: 132, pct: "11%", color: "#f59e0b" },
      { label: "At Base", count: 244, pct: "20%", color: "#a78bfa" },
      { label: "Offline", count: 156, pct: "12%", color: "#ef4444" }
    ]
  },

  // Certification & Skills Breakdown (Horizontal Bars)
  skillsBreakdown: [
    { skill: "Swift Water Rescue", count: 412, color: "#2563eb" },
    { skill: "First Aid / Medical", count: 386, color: "#ec4899" },
    { skill: "Boat Operations", count: 352, color: "#38bdf8" },
    { skill: "Search & Rescue", count: 328, color: "#10b981" },
    { skill: "Drone Operations", count: 196, color: "#f59e0b" },
    { skill: "Hazmat Response", count: 102, color: "#a78bfa" }
  ],

  // Vehicle Management Cards & Status Bar
  vehicleManagement: {
    types: [
      { name: "Rescue Boats", count: 36, onMission: 22, icon: "fa-sailboat", color: "#38bdf8" },
      { name: "Ambulances", count: 24, onMission: 12, icon: "fa-truck-medical", color: "#ef4444" },
      { name: "Rescue Trucks", count: 28, onMission: 14, icon: "fa-truck-field", color: "#f59e0b" },
      { name: "Helicopters", count: 6, onMission: 3, icon: "fa-helicopter", color: "#eab308" },
      { name: "Drones", count: 18, onMission: 9, icon: "fa-drone", color: "#a78bfa" }
    ],
    status: {
      onMission: "60 (38%)",
      available: "52 (33%)",
      maintenance: "18 (12%)",
      inactive: "26 (17%)"
    }
  },

  // Upcoming Assignments
  upcomingAssignments: [
    { id: "A-101", title: "Flood Rescue - Golaghat Zone B", time: "Today, 11:00 AM", unit: "NDRF Unit - 01", priority: "High Priority", color: "#ef4444" },
    { id: "A-102", title: "Medical Aid - Jorhat Zone A", time: "Today, 12:00 PM", unit: "Medical Unit", priority: "High Priority", color: "#ef4444" },
    { id: "A-103", title: "Evacuation - Darrang Villages", time: "Today, 01:00 PM", unit: "SDRF Unit - Assam", priority: "Medium Priority", color: "#f59e0b" },
    { id: "A-104", title: "Relief Supply Drop - Nagaon", time: "Today, 02:00 PM", unit: "Logistics Unit", priority: "Medium Priority", color: "#f59e0b" },
    { id: "A-105", title: "Boat Patrol - Sivasagar River", time: "Today, 03:00 PM", unit: "Marine Unit", priority: "Low Priority", color: "#10b981" }
  ],

  // AI Recommendations
  aiRecommendations: [
    { text: "Deploy 2 more boat teams to Golaghat (Zone B)", priority: "High Priority", color: "#ef4444" },
    { text: "Medical team recommended for Jorhat (High SOS volume)", priority: "High Priority", color: "#ef4444" },
    { text: "Reassign nearby team from Nagaon to Darrang", priority: "Medium Priority", color: "#f59e0b" },
    { text: "Fuel levels low in 3 rescue boats. Refuel required.", priority: "Low Priority", color: "#10b981" }
  ]
};

window.rescueTeamsData = rescueTeamsData;
