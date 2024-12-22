import React from 'react';
import { NavLink } from 'react-router';

function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
      <div className="w-full max-w-md rounded-lg bg-white shadow-lg dark:bg-gray-800">
        <div className="bg-gray-800 text-center py-4 rounded-t-lg">
          <p className="text-2xl font-bold text-white">Create Your Account!</p>
        </div>
        <div className="p-6 space-y-6">
          <form className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="username"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="Your username"
                required
                className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="email@example.com"
                required
                className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                required
                className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#FF007F] py-2 text-white font-semibold hover:bg-[#D1006D] focus:ring-2 focus:ring-pink-600"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            Already have an account?{' '}
            <NavLink
              to="/signin"
              className="text-white hover:text-[#FF007F]"
            >
              Sign In
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
