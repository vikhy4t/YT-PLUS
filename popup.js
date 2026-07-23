
document.addEventListener("DOMContentLoaded", init);

const enableToggle = document.getElementById("enableToggle");
const logoToggle = document.getElementById("logoToggle");
const statusDot = document.getElementById("statusDot");
const stateText = document.getElementById("stateText");
const adsBlockedCount = document.getElementById("adsBlockedCount");
const timeSavedCount = document.getElementById("timeSavedCount");
const refreshTabBtn = document.getElementById("refreshTabBtn");
const youtubeBtn = document.getElementById("youtubeBtn");

async function init() {
    try {
        const result = await chrome.storage.local.get({
            enabled: true,
            logoEnabled: true,
            adsBlocked: 0
        });

        if (enableToggle) enableToggle.checked = result.enabled;
        if (logoToggle) logoToggle.checked = result.logoEnabled;

        updateProtectionUI(result.enabled);
        animateCounter(adsBlockedCount, result.adsBlocked);
        updateTimeSaved(result.adsBlocked);
    } catch (e) {
        console.error("Popup init failed:", e);
    }
}

enableToggle?.addEventListener("change", async () => {
    const enabled = enableToggle.checked;
    await chrome.storage.local.set({ enabled });
    updateProtectionUI(enabled);
});

logoToggle?.addEventListener("change", async () => {
    await chrome.storage.local.set({ logoEnabled: logoToggle.checked });
});

refreshTabBtn?.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        if (tabs.length) chrome.tabs.reload(tabs[0].id);
    });
});

youtubeBtn?.addEventListener("click", () => {
    chrome.tabs.create({ url: "https://www.youtube.com" });
});

chrome.storage.onChanged.addListener((changes, area) => {
    if (area !== "local") return;

    if (changes.enabled) {
        enableToggle.checked = changes.enabled.newValue;
        updateProtectionUI(changes.enabled.newValue);
    }

    if (changes.logoEnabled && logoToggle) {
        logoToggle.checked = changes.logoEnabled.newValue;
    }

    if (changes.adsBlocked) {
        const value = changes.adsBlocked.newValue || 0;
        animateCounter(adsBlockedCount, value);
        updateTimeSaved(value);
    }
});

function updateProtectionUI(enabled) {
    if (!statusDot || !stateText) return;

    stateText.textContent = enabled ? "Active" : "Paused";
    statusDot.style.background = enabled ? "#22c55e" : "#ef4444";
    statusDot.style.boxShadow = enabled
        ? "0 0 14px #22c55e"
        : "0 0 14px #ef4444";
}

function updateTimeSaved(blocked) {
    if (!timeSavedCount) return;

    const seconds = blocked * 15;

    if (seconds < 60)
        timeSavedCount.textContent = `${seconds}s`;
    else if (seconds < 3600)
        timeSavedCount.textContent = `${Math.floor(seconds / 60)}m`;
    else
        timeSavedCount.textContent = `${Math.floor(seconds / 3600)}h`;
}

function animateCounter(el, target) {
    if (!el) return;

    const start = parseInt(el.textContent.replace(/,/g, "")) || 0;
    const duration = 400;
    const startTime = performance.now();

    function frame(now) {
        const p = Math.min((now - startTime) / duration, 1);
        const value = Math.floor(start + (target - start) * p);
        el.textContent = value.toLocaleString();
        if (p < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
}

console.log("YouTube AdBlocker Pro Popup v2.2 loaded.");



const bgVideo=document.getElementById("bg-video");
const videoToggle=document.getElementById("videoToggle");
const soundToggle=document.getElementById("soundToggle");

const VIDEO_KEY="popupVideoEnabled";
const SOUND_KEY="popupSoundEnabled";

document.addEventListener("DOMContentLoaded",initFloatingControls);

async function initFloatingControls(){
    if(!bgVideo) return;

    const prefs=await chrome.storage.local.get({
        [VIDEO_KEY]:true,
        [SOUND_KEY]:false
    });

    applyVideoState(prefs[VIDEO_KEY]);
    applySoundState(prefs[SOUND_KEY]);

    videoToggle?.addEventListener("click",async()=>{
        const enabled=bgVideo.style.opacity!=="0";
        await chrome.storage.local.set({[VIDEO_KEY]:!enabled});
        applyVideoState(!enabled);
    });

    soundToggle?.addEventListener("click",async()=>{
        const enabled=!bgVideo.muted;
        await chrome.storage.local.set({[SOUND_KEY]:!enabled});
        applySoundState(!enabled);
    });
}

function applyVideoState(enabled){
    bgVideo.style.opacity=enabled?"1":"0";
    if(enabled) bgVideo.play().catch(()=>{});
    if(videoToggle){
        videoToggle.classList.toggle("active",enabled);
        videoToggle.innerHTML=enabled?VIDEO_ICON:VIDEO_OFF_ICON;
    }
}

function applySoundState(enabled){
    bgVideo.muted=!enabled;
    if(enabled) bgVideo.play().catch(()=>{});
    if(soundToggle){
        soundToggle.classList.toggle("active",enabled);
        soundToggle.innerHTML=enabled?SOUND_ICON:MUTE_ICON;
    }
}

const VIDEO_ICON=`<svg viewBox="0 0 24 24"><path d="M23 7l-7 5 7 5V7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`;
const VIDEO_OFF_ICON=`<svg viewBox="0 0 24 24"><path d="M23 7l-7 5 7 5V7"/><rect x="1" y="5" width="15" height="14" rx="2"/><line x1="3" y1="3" x2="21" y2="21"/></svg>`;
const SOUND_ICON=`<svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19"/><path d="M15.5 8.5a5 5 0 010 7"/><path d="M18.5 5.5a9 9 0 010 13"/></svg>`;
const MUTE_ICON=`<svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`;
