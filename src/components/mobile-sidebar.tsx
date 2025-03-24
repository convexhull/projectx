"use client";

import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Sidebar } from "./sidebar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Sheet modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="secondary" className="lg:hidden">
          <MenuIcon className="size-4 text-neutral-500" />
        </Button>
      </SheetTrigger>
      <SheetContent title="mobile sidebar" side="left" className="p-0">
        <SheetTitle className="sr-only">Cow</SheetTitle>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
