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

  const toggleMenu = () => setOpen((p) => !p);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Navbar becomes solid after scrolling past hero (120px)
      setIsScrolled(currentScroll > 120);

      // Hide only on large screens when scrolling down
      if (window.innerWidth >= 1024) {
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
        fixed top-0 w-full z-50 transition-all duration-300
        ${showNav ? "translate-y-0" : "-translate-y-20"}
        ${
          isScrolled || open
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-8xl mx-auto h-16 px-6 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/brand/logo.png"
            alt="RCMIQ Logo"
            width={400}
            height={400}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex gap-10 items-center font-medium absolute left-1/2 -translate-x-1/2 transition-colors duration-300 ${
            !isScrolled && !open ? "text-black/70" : "text-gray-800"
          }`}
        >
          {["Services", "Solutions"].map((item) => (
            <li
              key={item}
              className="group relative cursor-pointer hover:text-orange-500"
            >
              <span className="flex items-center gap-1">
                {item} <ChevronDown size={16} />
              </span>

              {/* Dropdown */}
              <ul className="absolute top-full left-0 mt-0 bg-white rounded-xl p-4 space-y-1 shadow-md border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition min-w-[200px] max-h-60 overflow-auto">
                {item === "Services" ? (
                  <>
                    <LinkItem
                      href="/services#healthcare"
                      text="Healthcare Software"
                    />
                    <LinkItem
                      href="/services#financial"
                      text="Financial Dashboards"
                    />
                    <LinkItem
                      href="/services#compliance"
                      text="HIPAA & Compliance"
                    />
                    <LinkItem
                      href="/services#cloud"
                      text="Secure Cloud Setup"
                    />
                  </>
                ) : (
                  <>
                    <LinkItem
                      href="/solutions#rcm"
                      text="Revenue Cycle Management"
                    />
                    <LinkItem
                      href="/solutions#telehealth"
                      text="Telehealth Platform"
                    />
                    <LinkItem
                      href="/solutions#analytics"
                      text="Financial Analytics"
                    />
                    <LinkItem
                      href="/solutions#automation"
                      text="Automation Tools"
                    />
                  </>
                )}
              </ul>
            </li>
          ))}

          <li>
            <Link className="hover:text-orange-500" href="/expertise">
              Expertise
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-500" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-500" href="/resources">
              Resources
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-500" href="/contact">
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/schedule"
            className={`px-5 py-2 rounded-lg transition font-medium ${
              !isScrolled && !open
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "bg-orange-600 text-white hover:bg-orange-600"
            }`}
          >
            Schedule a Call
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className={`md:hidden transition-colors ${
            !isScrolled && !open ? "text-black" : "text-gray-900"
          }`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="px-6 py-6 space-y-4 text-blue-700 font-medium">
            <MobileGroup title="Services">
              <MobileLink href="/services#healthcare" toggle={toggleMenu} />
              <MobileLink href="/services#financial" toggle={toggleMenu} />
              <MobileLink href="/services#compliance" toggle={toggleMenu} />
              <MobileLink href="/services#cloud" toggle={toggleMenu} />
            </MobileGroup>

            <MobileGroup title="Solutions">
              <MobileLink href="/solutions#rcm" toggle={toggleMenu} />
              <MobileLink href="/solutions#telehealth" toggle={toggleMenu} />
              <MobileLink href="/solutions#analytics" toggle={toggleMenu} />
              <MobileLink href="/solutions#automation" toggle={toggleMenu} />
            </MobileGroup>

            {["expertise", "about", "resources", "contact"].map((p) => (
              <Link
                key={p}
                href={`/${p}`}
                onClick={toggleMenu}
                className="block"
              >
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </Link>
            ))}

            <Link
              href="/schedule"
              onClick={toggleMenu}
              className="block text-center bg-orange-500 text-white py-3 rounded-lg mt-4"
            >
              Schedule a Call
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}

/* Helpers */
function LinkItem({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <Link
        href={href}
        className="hover:text-blue-600 truncate block text-gray-800"
      >
        {text}
      </Link>
    </li>
  );
}

function MobileGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <p className="font-semibold mb-1">{title}</p>
      <ul className="pl-4 space-y-1">{children}</ul>
    </li>
  );
}

function MobileLink({ href, toggle }: { href: string; toggle: () => void }) {
  return (
    <li>
      <Link href={href} onClick={toggle}>
        {href.split("#")[1]?.replace("-", " ")}
      </Link>
    </li>
  );
}
