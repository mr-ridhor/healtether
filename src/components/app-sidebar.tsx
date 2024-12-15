"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";

import HomeIcon from "./svgs/home";
import AppointmentIcon from "./svgs/appointment";
import WhatsAppIcon from "./svgs/whatsApp";
import PatientIcon from "./svgs/patient";
import StaffIcon from "./svgs/staff";
import PaymentIcon from "./svgs/payment";
import { TrendingUpIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export function AppSidebar() {
  const pathname = usePathname(); // Get the current path

  const items = [
    {
      title: "Home",
      url: "/",
      icon: <HomeIcon />,
    },
    {
      title: "Appointment",
      url: "/appointment",
      icon: <AppointmentIcon />,
    },
    {
      title: "WhatsApp Chat",
      url: "/whatsapp-chat",
      icon: <WhatsAppIcon />,
    },
    {
      title: "Patients Record",
      url: "/patients-record",
      icon: <PatientIcon />,
    },
    {
      title: "Manage Staff",
      url: "/manage-staff",
      icon: <StaffIcon />,
    },
    {
      title: "Payments Record",
      url: "/payments-record",
      icon: <PaymentIcon />,
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: <TrendingUpIcon />,
    },
  ];

  return (
    <Sidebar className="bg-white">
      <SidebarHeader className="w-full flex flex-col items-center">
        <div className="w-full h-16 relative">
          <Image
            className="object-cover"
            src="/logo.png"
            alt="Next.js logo"
            fill
            priority
          />
        </div>
        <Button className="h-12 bg-[#198E79] px-0 text-base rounded-xl w-[80%]">
        Schedule Appointment
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="px-0">
        
          <SidebarGroupContent className="px-0">
            <SidebarMenu className="space-y-4">
              {items.map((item) => {
                const isActive = pathname === item.url; // Check if the current path matches the item's URL
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`py-6 hover:bg-gray-100/80 rounded-none ${
                        isActive ? "bg-[#F5F5F5] border-r-[3px] border-[#110C2C]" : ""
                      }`}
                    >
                      <Link href={item.url} className="flex items-center gap-y-4">
                        <div className="h-8 w-10">{item.icon}</div>
                        <span className="text-xl">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
