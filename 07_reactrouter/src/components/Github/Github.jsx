import React, { useEffect, useState } from 'react';

export default function Github() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users/himanshukumarshahi')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch GitHub profile');
                return res.json();
            })
            .then((userData) => {
                setData(userData);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="min-h-[500px] flex items-center justify-center p-6 bg-slate-950">
                <div className="w-full max-w-xl p-8 bg-slate-900/80 rounded-3xl border border-slate-800 animate-pulse space-y-6">
                    <div className="flex items-center gap-6">
                        <div className="w-24 h-24 rounded-full bg-slate-800" />
                        <div className="flex-1 space-y-3">
                            <div className="h-6 w-48 bg-slate-800 rounded-md" />
                            <div className="h-4 w-32 bg-slate-800 rounded-md" />
                        </div>
                    </div>
                    <div className="h-4 w-full bg-slate-800 rounded-md" />
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-20 bg-slate-800 rounded-2xl" />
                        <div className="h-20 bg-slate-800 rounded-2xl" />
                        <div className="h-20 bg-slate-800 rounded-2xl" />
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-[400px] flex items-center justify-center p-6 bg-slate-950">
                <div className="bg-rose-950/40 border border-rose-800 text-rose-300 px-6 py-4 rounded-2xl">
                    <p className="font-semibold">{error}</p>
                </div>
            </div>
        );
    }

    const formattedDate = new Date(data.created_at).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
    });

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
            <div className="relative w-full max-w-2xl bg-gradient-to-b from-slate-900 to-slate-900/90 border border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl overflow-hidden">
                
                {/* Subtle top ambient glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl pointer-events-none" />

                {/* Profile Header */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-300" />
                        <img
                            src={data.avatar_url}
                            alt={data.name || data.login}
                            className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-slate-700/80 shadow-inner"
                        />
                    </div>

                    <div className="flex-1 text-center sm:text-left space-y-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                                    {data.name || data.login}
                                </h1>
                                <a
                                    href={data.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-indigo-400 text-sm font-medium hover:text-indigo-300 hover:underline inline-block mt-0.5"
                                >
                                    @{data.login}
                                </a>
                            </div>

                            <a
                                href={data.html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition duration-200 shadow-md shadow-indigo-500/20 active:scale-95"
                            >
                                View Profile
                            </a>
                        </div>

                        {data.bio && (
                            <p className="text-slate-300 text-sm sm:text-base pt-2 leading-relaxed">
                                {data.bio}
                            </p>
                        )}
                    </div>
                </div>

                {/* Key Metrics Dashboard */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8">
                    <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/40 text-center">
                        <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider">Repositories</span>
                        <p className="text-xl sm:text-2xl font-black text-white mt-1">{data.public_repos}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/40 text-center">
                        <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider">Followers</span>
                        <p className="text-xl sm:text-2xl font-black text-white mt-1">{data.followers}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/40 text-center">
                        <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider">Following</span>
                        <p className="text-xl sm:text-2xl font-black text-white mt-1">{data.following}</p>
                    </div>
                </div>

                {/* Metadata Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-800 text-sm text-slate-400">
                    <div className="flex items-center gap-2.5">
                        <svg className="w-4 h-4 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="truncate">{data.location || 'Location Not Specified'}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                        <svg className="w-4 h-4 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>Joined {formattedDate}</span>
                    </div>

                    {data.company && (
                        <div className="flex items-center gap-2.5">
                            <svg className="w-4 h-4 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <span className="truncate">{data.company}</span>
                        </div>
                    )}

                    {data.blog && (
                        <div className="flex items-center gap-2.5">
                            <svg className="w-4 h-4 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            <a
                                href={data.blog.startsWith('http') ? data.blog : `https://${data.blog}`}
                                target="_blank"
                                rel="noreferrer"
                                className="truncate text-indigo-400 hover:underline"
                            >
                                {data.blog}
                            </a>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}