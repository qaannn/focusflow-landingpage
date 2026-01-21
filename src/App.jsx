import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        {/* Background gradient blur */}
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT: TEXT */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              🚀 Productivity App
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Stay Focused. <br />
              Get More Done <br />
              with <span className="text-blue-600">FocusFlow</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              FocusFlow helps you block distractions, manage tasks,
              and build deep work habits so you can achieve more every day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-lg">
                Get Started Free
              </button>

              <button className="px-8 py-4 rounded-xl border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 transition">
                View Demo
              </button>
            </div>
          </div>

          {/* RIGHT: MOCKUP CARD */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-30"></div>

            <div className="relative bg-white rounded-3xl shadow-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-500">Today’s Focus</p>
                  <p className="text-xl font-bold">Deep Work Session</p>
                </div>
                <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                  Active
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gray-50 flex items-center justify-between">
                  <span>Design Landing Page</span>
                  <span className="text-sm text-gray-500">25 min</span>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 flex items-center justify-between">
                  <span>Fix Tailwind Config</span>
                  <span className="text-sm text-gray-500">15 min</span>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 flex items-center justify-between">
                  <span>Write GitHub README</span>
                  <span className="text-sm text-gray-500">10 min</span>
                </div>
              </div>

              <button className="mt-6 w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                Start Focus Session
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY FOCUSFLOW SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">
              Why <span className="text-blue-600">FocusFlow</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to stay focused, productive,
              and in control of your time.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6 text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-bold mb-3">
                Block Distractions
              </h3>
              <p className="text-gray-600">
                Eliminate notifications and distracting websites
                so you can focus deeply on what really matters.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 mb-6 text-2xl">
                ⏱️
              </div>
              <h3 className="text-xl font-bold mb-3">
                Smart Time Tracking
              </h3>
              <p className="text-gray-600">
                Track how you spend your time and discover
                patterns to optimize your daily productivity.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-600 mb-6 text-2xl">
                📊
              </div>
              <h3 className="text-xl font-bold mb-3">
                Productivity Insights
              </h3>
              <p className="text-gray-600">
                Get clear insights and weekly reports
                to continuously improve your work habits.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* PRICING SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your productivity needs.
              Upgrade anytime as you grow.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* FREE PLAN */}
            <div className="border border-gray-200 rounded-3xl p-10 shadow-sm hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <p className="text-gray-600 mb-6">
                Perfect for getting started.
              </p>

              <div className="mb-6">
                <span className="text-5xl font-extrabold">$0</span>
                <span className="text-gray-500 ml-2">/ month</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-600">✔</span>
                  Block distracting websites
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600">✔</span>
                  Basic time tracking
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600">✔</span>
                  Daily productivity report
                </li>
              </ul>

              <button className="w-full py-4 rounded-xl border border-gray-300 font-semibold hover:bg-gray-100 transition">
                Get Started
              </button>
            </div>

            {/* PRO PLAN */}
            <div className="relative border-2 border-blue-600 rounded-3xl p-10 shadow-xl bg-blue-50">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-sm font-semibold">
                Most Popular
              </div>

              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-gray-700 mb-6">
                For serious productivity masters.
              </p>

              <div className="mb-6">
                <span className="text-5xl font-extrabold">$12</span>
                <span className="text-gray-600 ml-2">/ month</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-700">✔</span>
                  Everything in Free
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-700">✔</span>
                  Advanced analytics & reports
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-700">✔</span>
                  Unlimited focus sessions
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-700">✔</span>
                  Priority support
                </li>
              </ul>

              <button className="w-full py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-lg">
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl bg-white/10 backdrop-blur-md p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Ready to boost your productivity?
            </h2>

            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              Join thousands of users who use FocusFlow every day
              to stay focused, manage their time, and get more done.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-10 py-4 rounded-xl bg-white text-blue-700 font-bold hover:bg-gray-100 transition shadow-lg">
                Get Started Free
              </button>

              <button className="px-10 py-4 rounded-xl border border-white/40 font-semibold hover:bg-white/10 transition">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-4">
              FocusFlow
            </h3>
            <p className="text-gray-400 mb-6">
              Stay focused. Get more done.
            </p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} FocusFlow. All rights reserved.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              <li className="hover:text-white cursor-pointer">
                Features
              </li>
              <li className="hover:text-white cursor-pointer">
                Pricing
              </li>
              <li className="hover:text-white cursor-pointer">
                Demo
              </li>
              <li className="hover:text-white cursor-pointer">
                Updates
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li className="hover:text-white cursor-pointer">
                About
              </li>
              <li className="hover:text-white cursor-pointer">
                Blog
              </li>
              <li className="hover:text-white cursor-pointer">
                Careers
              </li>
              <li className="hover:text-white cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              <li className="hover:text-white cursor-pointer">
                Twitter
              </li>
              <li className="hover:text-white cursor-pointer">
                GitHub
              </li>
              <li className="hover:text-white cursor-pointer">
                LinkedIn
              </li>
              <li className="hover:text-white cursor-pointer">
                Email
              </li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  )
}