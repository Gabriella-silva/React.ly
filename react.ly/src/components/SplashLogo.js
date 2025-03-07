// src/components/SplashScreen.js
export default function SplashLogo() {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-blue-500 z-50">
        <img src="/logo.png" alt="Logo" className="w-40 h-40 animate-pulse" />
      </div>
    );
  }
  