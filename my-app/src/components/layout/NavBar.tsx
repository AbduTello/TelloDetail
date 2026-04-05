import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center p-6">
      <div className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="Tello Detail Logo"
          width={120}
          height={50}
          className="h-auto"
          priority
        />

        <div className="flex flex-col leading-tight">
          <h1 className="text-2xl font-extrabold">
            Tello Detail
          </h1>
          <p className="text-sm text-gray-600">
            Professional car detailing services
          </p>
        </div>
      </div>
    </nav>
  );
}