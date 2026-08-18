/**
 * AEGIS - AI-Powered Flood Emergency Response Platform
 * Master Assam Regional Dataset (All 20 Districts with Official Coordinates)
 */

window.AEGIS_DATA = {
  // All 20 Assam Districts across 4 Divisions with Official Coordinates
  districts: [
    // 📍 Upper Assam Division
    { id: "golaghat", name: "Golaghat", division: "Upper Assam", lat: 26.4049, lng: 94.0321, riskScore: 98, status: "Critical", waterLevel: "4.8m (+1.2m above danger)", peopleAffected: 45200, color: "#ef4444" },
    { id: "jorhat", name: "Jorhat", division: "Upper Assam", lat: 26.7578, lng: 94.2080, riskScore: 88, status: "High", waterLevel: "3.9m (+0.8m above danger)", peopleAffected: 28500, color: "#f97316" },
    { id: "dibrugarh", name: "Dibrugarh", division: "Upper Assam", lat: 27.4845, lng: 94.9019, riskScore: 85, status: "High", waterLevel: "3.6m (+0.6m above danger)", peopleAffected: 22400, color: "#f97316" },
    { id: "sivasagar", name: "Sivasagar", division: "Upper Assam", lat: 26.9826, lng: 94.6425, riskScore: 84, status: "High", waterLevel: "3.7m (+0.7m above danger)", peopleAffected: 24100, color: "#f97316" },
    { id: "tinsukia", name: "Tinsukia", division: "Upper Assam", lat: 27.5003, lng: 95.3622, riskScore: 68, status: "Moderate", waterLevel: "2.8m (Warning level)", peopleAffected: 15200, color: "#eab308" },
    { id: "dhemaji", name: "Dhemaji", division: "Upper Assam", lat: 27.4844, lng: 94.5949, riskScore: 82, status: "High", waterLevel: "3.5m (+0.5m above danger)", peopleAffected: 21000, color: "#f97316" },
    { id: "lakhimpur", name: "Lakhimpur", division: "Upper Assam", lat: 27.2374, lng: 94.0954, riskScore: 80, status: "High", waterLevel: "3.4m (+0.4m above danger)", peopleAffected: 19500, color: "#f97316" },

    // 📍 Central Assam Division
    { id: "nagaon", name: "Nagaon", division: "Central Assam", lat: 26.3471, lng: 92.6841, riskScore: 74, status: "Moderate", waterLevel: "2.9m (Warning level)", peopleAffected: 14760, color: "#eab308" },
    { id: "hojai", name: "Hojai", division: "Central Assam", lat: 26.0094, lng: 92.8488, riskScore: 65, status: "Moderate", waterLevel: "2.6m (Warning level)", peopleAffected: 9800, color: "#eab308" },
    { id: "morigaon", name: "Morigaon", division: "Central Assam", lat: 26.2573, lng: 92.3377, riskScore: 64, status: "Moderate", waterLevel: "2.5m (Warning level)", peopleAffected: 8900, color: "#eab308" },
    { id: "dima_hasao", name: "Dima Hasao", division: "Central Assam", lat: 25.4004, lng: 93.0752, riskScore: 45, status: "Low", waterLevel: "1.8m (Normal)", peopleAffected: 3200, color: "#38bdf8" },
    { id: "karbi_anglong", name: "East Karbi Anglong", division: "Central Assam", lat: 26.1362, lng: 93.5786, riskScore: 78, status: "High", waterLevel: "3.2m (+0.3m above danger)", peopleAffected: 19800, color: "#f97316" },

    // 📍 Lower & North Assam Divisions
    { id: "kamrup_metro", name: "Kamrup Metro (Guwahati)", division: "Lower Assam", lat: 26.1445, lng: 91.7362, riskScore: 62, status: "Moderate", waterLevel: "2.4m (Warning level)", peopleAffected: 7400, color: "#eab308" },
    { id: "darrang", name: "Darrang", division: "Lower Assam", lat: 26.4497, lng: 92.0294, riskScore: 66, status: "Moderate", waterLevel: "2.6m (Warning level)", peopleAffected: 7800, color: "#eab308" },
    { id: "barpeta", name: "Barpeta", division: "Lower Assam", lat: 26.3184, lng: 90.9818, riskScore: 42, status: "Low", waterLevel: "1.7m (Normal)", peopleAffected: 2900, color: "#38bdf8" },
    { id: "sonitpur", name: "Sonitpur", division: "North Assam", lat: 26.7562, lng: 92.8532, riskScore: 60, status: "Moderate", waterLevel: "2.3m (Warning level)", peopleAffected: 6200, color: "#eab308" },
    { id: "dhubri", name: "Dhubri", division: "Lower Assam", lat: 26.0190, lng: 89.9911, riskScore: 38, status: "Low", waterLevel: "1.5m (Normal)", peopleAffected: 1800, color: "#38bdf8" },
    { id: "goalpara", name: "Goalpara", division: "Lower Assam", lat: 26.1784, lng: 90.6227, riskScore: 36, status: "Low", waterLevel: "1.4m (Normal)", peopleAffected: 1500, color: "#38bdf8" },

    // 📍 Barak Valley Division
    { id: "cachar", name: "Cachar", division: "Barak Valley", lat: 24.8333, lng: 92.7789, riskScore: 40, status: "Low", waterLevel: "1.6m (Normal)", peopleAffected: 2100, color: "#38bdf8" },
    { id: "hailakandi", name: "Hailakandi", division: "Barak Valley", lat: 24.6885, lng: 92.5738, riskScore: 35, status: "Low", waterLevel: "1.3m (Normal)", peopleAffected: 1200, color: "#38bdf8" },
    { id: "karimganj", name: "Karimganj", division: "Barak Valley", lat: 24.8649, lng: 92.3592, riskScore: 34, status: "Low", waterLevel: "1.2m (Normal)", peopleAffected: 1100, color: "#38bdf8" }
  ],

  // Relief Camps Dataset
  shelters: [
    { id: "SH-101", name: "Golaghat Degree College Camp", district: "Golaghat", lat: 26.3980, lng: 94.0200, capacity: 500, occupied: 318, facilities: ["Medical Station", "Clean Water", "Power Backup", "Infant Care"], phone: "+91 94350 12345" },
    { id: "SH-102", name: "Jorhat JB College Relief Center", district: "Jorhat", lat: 26.7500, lng: 94.2000, capacity: 400, occupied: 250, facilities: ["Medical Team", "Food Distribution"], phone: "+91 94350 67890" },
    { id: "SH-103", name: "Sivasagar Town Hall Shelter", district: "Sivasagar", lat: 26.9800, lng: 94.6400, capacity: 350, occupied: 210, facilities: ["Boats Stationed", "Doctor on Duty"], phone: "+91 94350 99887" },
    { id: "SH-104", name: "Nagaon Koliabor High School", district: "Nagaon", lat: 26.3400, lng: 92.6800, capacity: 300, occupied: 176, facilities: ["Dry Rations", "Clean Water"], phone: "+91 94350 44332" },
    { id: "SH-105", name: "Dibrugarh Multi-purpose Shelter", district: "Dibrugarh", lat: 27.4800, lng: 94.9000, capacity: 450, occupied: 280, facilities: ["Medical Bay", "Helipad Access"], phone: "+91 94350 33221" }
  ],

  // Initial Real SOS Reports
  initialSOS: [
    {
      id: "SOS-1087",
      citizenName: "Ravi Das & Family",
      phone: "+91 98765 43210",
      location: { district: "Golaghat", ward: "Ward 4, Near Dhansiri River", lat: 26.4049, lng: 94.0321 },
      emergencyType: "Trapped / Water Level Rising",
      familyMembers: 5,
      description: "Water entered first floor. 2 elderly members and 1 infant trapped on roof. Need immediate boat rescue.",
      aiPriorityScore: 95,
      priorityLevel: "Critical",
      status: "NEW",
      timestamp: "10:22 AM"
    },
    {
      id: "SOS-1084",
      citizenName: "Priya Baruah",
      phone: "+91 98765 11223",
      location: { district: "Sivasagar", ward: "Dikhow Embankment West", lat: 26.9826, lng: 94.6425 },
      emergencyType: "Medical Emergency",
      familyMembers: 3,
      description: "Elderly mother needs insulin evacuation immediately due to flooded road.",
      aiPriorityScore: 88,
      priorityLevel: "High",
      status: "NEW",
      timestamp: "09:55 AM"
    },
    {
      id: "SOS-1082",
      citizenName: "Manash Phukan",
      phone: "+91 98765 55443",
      location: { district: "Jorhat", ward: "Nimati Ghat Road", lat: 26.7578, lng: 94.2080 },
      emergencyType: "Food & Water Needed",
      familyMembers: 8,
      description: "Stranded on high ground for 14 hours. Food packet and drinking water needed.",
      aiPriorityScore: 76,
      priorityLevel: "High",
      status: "ACCEPTED",
      dispatchInfo: { teamName: "NDRF Team-2", vehicle: "Rescue Boat-1", targetShelter: "Jorhat JB College Camp", etaMinutes: 15 },
      timestamp: "09:30 AM"
    }
  ],

  // Ticker Live Updates
  liveUpdates: [
    { text: "Water level rising rapidly in Golaghat Dhansiri basin", time: "10:25 AM", icon: "fa-water", color: "#ef4444" },
    { text: "NH-715 submerged near Nimati Ghat, Jorhat", time: "09:48 AM", icon: "fa-road-barrier", color: "#f59e0b" },
    { text: "Relief Camp SH-104 opened in Nagaon Koliabor", time: "09:15 AM", icon: "fa-campground", color: "#10b981" },
    { text: "NDRF 1st Battalion deployed 4 additional boats to Karbi Anglong", time: "08:40 AM", icon: "fa-truck-medical", color: "#3b82f6" }
  ]
};

/**
 * Aegis Data Service (Reactive Store with BroadcastChannel Sync)
 */
class AegisDataService {
  constructor() {
    this.storageKey = "aegis_emergency_store_v3";
    this.channelName = "aegis_emergency_channel";
    this.listeners = [];

    this.store = this.loadStore();

    if ('BroadcastChannel' in window) {
      this.channel = new BroadcastChannel(this.channelName);
      this.channel.onmessage = (event) => {
        if (event.data && event.data.type === "SYNC") {
          this.store = event.data.store;
          this.notifyListeners();
        }
      };
    }

    window.addEventListener('storage', (e) => {
      if (e.key === this.storageKey && e.newValue) {
        this.store = JSON.parse(e.newValue);
        this.notifyListeners();
      }
    });
  }

  loadStore() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (err) {
        console.error("Failed to parse saved store:", err);
      }
    }

    const initial = {
      districts: window.AEGIS_DATA.districts,
      shelters: window.AEGIS_DATA.shelters,
      sosReports: window.AEGIS_DATA.initialSOS,
      liveUpdates: window.AEGIS_DATA.liveUpdates
    };

    localStorage.setItem(this.storageKey, JSON.stringify(initial));
    return initial;
  }

  saveAndBroadcast() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.store));
    if (this.channel) {
      this.channel.postMessage({ type: "SYNC", store: this.store });
    }
    this.notifyListeners();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    listener(this.store);
  }

  notifyListeners() {
    this.listeners.forEach(fn => fn(this.store));
  }

  getStore() {
    return this.store;
  }

  // Calculate AI Priority Score (0–100)
  calculateAIPriorityScore({ emergencyType, familyMembers, districtName }) {
    let base = 50;

    if (emergencyType.includes("Trapped") || emergencyType.includes("Water Level")) base += 30;
    else if (emergencyType.includes("Medical")) base += 25;
    else if (emergencyType.includes("Elderly") || emergencyType.includes("Infant")) base += 20;
    else base += 10;

    const count = parseInt(familyMembers, 10) || 1;
    if (count >= 6) base += 15;
    else if (count >= 3) base += 10;

    if (districtName === "Golaghat") base += 10;
    else if (districtName === "Jorhat" || districtName === "Sivasagar" || districtName === "Dibrugarh" || districtName === "Dhemaji") base += 8;

    const score = Math.min(99, Math.max(25, base));
    const level = score >= 85 ? "Critical" : score >= 65 ? "High" : "Moderate";

    return { score, level };
  }

  // Submit SOS
  submitSOS({ citizenName, phone, location, emergencyType, familyMembers, description }) {
    const { score, level } = this.calculateAIPriorityScore({
      emergencyType,
      familyMembers,
      districtName: location.district
    });

    const newSOS = {
      id: `SOS-${Math.floor(1000 + Math.random() * 9000)}`,
      citizenName,
      phone,
      location,
      emergencyType,
      familyMembers: parseInt(familyMembers, 10),
      description,
      aiPriorityScore: score,
      priorityLevel: level,
      status: "NEW",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    this.store.sosReports.unshift(newSOS);
    this.saveAndBroadcast();
    return newSOS;
  }

  // Dispatch Rescue
  dispatchRescue(sosId, dispatchInfo) {
    const report = this.store.sosReports.find(s => s.id === sosId);
    if (report) {
      report.status = "ACCEPTED";
      report.dispatchInfo = dispatchInfo;
      this.saveAndBroadcast();
    }
  }
}

window.aegisDataService = new AegisDataService();
