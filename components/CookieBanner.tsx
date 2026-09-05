"use client";

import React from "react";

const consentKey = "ECKSBEE.cookie.consent";

const getComputed = (): boolean => {
  if (typeof window === "undefined") {
    return false;
  }
  const sixtyMinutes = 60 * 60 * 1000;
  const consentValue = window.localStorage.getItem(consentKey);
  const consentTime: number = consentValue
    ? +consentValue
    : Date.now() - sixtyMinutes - 1000;
  const diff = Date.now() - consentTime;
  return diff > sixtyMinutes;
};

const CookieBanner = (): React.ReactNode => {
  const [understood, setUnderstood] = React.useState(false);
  const [computed] = React.useState(getComputed);

  if (understood) {
    return null;
  }
  if (computed) {
    return (
      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:max-w-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6 z-50">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Our website uses cookies. By continuing to use our website, you are
          granting us permission to deploy our cookies as detailed in our{" "}
          <a
            href="/privacy"
            className="text-blue-600 underline hover:text-blue-800"
          >
            privacy
          </a>{" "}
          and{" "}
          <a
            href="/cookies"
            className="text-blue-600 underline hover:text-blue-800"
          >
            cookie
          </a>{" "}
          policy.
        </p>
        <button
          className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-6 text-background transition-colors hover:opacity-80 font-medium"
          onClick={() => {
            window.localStorage.setItem(consentKey, Date.now().toString());
            setUnderstood(true);
          }}
        >
          Understood
        </button>
      </div>
    );
  }
  return null;
};

export default CookieBanner;
