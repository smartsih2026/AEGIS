/*
 * AEGIS Rescue Command System - Notifications & Communication Dedicated Data Matrix
 * Real-Time Emergency Alerts, Alert Coverage GIS Telemetry, Communication Channels & Broadcast History
 */

const rescueNotificationsData = {
  summaryKpis: {
    totalMessagesSent: "15,432",
    messagesSub: "↑ 18% vs yesterday",
    alertsSent: "342",
    alertsSub: "↑ 22% vs yesterday",
    citizensReached: "2.48 Lakh",
    citizensSub: "↑ 19% vs yesterday",
    successRate: "97.6%",
    successSub: "↑ 3% vs yesterday",
    pendingMessages: "18",
    pendingSub: "↓ 12% vs yesterday",
    commChannels: "7",
    channelsSub: "Active Channels"
  },

  // Primary Active Alerts & Notifications Table
  activeAlertsTable: [
    { type: "Evacuation Order", icon: "fa-person-walking-arrow-right", tColor: "#a78bfa", message: "Evacuate immediately from low lying areas. Move to nearest shelter.", severity: "Critical", sColor: "#ef4444", target: "Dibrugarh, Tinsukia", sentTime: "10:20 AM 12 Aug 2026", status: "Sent", stColor: "#10b981", reached: "48,756" },
    { type: "Flood Alert", icon: "fa-triangle-exclamation", tColor: "#ef4444", message: "Water level rising rapidly in Brahmaputra river. Avoid riverside areas.", severity: "High", sColor: "#f59e0b", target: "Guwahati, Cachar", sentTime: "09:45 AM 12 Aug 2026", status: "Delivered", stColor: "#10b981", reached: "1,24,890" },
    { type: "Heavy Rain Warning", icon: "fa-cloud-showers-heavy", tColor: "#38bdf8", message: "Heavy rainfall expected in next 6 hours. Stay indoors and stay safe.", severity: "Medium", sColor: "#eab308", target: "Nagaon, Morigaon", sentTime: "08:30 AM 12 Aug 2026", status: "Delivered", stColor: "#10b981", reached: "85,432" },
    { type: "Shelter Update", icon: "fa-house-chimney-medical", tColor: "#38bdf8", message: "New shelter opened at Mangaldoi School. Capacity: 500 people.", severity: "Info", sColor: "#38bdf8", target: "Mangaldoi", sentTime: "08:10 AM 12 Aug 2026", status: "Delivered", stColor: "#10b981", reached: "24,853" },
    { type: "Transport Update", icon: "fa-truck-field", tColor: "#10b981", message: "Rescue boats available at Neamati Ghat. Contact local authorities.", severity: "Info", sColor: "#38bdf8", target: "Jorhat", sentTime: "07:50 AM 12 Aug 2026", status: "Sent", stColor: "#10b981", reached: "12,654" }
  ],

  // Alert Coverage Map Statistics & District Pins
  districtAlertPins: [
    { district: "Dibrugarh", coords: [27.4845, 94.9019], level: "Critical", color: "#ef4444" },
    { district: "Tinsukia", coords: [27.4922, 95.3558], level: "Critical", color: "#ef4444" },
    { district: "Dhemaji", coords: [27.4844, 94.5949], level: "Critical", color: "#ef4444" },
    { district: "Lakhimpur", coords: [27.2374, 94.0954], level: "Critical", color: "#ef4444" },
    { district: "Cachar", coords: [24.8333, 92.7789], level: "Critical", color: "#ef4444" },
    { district: "Golaghat", coords: [26.5167, 93.9667], level: "High", color: "#f59e0b" },
    { district: "Jorhat", coords: [26.7578, 94.2080], level: "High", color: "#f59e0b" },
    { district: "Sivasagar", coords: [26.9826, 94.6425], level: "High", color: "#f59e0b" },
    { district: "Sonitpur", coords: [26.6338, 92.8000], level: "High", color: "#f59e0b" },
    { district: "Kamrup (M)", coords: [26.1445, 91.7362], level: "High", color: "#f59e0b" },
    { district: "Barpeta", coords: [26.3184, 90.9818], level: "High", color: "#f59e0b" },
    { district: "Dhubri", coords: [26.0190, 89.9911], level: "High", color: "#f59e0b" },
    { district: "Darrang", coords: [26.4497, 92.0294], level: "Medium", color: "#eab308" },
    { district: "Nagaon", coords: [26.3471, 92.6841], level: "Medium", color: "#eab308" },
    { district: "Morigaon", coords: [26.2573, 92.3377], level: "Medium", color: "#eab308" },
    { district: "Goalpara", coords: [26.1754, 90.6267], level: "Low", color: "#10b981" },
    { district: "Karimganj", coords: [24.8690, 92.3590], level: "Low", color: "#10b981" },
    { district: "Hailakandi", coords: [24.6885, 92.5738], level: "No Alert", color: "#38bdf8" }
  ],

  coverageStats: {
    criticalDistricts: "5 Districts",
    highDistricts: "7 Districts",
    mediumDistricts: "6 Districts",
    lowDistricts: "3 Districts",
    noAlertDistricts: "2 Districts"
  },

  // Active Communication Channels
  communicationChannels: [
    { channel: "SMS Gateway", status: "Active", rate: "96.2%", count: "2,48,932", icon: "fa-mobile-screen" },
    { channel: "Cell Broadcast", status: "Active", rate: "97.6%", count: "1,85,432", icon: "fa-satellite-dish" },
    { channel: "WhatsApp", status: "Active", rate: "95.8%", count: "1,12,786", icon: "fa-comments" },
    { channel: "Email", status: "Active", rate: "96.1%", count: "75,345", icon: "fa-envelope" },
    { channel: "IVR Call System", status: "Active", rate: "94.3%", count: "58,921", icon: "fa-phone-volume" },
    { channel: "FM Radio", status: "Active", rate: "93.7%", count: "48,332", icon: "fa-radio" },
    { channel: "Social Media", status: "Active", rate: "91.5%", count: "32,145", icon: "fa-share-nodes" }
  ],

  // Broadcast History Donut (72 Total)
  broadcastHistoryDonut: {
    total: 72,
    slices: [
      { type: "Evacuation Order", count: 18, pct: "25%", color: "#2563eb" },
      { type: "Flood Alert", count: 20, pct: "28%", color: "#ef4444" },
      { type: "Weather Warning", count: 15, pct: "21%", color: "#f59e0b" },
      { type: "Shelter Update", count: 12, pct: "17%", color: "#38bdf8" },
      { type: "Others", count: 7, pct: "9%", color: "#a78bfa" }
    ]
  },

  // Top Performing Areas Reach Bars
  topPerformingAreas: [
    { name: "Guwahati", pct: 98.5 },
    { name: "Dibrugarh", pct: 97.2 },
    { name: "Jorhat", pct: 96.8 },
    { name: "Tinsukia", pct: 95.9 },
    { name: "Nagaon", pct: 94.7 }
  ]
};

window.rescueNotificationsData = rescueNotificationsData;
