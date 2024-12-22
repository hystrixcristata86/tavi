import React from 'react';
import { NavLink } from 'react-router';

function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
      <div className="w-full max-w-md rounded-lg bg-white shadow-lg dark:bg-gray-800">
        <div className="bg-gray-800 text-center py-4 rounded-t-lg">
          <p className="text-2xl font-bold text-white">Welcome Back!</p>
        </div>
        <div className="p-6 space-y-6">
          <form className="space-y-4">
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
              <NavLink
                to="/forgot-password"
                className="block mt-2 text-right text-sm text-white hover:text-[#FF007F]"
              >
                Forgot password?
              </NavLink>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#FF007F] py-2 text-white font-semibold hover:bg-[#D1006D] focus:ring-2 focus:ring-pink-600"
            >
              Login
            </button>

            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="flex-1 flex items-center justify-center rounded-lg bg-gray-50 border border-gray-200 py-2 text-sm text-gray-900 hover:bg-gray-100"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                >
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
                Google
              </button>

              <button
                type="button"
                className="flex-1 flex items-center justify-center rounded-lg bg-gray-50 border border-gray-200 py-2 text-sm text-gray-900 hover:bg-gray-100"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
                </svg>
                Facebook
              </button>
            </div>
          </form>
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            Don't have an account?{' '}
            <NavLink
              to="/signup"
              className="text-white hover:text-[#FF007F]"
            >
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
