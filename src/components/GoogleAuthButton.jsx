import { useEffect, useState } from "react";
import { LogOut } from "lucide-react";
import {
  isFirebaseConfigured,
  signInWithGoogle,
  signOutUser,
  subscribeToAuth
} from "../services/firebase";

export default function GoogleAuthButton({ compact = false }) {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => subscribeToAuth(setUser), []);

  const handleSignIn = async () => {
    setMessage("");

    if (!isFirebaseConfigured) {
      setMessage("Firebase config is missing. Add env values first.");
      return;
    }

    try {
      setLoading(true);
      await signInWithGoogle();
    } catch (error) {
      setMessage(error.message || "Google sign-in failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    setMessage("");
    setLoading(true);
    await signOutUser();
    setLoading(false);
  };

  if (user) {
    return (
      <div className="relative flex items-center gap-2">
        <img
          src={user.photoURL || "https://ui-avatars.com/api/?name=Parent"}
          alt={user.displayName || "Signed in parent"}
          className="size-10 rounded-full object-cover ring-2 ring-sunshine"
        />
        {!compact && (
          <span className="hidden max-w-28 truncate text-sm font-bold text-slate-700 dark:text-slate-200 xl:block">
            {user.displayName || "Parent"}
          </span>
        )}
        <button
          onClick={handleSignOut}
          disabled={loading}
          className="grid size-10 place-items-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-coral hover:text-white disabled:opacity-60 dark:bg-slate-800 dark:text-slate-100"
          aria-label="Sign out"
        >
          <LogOut size={18} />
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={handleSignIn}
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-black text-slate-800 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 dark:bg-slate-800 dark:text-white"
      >
        <span className="grid size-5 place-items-center rounded-full bg-white text-base font-black text-skybrand">G</span>
        {loading ? "Signing in..." : "Sign in"}
      </button>
      {message && (
        <p className="absolute right-0 top-14 z-50 w-64 rounded-2xl bg-slate-950 p-3 text-xs font-semibold leading-5 text-white shadow-soft">
          {message}
        </p>
      )}
    </div>
  );
}
