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
    <footer className="w-full bg-orange-50 border-t border-orange-200 rounded-t-2xl py-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="sm:col-span-2 md:col-span-1">
          <Link href="/" className="flex">
            <Image
              src="/brand/logo.png"
              alt="rcmiq logo"
              width={900}
              height={900}
            />
          </Link>

          <p className="text-gray-700 text-base mb-4 leading-relaxed max-w-sm">
            Secure, compliant digital solutions for healthcare & finance.
            Proudly serving since <strong>2021</strong>.
          </p>

          <div className="flex items-center gap-4 mb-4">
            {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <Link key={i} href="#">
                <Icon className="w-5 h-5 text-orange-500 hover:text-orange-600 transition" />
              </Link>
            ))}
          </div>

          <div className="text-gray-700 text-sm space-y-2">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-orange-500" />
              support@rcmiq.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-orange-500" />
              +1 (800) 900-2345
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="w-6 h-6 text-orange-500 mt-0.5" />
              123 Innovation Drive, Suite 400, San Francisco, CA
            </p>
          </div>
        </div>

        {/* Links */}
        {[
          {
            title: "Company",
            links: ["About Us", "Expertise", "Resources", "Blog", "Contact"],
            href: "/",
          },
          {
            title: "Services",
            links: [
              "All Services",
              "Consulting",
              "Security & Compliance",
              "Custom Development",
              "System Integration",
              "Support & Maintenance",
            ],
            href: "/services",
          },
          {
            title: "Solutions",
            links: [
              "All Solutions",
              "Healthcare",
              "Finance",
              "Automation",
              "Analytics",
              "Telehealth",
            ],
            href: "/solutions",
          },
          {
            title: "Policies",
            links: ["Terms & Conditions", "Privacy Policy", "Cookie Policy"],
            href: "/",
          },
        ].map((section) => (
          <div key={section.title}>
            <h4 className="text-base font-semibold text-orange-500 mb-4">
              {section.title}
            </h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              {section.links.map((item) => (
                <li key={item}>
                  <Link href={section.href} className="hover:text-orange-500">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
