/*
 * AEGIS Rescue Command System - Advanced AI Recommendation & Multi-Sensor Telemetry Matrix
 * Integrates GIS Mesh, Elevation Projections, SOS Clusters, River Hydrographs & Autonomous Resource Allocation
 */

const rescuePriorityData = {
  summaryMetrics: {
    criticalZones: 3,
    peopleAtRisk: "1,19,175",
    peopleAtRiskChange: "+12% from previous update",
    activeSos: 108,
    activeSosChange: "+18% in last 3 hours",
    shelterOccupancy: "78%",
    shelterNote: "Near Capacity in 5 Shelters",
    resourcesDeployed: 28,
    resourcesNote: "Across 8 Districts"
  },

  districtRankings: [
    { rank: 1, id: "Golaghat", name: "Golaghat", riskScore: 92, severity: "Critical", severityClass: "red", activeSos: 42, peopleAffected: "35,000", trend: "↗" },
    { rank: 2, id: "Jorhat", name: "Jorhat", riskScore: 87, severity: "High", severityClass: "orange", activeSos: 31, peopleAffected: "24,000", trend: "↗" },
    { rank: 3, id: "Sivasagar", name: "Sivasagar", riskScore: 84, severity: "High", severityClass: "orange", activeSos: 26, peopleAffected: "18,000", trend: "↗" },
    { rank: 4, id: "Darrang", name: "Darrang", riskScore: 79, severity: "Moderate", severityClass: "yellow", activeSos: 18, peopleAffected: "12,000", trend: "↗" },
    { rank: 5, id: "Nagaon", name: "Nagaon", riskScore: 72, severity: "Moderate", severityClass: "yellow", activeSos: 15, peopleAffected: "10,000", trend: "↗" },
    { rank: 6, id: "Dibrugarh", name: "Dibrugarh", riskScore: 68, severity: "Moderate", severityClass: "yellow", activeSos: 14, peopleAffected: "9,500", trend: "↗" },
    { rank: 7, id: "Tinsukia", name: "Tinsukia", riskScore: 66, severity: "Moderate", severityClass: "yellow", activeSos: 12, peopleAffected: "8,900", trend: "↗" },
    { rank: 8, id: "Dhemaji", name: "Dhemaji", riskScore: 63, severity: "Moderate", severityClass: "yellow", activeSos: 10, peopleAffected: "7,800", trend: "↗" },
    { rank: 9, id: "Lakhimpur", name: "Lakhimpur", riskScore: 60, severity: "Medium", severityClass: "green", activeSos: 9, peopleAffected: "6,700", trend: "↗" },
    { rank: 10, id: "Guwahati", name: "Guwahati (Kamrup M)", riskScore: 52, severity: "Low", severityClass: "green", activeSos: 6, peopleAffected: "4,200", trend: "→" }
  ],

  // Advanced AI Telemetry with GIS Coordinates, Elevation Projections & Multi-Sensor Fusion
  districtDetails: {
    "Golaghat": {
      name: "Golaghat",
      riskScore: 92,
      severity: "Critical Priority",
      severityColor: "#ef4444",
      riskContributors: [
        { label: "Water Level (Dhansiri)", val: "30%", color: "#ef4444" },
        { label: "GIS Inundation Speed", val: "25%", color: "#ef4444" },
        { label: "SOS Request Density", val: "20%", color: "#f59e0b" },
        { label: "Population Exposure", val: "15%", color: "#38bdf8" },
        { label: "Shelter Capacity Stress", val: "10%", color: "#10b981" }
      ],
      aiAction: {
        priorityTitle: "Priority #1: Golaghat Sector",
        aiEngineModel: "AEGIS-v4 Neural Engine (98.4% Confidence)",
        threatSummary: "Dhansiri River surge @ 26.4049°N, 94.0321°E expanding @ 0.4 km/h into low-elevation terrain.",
        reasons: [
          "42 SOS distress signals clustered within 1.2km radius of Zone A",
          "Dhansiri hydrograph breached critical 12.5m danger mark by +0.3m",
          "Golaghat Degree College Shelter @ 87% occupancy — overflow risk in 45 mins",
          "Satellite elevation mesh projects 100% submersion of Zone A by 01:40 PM"
        ],
        suggested: [
          "🚤 Dispatch 2 NDRF Inflatable Motorboats via Highway 37 bypass",
          "🚑 Deploy 1 Mobile Field Ambulance at Kabori Bridgehead",
          "🚁 Launch 1 Thermal Drone for aerial survivor scanning",
          "⛺ Reroute 14 evacuees to Dergaon Secondary Shelter"
        ],
        etaImpact: "⚡ 34 stranded citizens reachable within 18 minutes via Boat Route B"
      },
      zones: [
        { name: "Zone A (Ward 4-7)", status: "Critical", statusColor: "#ef4444", sos: 18, water: "5.2 m", affected: "12,500", resource: "2 Inflatable Boats" },
        { name: "Zone B (Dergaon Rd)", status: "High", statusColor: "#f59e0b", sos: 11, water: "4.8 m", affected: "8,200", resource: "Shelter Overflow Reroute" },
        { name: "Zone C (Kabori Pul)", status: "Moderate", statusColor: "#eab308", sos: 6, water: "4.1 m", affected: "6,800", resource: "Medical Aid Kit" }
      ]
    },

    "Jorhat": {
      name: "Jorhat",
      riskScore: 87,
      severity: "High Priority",
      severityColor: "#f59e0b",
      riskContributors: [
        { label: "Water Level (Bhogdoi)", val: "28%", color: "#f59e0b" },
        { label: "GIS Elevation Flood Mesh", val: "24%", color: "#f59e0b" },
        { label: "SOS Request Density", val: "22%", color: "#f59e0b" },
        { label: "Population Exposure", val: "16%", color: "#38bdf8" },
        { label: "Shelter Capacity Stress", val: "10%", color: "#10b981" }
      ],
      aiAction: {
        priorityTitle: "Priority #2: Jorhat Sector",
        aiEngineModel: "AEGIS-v4 Neural Engine (96.8% Confidence)",
        threatSummary: "Bhogdoi river breach near Tarajan (26.7578°N, 94.2080°E) causing road cut-off.",
        reasons: [
          "31 active SOS requests including 4 elderly medical emergencies",
          "Bhogdoi water level rising at 0.15m/hr toward critical threshold",
          "Main arterial access road submerged under 1.8m water depth",
          "Jorhat JB College Relief Center operating at 75% capacity"
        ],
        suggested: [
          "🚤 Dispatch 3 SDRF High-Speed Rescue Motorboats",
          "👨‍⚕️ Send 1 Emergency Medical Response Squad",
          "📦 Air-drop 200 High-Calorie Ration Crates to isolated pockets"
        ],
        etaImpact: "⚡ 28 citizens reachable within 15 minutes via Water Route Alpha"
      },
      zones: [
        { name: "Tarajan Zone", status: "Critical", statusColor: "#ef4444", sos: 14, water: "4.9 m", affected: "10,200", resource: "3 Motorboats" },
        { name: "Rowriah Block", status: "High", statusColor: "#f59e0b", sos: 10, water: "4.2 m", affected: "7,500", resource: "Food Ration Crates" },
        { name: "Bhogdoi Sector", status: "Moderate", statusColor: "#eab308", sos: 7, water: "3.8 m", affected: "6,300", resource: "108 Ambulance Unit" }
      ]
    },

    "Sivasagar": {
      name: "Sivasagar",
      riskScore: 84,
      severity: "High Priority",
      severityColor: "#f59e0b",
      riskContributors: [
        { label: "Water Level (Dikhow)", val: "26%", color: "#f59e0b" },
        { label: "GIS Elevation Flood Mesh", val: "22%", color: "#f59e0b" },
        { label: "SOS Request Density", val: "25%", color: "#ef4444" },
        { label: "Population Exposure", val: "17%", color: "#38bdf8" },
        { label: "Shelter Capacity Stress", val: "10%", color: "#10b981" }
      ],
      aiAction: {
        priorityTitle: "Priority #3: Sivasagar Sector",
        aiEngineModel: "AEGIS-v4 Neural Engine (95.2% Confidence)",
        threatSummary: "Dikhow river overflow at Joysagar (26.9826°N, 94.6425°E) breaching embankment buffer.",
        reasons: [
          "26 SOS requests with 2 high-priority infant care alerts",
          "Dikhow river water level elevated +0.7m above warning mark",
          "Submerged paddy farmland threatening agricultural hamlets",
          "Sivasagar Town Hall Shelter equipped with stationed boat backup"
        ],
        suggested: [
          "🚤 Dispatch 2 Medium Duty Rescue Motorboats",
          "🩺 Deploy 1 Pediatric & Maternal Medical Team",
          "💧 Supply 500L Clean Drinking Water Canisters"
        ],
        etaImpact: "⚡ 22 citizens reachable within 20 minutes via Dikhow Navigation Canal"
      },
      zones: [
        { name: "Dikhow Ward", status: "High", statusColor: "#f59e0b", sos: 12, water: "4.5 m", affected: "8,400", resource: "2 Rescue Motorboats" },
        { name: "Joysagar Zone", status: "High", statusColor: "#f59e0b", sos: 9, water: "4.1 m", affected: "5,800", resource: "Drinking Water Supply" },
        { name: "Town Sector", status: "Moderate", statusColor: "#eab308", sos: 5, water: "3.5 m", affected: "3,800", resource: "Infant Care Kits" }
      ]
    },

    "Darrang": {
      name: "Darrang",
      riskScore: 79,
      severity: "Moderate Priority",
      severityColor: "#eab308",
      riskContributors: [
        { label: "Water Level (Mangaldai)", val: "25%", color: "#eab308" },
        { label: "GIS Flood Propagation", val: "20%", color: "#eab308" },
        { label: "SOS Request Density", val: "20%", color: "#eab308" },
        { label: "Population Exposure", val: "22%", color: "#38bdf8" },
        { label: "Shelter Capacity Stress", val: "13%", color: "#10b981" }
      ],
      aiAction: {
        priorityTitle: "Priority #4: Darrang Sector",
        aiEngineModel: "AEGIS-v4 Neural Engine (94.0% Confidence)",
        threatSummary: "Mangaldai riverbank overflow (26.4497°N, 92.0294°E) threatening rural villages.",
        reasons: [
          "18 active distress dispatches centered near Kalaigaon road",
          "Submerged rural access tracks requiring high-clearance rescue vehicles",
          "Local relief center operating at stable 60% capacity"
        ],
        suggested: [
          "🚛 Dispatch 1 High-Clearance 4x4 Rescue Truck",
          "👨‍⚕️ Deploy 1 Mobile Paramedic Unit",
          "📡 Establish Mobile SatCom Relay Post"
        ],
        etaImpact: "⚡ 18 citizens reachable within 25 minutes via Highway 15 Corridor"
      },
      zones: [
        { name: "Mangaldai North", status: "High", statusColor: "#f59e0b", sos: 8, water: "4.0 m", affected: "5,200", resource: "4x4 Rescue Truck" },
        { name: "Kalaigaon Zone", status: "Moderate", statusColor: "#eab308", sos: 6, water: "3.4 m", affected: "4,100", resource: "Mobile Paramedic Unit" },
        { name: "Sipajhar Outpost", status: "Moderate", statusColor: "#eab308", sos: 4, water: "3.0 m", affected: "2,700", resource: "Ration Packets" }
      ]
    },

    "Nagaon": {
      name: "Nagaon",
      riskScore: 72,
      severity: "Moderate Priority",
      severityColor: "#eab308",
      riskContributors: [
        { label: "Water Level (Kolong)", val: "22%", color: "#eab308" },
        { label: "GIS Elevation Flood Mesh", val: "20%", color: "#eab308" },
        { label: "SOS Request Density", val: "18%", color: "#eab308" },
        { label: "Population Exposure", val: "25%", color: "#38bdf8" },
        { label: "Shelter Capacity Stress", val: "15%", color: "#10b981" }
      ],
      aiAction: {
        priorityTitle: "Priority #5: Nagaon Sector",
        aiEngineModel: "AEGIS-v4 Neural Engine (93.5% Confidence)",
        threatSummary: "Kolong river water level stable at warning threshold (26.3471°N, 92.6841°E).",
        reasons: [
          "15 active requests requiring food and dry shelter assistance",
          "Embankment structural integrity monitored at 85% stability",
          "Koliabor High School Shelter operating at 58% capacity"
        ],
        suggested: [
          "🚔 Deploy 1 Embankment Inspection Patrol",
          "📦 Dispatch 1 Relief Supply Van with 150 Dry Rations"
        ],
        etaImpact: "⚡ 15 citizens supported within 30 minutes"
      },
      zones: [
        { name: "Kolong Bank", status: "Moderate", statusColor: "#eab308", sos: 7, water: "3.6 m", affected: "4,800", resource: "Inspection Patrol" },
        { name: "Raha Sector", status: "Moderate", statusColor: "#eab308", sos: 5, water: "3.1 m", affected: "3,200", resource: "Relief Supply Van" },
        { name: "Koliabor Block", status: "Low Risk", statusColor: "#38bdf8", sos: 3, water: "2.5 m", affected: "2,000", resource: "Clean Water Tanks" }
      ]
    }
  },

  zoneDistribution: {
    total: 100,
    critical: { count: 12, pct: "12%" },
    high: { count: 21, pct: "21%" },
    medium: { count: 35, pct: "35%" },
    low: { count: 24, pct: "24%" },
    veryLow: { count: 8, pct: "8%" }
  },

  resourceDemandForecast: [
    { name: "Boats", val: 12 },
    { name: "Ambulances", val: 8 },
    { name: "Medical Teams", val: 10 },
    { name: "Relief Material", val: 15 }
  ],

  shelterUsage: {
    occupiedPct: 78,
    availablePct: 22
  }
};

window.rescuePriorityData = rescuePriorityData;
