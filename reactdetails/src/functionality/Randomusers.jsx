import React, { useState, useEffect } from "react";

// --- Inline SaaS SVGs ---
const RefreshIcon = ({ className }) => (
  <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /><path d="M16 21v-5h5" />
  </svg>
);

const UserIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function RandomUserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRandomUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://api.freeapi.app/api/v1/public/randomusers/user/random");
      if (!response.ok) throw new Error("Network response was not ok");
      const result = await response.json();
      setUser(result.data);
    } catch (err) {
      setError("Failed to fetch user data.");
    } finally {
      setTimeout(() => setLoading(false), 400);
    }
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center p-6 font-sans text-neutral-900 selection:bg-black selection:text-white">
      <div className="w-full max-w-lg bg-white rounded-xl border border-neutral-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
        
        {/* Header Region */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-white">
          <div className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded bg-black text-white">
              <UserIcon />
            </div>
            <h3 className="text-sm font-semibold tracking-tight">Identity Record</h3>
          </div>
          
          <button
            onClick={fetchRandomUser}
            disabled={loading}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-600 bg-neutral-100/80 hover:bg-neutral-200/80 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <RefreshIcon className={loading ? "animate-spin" : ""} />
            {loading ? "Querying..." : "Generate New"}
          </button>
        </div>

        {/* Content Region */}
        <div className="p-6 min-h-[280px] relative bg-white">
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-white p-6">
              <p className="text-sm font-medium text-red-600 bg-red-50 px-4 py-2 rounded-md border border-red-100">
                {error}
              </p>
            </div>
          )}

          {loading && !error && (
            <div className="animate-pulse space-y-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-neutral-100 rounded-full shrink-0" />
                <div className="space-y-2.5 w-full">
                  <div className="h-4 bg-neutral-100 rounded w-1/3" />
                  <div className="h-3 bg-neutral-50 rounded w-1/4" />
                </div>
              </div>
              <div className="space-y-3 pt-4">
                <div className="h-10 bg-neutral-50 rounded-lg w-full" />
                <div className="h-10 bg-neutral-50 rounded-lg w-full" />
                <div className="h-10 bg-neutral-50 rounded-lg w-full" />
              </div>
            </div>
          )}

          {!loading && user && !error && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              {/* Profile Header */}
              <div className="flex items-center gap-5 mb-8">
                <img
                  src={user.picture?.large}
                  alt={`${user.name?.first} ${user.name?.last}`}
                  className="w-16 h-16 rounded-full object-cover ring-1 ring-neutral-200"
                />
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-neutral-900">
                    {user.name?.first} {user.name?.last}
                  </h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600 font-mono">
                      @{user.login?.username}
                    </span>
                    <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                      Active Status
                    </span>
                  </div>
                </div>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center justify-between p-3 rounded-lg border border-neutral-100 bg-neutral-50/50 hover:bg-neutral-50 transition-colors group">
                  <div className="flex items-center gap-3 text-sm text-neutral-500">
                    <MailIcon />
                    <span>Email Address</span>
                  </div>
                  <span className="text-sm font-medium text-neutral-900 font-mono select-all">
                    {user.email}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border border-neutral-100 bg-neutral-50/50 hover:bg-neutral-50 transition-colors group">
                  <div className="flex items-center gap-3 text-sm text-neutral-500">
                    <MapPinIcon />
                    <span>Location</span>
                  </div>
                  <span className="text-sm font-medium text-neutral-900">
                    {user.location?.city}, {user.location?.country}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border border-neutral-100 bg-neutral-50/50 hover:bg-neutral-50 transition-colors group">
                  <div className="flex items-center gap-3 text-sm text-neutral-500">
                    <PhoneIcon />
                    <span>Phone Number</span>
                  </div>
                  <span className="text-sm font-medium text-neutral-900 font-mono select-all">
                    {user.phone}
                  </span>
                </div>
              </div>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
}