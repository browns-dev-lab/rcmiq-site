// ==========================================
// FILE: components/Navbar.tsx
// ==========================================
"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setOpen(!open);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 10);

      // Only hide on desktop scroll, mobile drawer stays open
      if (window.innerWidth > 768) {
        currentScroll > lastScrollY ? setShowNav(false) : setShowNav(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`
        sticky top-0 z-50 transition-all duration-300
        ${showNav ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}
        rounded-b-3xl
        ${
          isScrolled
            ? "bg-teal-100/90 border border-teal-200 shadow-lg backdrop-blur-md"
            : "bg-transparent border-transparent shadow-none"
        }
      `}
    >
      <div className="max-w-7xl mx-auto py-3 px-6 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/globe.svg"
            alt="RCMIQ Logo"
            width={50}
            height={50}
            className="object-contain cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center font-medium absolute left-1/2 -translate-x-1/2">
          <li className="group relative">
            <span className="flex items-center gap-1 cursor-pointer">
              Services <ChevronDown size={16} />
            </span>
            <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-xl p-4 space-y-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all z-50 min-w-[200px] border border-gray-100">
              <li>
                <Link href="/services#healthcare">Healthcare Software</Link>
              </li>
              <li>
                <Link href="/services#financial">Financial Dashboards</Link>
              </li>
              <li>
                <Link href="/services#compliance">HIPAA & Compliance</Link>
              </li>
              <li>
                <Link href="/services#cloud">Secure Cloud Setup</Link>
              </li>
            </ul>
          </li>

          <li className="group relative">
            <span className="flex items-center gap-1 cursor-pointer">
              Solutions <ChevronDown size={16} />
            </span>
            <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-xl p-4 space-y-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all z-50 min-w-[200px] border border-gray-100">
              <li>
                <Link href="/solutions#rcm">Revenue Cycle Management</Link>
              </li>
              <li>
                <Link href="/solutions#telehealth">Telehealth Platform</Link>
              </li>
              <li>
                <Link href="/solutions#analytics">Financial Analytics</Link>
              </li>
              <li>
                <Link href="/solutions#automation">Automation Tools</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/expertise">Expertise</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/resources">Resources</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Link
            href="/schedule"
            className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition font-medium"
          >
            Schedule a Call
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-teal-700"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden px-6 pb-4 animate-fadeIn">
          <ul className="flex flex-col gap-4 font-medium text-teal-700 items-start">
            <li className="flex flex-col">
              <span className="font-semibold">Services</span>
              <ul className="pl-4 space-y-1">
                <li>
                  <Link href="/services#healthcare" onClick={toggleMenu}>
                    Healthcare Software
                  </Link>
                </li>
                <li>
                  <Link href="/services#financial" onClick={toggleMenu}>
                    Financial Dashboards
                  </Link>
                </li>
                <li>
                  <Link href="/services#compliance" onClick={toggleMenu}>
                    HIPAA & Compliance
                  </Link>
                </li>
                <li>
                  <Link href="/services#cloud" onClick={toggleMenu}>
                    Secure Cloud Setup
                  </Link>
                </li>
              </ul>
            </li>

            <li className="flex flex-col">
              <span className="font-semibold">Solutions</span>
              <ul className="pl-4 space-y-1">
                <li>
                  <Link href="/solutions#rcm" onClick={toggleMenu}>
                    Revenue Cycle Management
                  </Link>
                </li>
                <li>
                  <Link href="/solutions#telehealth" onClick={toggleMenu}>
                    Telehealth Platform
                  </Link>
                </li>
                <li>
                  <Link href="/solutions#analytics" onClick={toggleMenu}>
                    Financial Analytics
                  </Link>
                </li>
                <li>
                  <Link href="/solutions#automation" onClick={toggleMenu}>
                    Automation Tools
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/expertise" onClick={toggleMenu}>
                Expertise
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/resources" onClick={toggleMenu}>
                Resources
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>

            {/* Mobile CTA */}
            <Link
              href="/schedule"
              className="bg-teal-500 text-white px-4 py-3 rounded-lg text-center mt-2 hover:bg-teal-600 transition w-full"
              onClick={toggleMenu}
            >
              Schedule a Call
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}
