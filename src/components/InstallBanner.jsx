import React, { useEffect, useState } from "react";

// Helper: detect iOS Safari
function isIos() {
  const ua = window.navigator.userAgent.toLowerCase();
  return /iphone|ipod/.test(ua) || 
         (ua.includes("macintosh") && "ontouchend" in document);
}


function isInStandaloneMode() {
  return (
    "standalone" in window.navigator &&
    window.navigator.standalone
  );
}

export default function InstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [showIosBanner, setShowIosBanner] = useState(false);

  useEffect(() => {
    // Handle Android/Chrome beforeinstallprompt
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

  // Delay check slightly to ensure DOM is loaded
  setTimeout(() => {
    if (isIos() && !isInStandaloneMode()) {
      console.log("✅ iOS Safari detected, showing install banner");
      setShowIosBanner(true);
    }
  }, 500);

  return () => {
    window.removeEventListener("beforeinstallprompt", handler);
  };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log("User choice:", outcome);
    setDeferredPrompt(null);
    setShowInstallButton(false);
  };

  const handleCloseIosBanner = () => {
    setShowIosBanner(false);
  };

  return (
    <>
      {/* Android/Chrome Install Button */}
      {showInstallButton && (
        <button
          onClick={handleInstallClick}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "12px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "6px",
            boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
            cursor: "pointer",
            zIndex: 1000,
          }}
        >
          📲 Install App
        </button>
      )}

      {/* iOS Safari Guide */}
      {showIosBanner && (
        <div
          style={{
            position: "fixed",
            bottom: "0",
            left: "0",
            right: "0",
            background: "#f1f1f1",
            padding: "15px",
            textAlign: "center",
            borderTop: "1px solid #ccc",
            fontSize: "14px",
            zIndex: 1000,
          }}
        >
          <button
            onClick={handleCloseIosBanner}
            style={{
              position: "absolute",
              top: "5px",
              right: "10px",
              border: "none",
              background: "transparent",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            ❌
          </button>
          <p style={{ margin: 0 }}>
            👉 To install this app, tap <strong>Share</strong> then{" "}
            <strong>Add to Home Screen</strong>.
          </p>
        </div>
      )}
    </>
  );
}
