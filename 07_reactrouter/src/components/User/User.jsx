import React from "react";
import { useParams } from "react-router";

function User() {
  // Returns an object of key/value-pairs of the dynamic params from the current URL
  const { Userid } = useParams();

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="relative w-full max-w-md bg-slate-800/50 border border-slate-700/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl" />

        <div className="flex flex-col items-center space-y-6">
          {/* Avatar Placeholder */}
          <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30">
            <span className="text-3xl font-bold text-white tracking-wider uppercase">
              {Userid ? Userid.substring(0, 2) : "U"}
            </span>
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-slate-800 rounded-full" />
          </div>

          {/* User Details */}
          <div className="text-center space-y-1">
            <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase">
              Active Session
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight text-white">
              {Userid || "Guest User"}
            </h1>
            <p className="text-sm text-slate-400">
              ID:{" "}
              <span className="font-mono text-slate-300">
                {Userid || "N/A"}
              </span>
            </p>
          </div>

          {/* Action Divider / Badge */}
          <div className="w-full border-t border-slate-700/50 pt-6 flex justify-around text-sm text-slate-400">
            <div className="text-center">
              <span className="block text-white font-bold text-lg">Online</span>
              <span>Status</span>
            </div>
            <div className="w-px bg-slate-700" />
            <div className="text-center">
              <span className="block text-white font-bold text-lg">
                Standard
              </span>
              <span>Role</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
