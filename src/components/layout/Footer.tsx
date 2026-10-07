import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-surface-border py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center md:px-6">
        <div className="flex flex-col gap-3">
          <Image
            src="/brand/logo.jpeg"
            alt={site.name}
            width={879}
            height={640}
            className="h-10 w-auto"
          />
          <p className="text-sm text-muted">{site.belief}</p>
        </div>

        <nav className="flex items-center gap-6" aria-label="Footer">
          {site.navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-muted transition-colors duration-200 hover:text-foreground">
              {link.label}
            </Link>
          ))}
          <Link href={site.primaryCta.href} className="text-sm text-muted transition-colors duration-200 hover:text-foreground">
            {site.primaryCta.label}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
