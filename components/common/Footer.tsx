// ==========================================
// FILE: components/Footer.jsx
// ==========================================
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-teal-50 border-t border-teal-200 rounded-t-2xl mt-12 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Brand + Socials */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-3">
            <Image
              src="/globe.svg"
              alt="rcmiq logo"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="text-xl font-semibold text-teal-700">rcmiq</span>
          </Link>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed max-w-xs">
            Secure, compliant digital solutions for healthcare & finance.
            Proudly serving since <strong>2021</strong>.
          </p>
          <div className="flex items-center gap-4 mt-3">
            <Link href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5 text-teal-600 hover:text-teal-800 transition" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="w-5 h-5 text-teal-600 hover:text-teal-800 transition" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-teal-600 hover:text-teal-800 transition" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <Youtube className="w-5 h-5 text-teal-600 hover:text-teal-800 transition" />
            </Link>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-semibold text-teal-700 mb-3">Company</h4>
          <ul className="space-y-1.5 text-gray-700 text-sm">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/expertise">Expertise</Link>
            </li>
            <li>
              <Link href="/resources">Resources</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold text-teal-700 mb-3">Services</h4>
          <ul className="space-y-1.5 text-gray-700 text-sm">
            <li>
              <Link href="/services">All Services</Link>
            </li>
            <li>
              <Link href="/services/consulting">Consulting</Link>
            </li>
            <li>
              <Link href="/services/security">Security & Compliance</Link>
            </li>
            <li>
              <Link href="/services/development">Custom Development</Link>
            </li>
            <li>
              <Link href="/services/integration">System Integration</Link>
            </li>
            <li>
              <Link href="/services/support">Support & Maintenance</Link>
            </li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-sm font-semibold text-teal-700 mb-3">
            Solutions
          </h4>
          <ul className="space-y-1.5 text-gray-700 text-sm">
            <li>
              <Link href="/solutions">All Solutions</Link>
            </li>
            <li>
              <Link href="/solutions/healthcare">Healthcare</Link>
            </li>
            <li>
              <Link href="/solutions/finance">Finance</Link>
            </li>
            <li>
              <Link href="/solutions/automation">Automation</Link>
            </li>
            <li>
              <Link href="/solutions/analytics">Analytics</Link>
            </li>
            <li>
              <Link href="/solutions/telehealth">Telehealth</Link>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="text-sm font-semibold text-teal-700 mb-3">Policies</h4>
          <ul className="space-y-1.5 text-gray-700 text-sm">
            <li>
              <Link href="/terms">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/cookies">Cookie Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Info + CTA */}
      <div className="border-t border-teal-300 mt-10 mx-10 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="text-gray-700 text-sm space-y-2">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-teal-600" /> support@rcmiq.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-teal-600" /> +1 (800) 900-2345
            </p>
            <p className="flex items-center gap-2 max-w-sm">
              <MapPin className="w-4 h-4 text-teal-600" /> 123 Innovation Drive,
              Suite 400, San Francisco, CA, USA
            </p>
          </div>

          <div className="space-x-2">
            <Link
              href="/schedule"
              className=" text-teal-500 px-5 py-2.5 rounded-lg border border-teal-500 transition text-sm font-medium self-start md:self-auto"
            >
              Schedule a Call
            </Link>

            <Link
              href="/contact"
              className="bg-teal-600 text-white px-5 py-2.5 rounded-lg hover:bg-teal-700 transition text-sm font-medium self-start md:self-auto"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
