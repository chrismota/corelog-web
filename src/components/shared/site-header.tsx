import Link from "next/link";
import { ChevronRight, User } from "lucide-react";

import { SidebarTrigger } from "@/components/ui/sidebar";

import { Separator } from "@/components/ui/separator";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SiteHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b px-4">
      <div className="flex items-center gap-3">
        <SidebarTrigger />

        <Separator orientation="vertical" className="h-6" />

        <div className="flex items-center gap-2 text-sm">
          <Link
            href="/dashboard"
            className="text-muted-foreground hover:text-foreground"
          >
            Dashboard
          </Link>

          <ChevronRight className="size-4 text-muted-foreground" />

          <span className="font-medium">Visão geral</span>
        </div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 rounded-md p-1.5 hover:bg-accent">
          <Avatar className="size-8">
            <AvatarFallback>
              <User className="size-4" />
            </AvatarFallback>
          </Avatar>

          <span className="hidden text-sm font-medium sm:block">
            Administrador
          </span>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Minha conta</DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem>Perfil</DropdownMenuItem>

          <DropdownMenuItem>Configurações</DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem variant="destructive">Sair</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
