# 🏆 AEGIS: Complete SIH Jury Live Demo & Pitching Script

**Project Name:** AEGIS — AI-Powered Flood Response & Tactical Rescue Platform  
**Target:** Smart India Hackathon (SIH) Jury Presentation  
**Presentation Style:** Simple Terminology, Step-by-Step Live Website Demonstration  

---

## 🎬 10-Minute Presentation Timeline

```
┌──────────────────────────────────────┬──────────┬──────────────────────────────────────────────┐
│ Stage                                │ Time     │ What You Show & Say                          │
├──────────────────────────────────────┼──────────┼──────────────────────────────────────────────┤
│ 1. Introduction & The Assam Crisis   │ 1.0 min  │ Flood problem in Assam & communication loss. │
│ 2. Step 1: Sign in with Google       │ 1.0 min  │ Open index.html & login with Google.        │
│ 3. Step 2: Sending Emergency SOS     │ 1.5 mins │ Submit SOS on citizen-sos.html (Waiting).    │
│ 4. Step 3: Real-Time Rescue Alert    │ 2.5 mins │ Switch tab to Rescue Desk & Accept SOS.      │
│ 5. Step 4: Instant Live GPS Tracking │ 1.5 mins │ Show automatic speedboat tracking unlock.    │
│ 6. Step 5: Groq AI Emergency Brain   │ 1.5 mins │ Test live AI chat on citizen-ai.html.        │
│ 7. Step 6: Tactical Route & Summary  │ 1.0 min  │ Show new tab route & closing pitch for ASDMA.│
└──────────────────────────────────────┴──────────┴──────────────────────────────────────────────┘
```

---

## 🚀 Step-by-Step Live Website Walkthrough Script

### 📍 Step 1: Citizen Sign In with Google (`index.html`)
* **On Screen:** Open `http://localhost:8085/index.html`.
* **Action:** Click **"Citizen Access"** button &rarr; Click **"Sign in with Google"**.
* **What to Say:**
  > *"Respected Jury members, during floods, citizens need a fast, zero-friction way to request help without filling long forms. On the AEGIS landing page, a citizen simply clicks **Sign in with Google**.*
  > 
  > *AEGIS instantly logs them in using Google Authentication and loads their profile name, email, and Google profile picture across the entire portal."*

---

### 📍 Step 2: Submitting Distress SOS Report (`citizen-sos.html`)
* **On Screen:** AEGIS redirects to the **Citizen SOS Page** (`citizen-sos.html`).
* **Action:** 
  1. Point to the GPS map (auto-detected location: Golaghat, Ward 4).
  2. Point to the headcount (5 People, 2 Children).
  3. Click **"Send SOS Report"**.
* **What to Say:**
  > *"Here, Ravi Das is trapped on his roof with 5 family members. He clicks **Send SOS Report**. Notice what happens immediately:*
  > 
  > *AEGIS locks in an active distress ticket **SOS-1088** and displays a live waiting banner: **`⏳ WAITING FOR RESCUE TEAM APPROVAL`**.*
  > 
  > *The citizen is not left wondering if anyone received his call — he knows his distress signal has been transmitted to the NDRF Command Desk."*

---

### 📍 Step 3: Real-Time Rescue Alert & Deployment (`rescue-dashboard.html`)
* **On Screen:** Press `Ctrl + Tab` to switch to **Tab 2** (`rescue-dashboard.html` or `rescue-sos.html`).
* **Action:** Point out the **Urgent Red Emergency Modal** that pops up dynamically with sound alarm across the screen!
* **What to Say:**
  > *"Now let's switch over to the Rescue Commander's screen in the Control Room.*
  > 
  > *No matter which page the Rescue Officer is currently viewing, AEGIS instantly triggers a high-priority **Red Emergency Alarm**:*
  > * 🚨 **CRITICAL CITIZEN SOS RECEIVED (SOS-1088)**
  > * **Location:** `Golaghat District, Ward 4`
  > * **Trapped:** `5 People (2 Children)`
  > 
  > *The Commander clicks **`[ 🚀 Accept & Deploy Rescue Team ]`**."*
* **Action:** Click the **`[ 🚀 Accept & Deploy Rescue Team ]`** button.

---

### 📍 Step 4: Automatic Live GPS Tracking Unlock (`citizen-tracking.html`)
* **On Screen:** Press `Ctrl + Shift + Tab` to switch back to **Tab 1** (Citizen Screen).
* **Highlight:** Tab 1 automatically updates to **`🟢 RESCUE TEAM APPROVED & DISPATCHED!`** and navigates to **My SOS / Tracking** (`citizen-tracking.html`).
* **What to Say:**
  > *"Switching back to the citizen's phone — in under 3 seconds, the citizen's screen automatically updates to **RESCUE TEAM DISPATCHED**.*
  > 
  > *It opens the live map showing **Motorized OBM Speedboat SD-04** navigating towards their home with an estimated arrival time of 12 minutes. This eliminates panic and prevents duplicate emergency calls!"*

---

### 📍 Step 5: High-Speed AI Emergency Brain (`citizen-ai.html`)
* **On Screen:** Navigate to **`http://localhost:8085/citizen-ai.html`**.
* **Action:** Type or click a prompt: *"Water level inside house is 3 feet. Electric main switch is submerged. What immediate safety actions should I take in Golaghat?"*
* **What to Say:**
  > *"During floods, phone lines get jammed. We built **AEGIS Brain** powered by **Groq LPU (Llama 3.3 70B)** to provide sub-second emergency advice.*
  > 
  > *Notice the response:*
  > * 🚨 **CRITICAL ELECTRICAL PROTOCOL:** Do NOT touch submerged main switchboards or appliances in standing water.
  > * Move family to elevated roofs.
  > * Call National Emergency Helpline **112**.
  > 
  > *AEGIS AI delivers instant, life-saving safety guidance tailored specifically for flood emergencies."*

---

### 📍 Step 6: Tactical Map Navigation in New Tab (`sos-route.html`) & Conclusion
* **On Screen:** Open **`http://localhost:8085/sos-route.html?id=SOS-1088`** (View on Map link from Rescue SOS Center).
* **Highlight:** Point out the dedicated full-screen navigation route from NDRF Base Camp to the citizen's house.
* **What to Say:**
  > *"For rescue boat drivers, clicking 'View on Map' opens a dedicated tactical route map in a new tab, showing real-time street coordinates and water depth warnings.*
  > 
  > *To summarize:*
  > * **1-Click Google Sign In** for citizens.
  > * **Sub-Second Real-Time Alert & Approval Sync** between Citizen & Rescue teams.
  > * **Sub-Second Groq 70B AI Brain** for live safety guidance.
  > 
  > *AEGIS is production-ready for deployment across ASDMA to save lives across Assam. Thank you!"*

---

## 💡 Quick Presentation Tips for Success

1. **Tab Order Setup:**
   * Keep **Tab 1** (`citizen-sos.html`) and **Tab 2** (`rescue-dashboard.html`) open next to each other before starting.
2. **Simple English:**
   * Avoid complicated terms. Use simple words like *"Instant Alert"*, *"Live Speedboat Tracking"*, and *"Smart Emergency AI Assistant"*.
3. **Show, Don't Just Tell:**
   * Click the buttons live during the presentation. The instant red popup and automatic map unlock will impress the jury!
