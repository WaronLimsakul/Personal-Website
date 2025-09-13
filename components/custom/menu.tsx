import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MenuButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="mr-2 md:hidden">
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[200px] sm:w-[250px]">
        <SheetHeader className="hidden">
          <SheetTitle></SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8 ml-4">
          <SheetClose asChild>
            <Link
              href="#about"
              className="text-sm hover:text-muted-foreground transition-colors"
            >
              About
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="#projects"
              className="text-sm hover:text-muted-foreground transition-colors"
            >
              Projects
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="#contact"
              className="text-sm hover:text-muted-foreground transition-colors"
            >
              Contact
            </Link>
          </SheetClose>
          <SheetClose asChild>
            {/*to update resume, go to public/ and replace resume.pdf with the new file (same name)*/}
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium"
            >
              Resume
            </Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
