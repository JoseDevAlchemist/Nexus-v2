import Link from "next/link";
import Image from "next/image";
import { footer } from "@/content/footer";

export default function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface-raised py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:gap-16">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-4">
            <Image
              src="/brand/logo.jpeg"
              alt="Nexus"
              width={879}
              height={640}
              className="h-8 w-auto object-contain"
            />
            <p className="text-sm text-foreground">{footer.tagline}</p>
            <p className="text-sm leading-relaxed text-muted">{footer.blurb}</p>
          </div>

          {/* Columns 2–4 */}
          {footer.columns.map((col) => (
            <nav key={col.heading} className="flex flex-col gap-4" aria-label={col.heading}>
              <h3 className="text-xs uppercase tracking-wider text-muted">{col.heading}</h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted transition-colors duration-200 hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-surface-border pt-6 text-sm text-muted sm:flex-row sm:items-center">
          <p>{footer.bottomLeft}</p>
        </div>
      </div>
    </footer>
  );
}
