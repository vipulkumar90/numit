import {
  Home,
  PlusCircle,
  LogIn,
  Users,
  Gamepad2,
  Trophy,
  Settings,
  HelpCircle,
  Info,
  type LucideIcon,
} from "lucide-react";

import type { TranslationKey } from "@/i18n";

export interface NavItem {
  to: string;
  labelKey: TranslationKey;
  icon: LucideIcon;
  /** Shown in the mobile bottom navigation. */
  primary?: boolean;
}

export const navItems: NavItem[] = [
  { to: "/", labelKey: "nav.home", icon: Home, primary: true },
  { to: "/create-room", labelKey: "nav.createRoom", icon: PlusCircle, primary: true },
  { to: "/join-room", labelKey: "nav.joinRoom", icon: LogIn, primary: true },
  { to: "/lobby", labelKey: "nav.lobby", icon: Users },
  { to: "/game", labelKey: "nav.game", icon: Gamepad2 },
  { to: "/results", labelKey: "nav.results", icon: Trophy },
  { to: "/how-to-play", labelKey: "nav.howToPlay", icon: HelpCircle, primary: true },
  { to: "/settings", labelKey: "nav.settings", icon: Settings, primary: true },
  { to: "/about", labelKey: "nav.about", icon: Info },
];

export const primaryNavItems = navItems.filter((item) => item.primary);
