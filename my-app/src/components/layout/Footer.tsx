import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Info,
  CarFront,
  ShieldCheck,
  ShieldPlus,
  Droplets,
  Phone,
  Mail,
  MapPin,
  Clock3,
  CircleDollarSign,
  ClipboardClock,
  HeartPlus,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black px-8 py-10">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.2fr]">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              className="h-auto w-[120px]"
              src="/logo-black.png"
              alt="Tello Detail Logo"
              width={120}
              height={50}
              priority
            />

            <div className="flex flex-col leading-tight">
              <h2 className="text-2xl font-extrabold text-white">
                Tello Detail
              </h2>
              <p className="text-sm text-white/60">
                Professional car detailing services
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm text-white/85">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Serving Dearborn & Metro Detroit</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock3 size={16} />
              <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>

        {/* Services */}
        <nav className="flex flex-col gap-3 text-white">
          <h3 className="mb-1 text-base font-bold">Services</h3>

          <Link
            className="flex items-center gap-2 font-medium hover:underline"
            href="/services/exterior-detail"
          >
            <CarFront size={18} />
            Exterior Detail
          </Link>

          <Link
            className="flex items-center gap-2 font-medium hover:underline"
            href="/services/interior-detail"
          >
            <Sparkles size={18} />
            Interior Detail
          </Link>

          <Link
            className="flex items-center gap-2 font-medium hover:underline"
            href="/services/ceramic-coating"
          >
            <ShieldPlus size={18} />
            Ceramic Coating
          </Link>

          <Link
            className="flex items-center gap-2 font-medium hover:underline"
            href="/services/engine-bay"
          >
            <Droplets size={18} />
            Engine Bay Cleaning
          </Link>
        </nav>

        {/* Quick Links */}
        <nav className="flex flex-col gap-3 text-white">
          <h3 className="mb-1 text-base font-bold">Quick Links</h3>

          <Link
            className="flex items-center gap-2 font-medium hover:underline"
            href="/about"
          >
            <Info size={18} />
            About Us
          </Link>

          <Link
            className="flex items-center gap-2 font-medium hover:underline"
            href="/pricing"
          >
            <CircleDollarSign size={18} />
            Pricing
          </Link>

          <Link
            className="flex items-center gap-2 font-medium hover:underline"
            href="/gallery"
          >
            <ShieldCheck size={18} />
            Before & After
          </Link>

          <Link
            className="flex items-center gap-2 font-medium hover:underline"
            href="/book"
          >
            <ClipboardClock size={18} />
            Book Now
          </Link>
        </nav>

        {/* Contact */}
        <div className="flex flex-col gap-3 text-white">
          <h3 className="mb-1 text-base font-bold">Contact</h3>

          <a
            className="flex items-center gap-2 font-medium hover:underline"
            href="tel:+13135551234"
          >
            <Phone size={18} />
            (313) 555-1234
          </a>

          <a
            className="flex items-center gap-2 font-medium hover:underline"
            href="mailto:hello@tellodetail.com"
          >
            <Mail size={18} />
            hello@tellodetail.com
          </a>

          <a
            className="flex items-center gap-2 font-medium hover:underline"
            href="https://www.instagram.com/tellodetail"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeartPlus size={18} />
            Instagram
          </a>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 border-t border-white/20 pt-4 text-sm text-white/80 sm:flex-row items-center justify-center">
        <p>© {currentYear} Tello Detail. All Rights Reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;