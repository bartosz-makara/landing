"use client";

import * as React from "react";
// import { Minus, Plus } from "lucide-react";
// import { Bar, BarChart, ResponsiveContainer } from "recharts";

import { Button } from "../components/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Calendly from "./booking";
import { useDrawerStore } from "../lib/drawerStore";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

interface Props {
  isOpen: boolean;
  close: () => void;
}

export function DrawerDemo() {
  const { isOpen, close } = useDrawerStore() as any;
  return (
    <Drawer open={isOpen} onClose={close}>
      <DrawerTrigger asChild>
        <div className="w-80">
          <Button className="w-full">Umów konsultację</Button>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex flex-col items-center justify-center space-x-2 mt-4">
          <DrawerTitle></DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <div className="mx-auto w-full max-w-sm">
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Calendly />
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button className="">Zarezerwuję później</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
