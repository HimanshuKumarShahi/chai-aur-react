import React, { useState, useEffect } from "react";

export default function RandomUserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRandomUser = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/randomusers/user/random",
      );
      if (!response.ok) throw new Error("Network response was not ok");

      const result = await response.json();

      setUser(result.data);
    } catch (err) {
      setError("Failed to fetch user data.");
    } finally {
      setTimeout(() => setLoading(false), 600);
    }
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md">
        <button
          onClick={fetchRandomUser}
          disabled={loading}
          className="w-full mb-6 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 rounded-2xl font-semibold transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-indigo-200 active:scale-95"
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Contacting API...
            </>
          ) : (
            "Fetch Random User"
          )}
        </button>

        <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-100 overflow-hidden min-h-[350px] flex flex-col items-center justify-center">
          {error && <p className="text-rose-500 font-medium">{error}</p>}

          {loading && !error && (
            <div className="absolute inset-0 bg-white p-8 flex flex-col items-center animate-pulse z-10">
              <div className="w-32 h-32 bg-slate-200 rounded-full mb-6"></div>
              <div className="h-6 bg-slate-200 rounded-md w-3/4 mb-3"></div>
              <div className="h-4 bg-slate-200 rounded-md w-1/2 mb-6"></div>
              <div className="w-full border-t border-slate-100 pt-6">
                <div className="h-4 bg-slate-200 rounded-md w-full mb-3"></div>
                <div className="h-4 bg-slate-200 rounded-md w-5/6"></div>
              </div>
            </div>
          )}

          {!loading && user && !error && (
            <div className="flex flex-col items-center text-center w-full transform transition-all duration-700 ease-out translate-y-0 opacity-100">
              <div className="relative mb-6 group">
                <div className="absolute inset-0 bg-indigo-500 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <img
                  src={user.picture?.large}
                  alt="User Avatar"
                  className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-md transform transition duration-500 hover:scale-105"
                />
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-1">
                {user.name?.first} {user.name?.last}
              </h2>

              <p className="text-indigo-600 font-medium text-sm mb-6">
                @{user.login?.username}
              </p>

              <div className="w-full border-t border-slate-100 pt-6 space-y-4 text-left">
                <div className="flex items-center gap-3 text-slate-600">
                  <span className="p-2 bg-slate-50 rounded-lg text-slate-400">
                    📧
                  </span>
                  <span className="text-sm truncate">{user.email}</span>
                </div>

                <div className="flex items-center gap-3 text-slate-600">
                  <span className="p-2 bg-slate-50 rounded-lg text-slate-400">
                    📍
                  </span>
                  <span className="text-sm truncate">
                    {user.location?.city}, {user.location?.country}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-slate-600">
                  <span className="p-2 bg-slate-50 rounded-lg text-slate-400">
                    📞
                  </span>
                  <span className="text-sm truncate">{user.phone}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
