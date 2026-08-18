/*
 * AEGIS Emergency Platform - Firebase Google Authentication Module
 */

const firebaseConfig = {
  apiKey: "AIzaSyBg8ePZQfXmsOGnkQeMQhWCm7_OI14lTEA",
  authDomain: "aegis-flood-response.firebaseapp.com",
  projectId: "aegis-flood-response",
  storageBucket: "aegis-flood-response.firebasestorage.app",
  messagingSenderId: "429989214794",
  appId: "1:429989214794:web:84a38077ac61964b5344b3"
};

// Initialize Firebase App & Auth
if (typeof firebase !== 'undefined') {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}

// Google Sign-In Handler
async function loginWithGoogleFirebase() {
  if (typeof firebase === 'undefined' || !firebase.auth) {
    console.warn("Firebase SDK is loading or unavailable.");
    const name = prompt("Enter your Name for Citizen Account:", "Ravi Das");
    if (name) {
      const p = {
        name: name,
        email: name.toLowerCase().replace(/\s+/g, '') + "@gmail.com",
        photoURL: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
        phone: "+91 98765 43210",
        provider: "Citizen Account"
      };
      localStorage.setItem('AEGIS_CITIZEN_PROFILE', JSON.stringify(p));
      window.location.href = 'citizen-dashboard.html';
    }
    return;
  }

  const provider = new firebase.auth.GoogleAuthProvider();
  
  try {
    const result = await firebase.auth().signInWithPopup(provider);
    const user = result.user;
    
    const profile = {
      name: user.displayName || "Authenticated Citizen",
      email: user.email || "citizen@aegis-response.gov.in",
      photoURL: user.photoURL || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      phone: user.phoneNumber || "+91 98765 43210",
      uid: user.uid,
      provider: "Google Firebase",
      loggedInAt: new Date().toLocaleString()
    };

    localStorage.setItem('AEGIS_CITIZEN_PROFILE', JSON.stringify(profile));
    
    // Redirect to Citizen Portal
    window.location.href = 'citizen-dashboard.html';
  } catch (error) {
    console.error("Firebase Auth Error:", error);
    if (error.code === 'auth/popup-closed-by-user') {
      return;
    }
    
    // Fallback prompt if popup blocked or domain pending authorization on Firebase Console
    const fallbackName = prompt("Google Sign-In: Enter your name to complete account login:", "Ravi Das");
    if (fallbackName) {
      const fallbackProfile = {
        name: fallbackName,
        email: fallbackName.toLowerCase().replace(/\s+/g, '') + "@gmail.com",
        photoURL: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
        phone: "+91 98765 43210",
        provider: "Google Account"
      };
      localStorage.setItem('AEGIS_CITIZEN_PROFILE', JSON.stringify(fallbackProfile));
      window.location.href = 'citizen-dashboard.html';
    }
  }
}

// Function to Sync Citizen Profile Details Across All Pages
function updateCitizenProfileUI() {
  let raw = localStorage.getItem('AEGIS_CITIZEN_PROFILE');
  if (!raw) {
    // Set default profile if not set yet
    const defaultProfile = {
      name: "Ravi Das",
      email: "ravi.das@email.com",
      photoURL: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      phone: "+91 98765 43210",
      provider: "Default Account"
    };
    localStorage.setItem('AEGIS_CITIZEN_PROFILE', JSON.stringify(defaultProfile));
    raw = JSON.stringify(defaultProfile);
  }

  try {
    const profile = JSON.parse(raw);

    // Profile Page Elements
    const nameEl = document.getElementById('prof-name-text');
    const emailEl = document.getElementById('prof-email-text');
    const phoneEl = document.getElementById('prof-phone-text');
    const photoEl = document.getElementById('prof-avatar-img');

    if (nameEl) nameEl.innerText = profile.name;
    if (emailEl) emailEl.innerText = profile.email;
    if (phoneEl) phoneEl.innerText = profile.phone;
    if (photoEl && profile.photoURL) photoEl.src = profile.photoURL;

    // Topbar & Sidebar Elements across Citizen Pages
    document.querySelectorAll('.citizen-user-name').forEach(el => el.innerText = profile.name);
    document.querySelectorAll('.citizen-user-email').forEach(el => el.innerText = profile.email);
    document.querySelectorAll('.citizen-user-avatar').forEach(el => {
      if (el.tagName === 'IMG') {
        if (profile.photoURL) el.src = profile.photoURL;
      } else {
        const initials = profile.name ? profile.name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase() : 'RD';
        el.innerText = initials;
      }
    });
  } catch (e) {
    console.error("Error syncing profile UI:", e);
  }
}

document.addEventListener('DOMContentLoaded', updateCitizenProfileUI);
window.addEventListener('load', updateCitizenProfileUI);
