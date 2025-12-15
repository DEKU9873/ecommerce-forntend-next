"use client";

import { faker } from "@faker-js/faker";
import type { ColumnDef } from "@tanstack/react-table";
import * as React from "react";
import { DataGrid } from "@/components/data-grid/data-grid";
import { DataGridKeyboardShortcuts } from "@/components/data-grid/data-grid-keyboard-shortcuts";
import { useDataGrid } from "@/hooks/use-data-grid";

interface SkateTrick {
  id: string;
  trickName?: string;
  skaterName?: string;
  difficulty?: "beginner" | "intermediate" | "advanced" | "expert";
  variant?: "flip" | "grind" | "grab" | "transition" | "manual" | "slide";
  landed?: boolean;
  attempts?: number;
  bestScore?: number;
  location?: string;
  dateAttempted?: string;
}

const skateSpots = [
  "Venice Beach Skate Park",
  "Burnside Skate Park",
  "Love Park (Philadelphia)",
  "MACBA (Barcelona)",
  "Southbank (London)",
  "FDR Skate Park",
  "Brooklyn Banks",
  "El Toro High School",
  "Hubba Hideout",
  "Wallenberg High School",
  "EMB (Embarcadero)",
  "Pier 7 (San Francisco)",
] as const;

const skateTricks = {
  flip: [
    "Kickflip",
    "Heelflip",
    "Tre Flip",
    "Hardflip",
    "Inward Heelflip",
    "Frontside Flip",
    "Backside Flip",
    "Varial Flip",
    "Varial Heelflip",
    "Double Flip",
    "Laser Flip",
    "Anti-Casper Flip",
    "Casper Flip",
    "Impossible",
    "360 Flip",
    "Big Spin",
    "Bigspin Flip",
  ],
  grind: [
    "50-50 Grind",
    "5-0 Grind",
    "Nosegrind",
    "Crooked Grind",
    "Feeble Grind",
    "Smith Grind",
    "Lipslide",
    "Boardslide",
    "Tailslide",
    "Noseslide",
    "Bluntslide",
    "Nollie Backside Lipslide",
    "Switch Frontside Boardslide",
  ],
  grab: [
    "Indy Grab",
    "Melon Grab",
    "Stalefish",
    "Tail Grab",
    "Nose Grab",
    "Method",
    "Mute Grab",
    "Crail Grab",
    "Seatbelt Grab",
    "Roast Beef",
    "Chicken Wing",
    "Tweaked Indy",
    "Japan Air",
  ],
  transition: [
    "Frontside Air",
    "Backside Air",
    "McTwist",
    "540",
    "720",
    "900",
    "Frontside 180",
    "Backside 180",
    "Frontside 360",
    "Backside 360",
    "Alley-Oop",
    "Fakie",
    "Revert",
    "Carve",
    "Pump",
    "Drop In",
  ],
  manual: [
    "Manual",
    "Nose Manual",
    "Casper",
    "Rail Stand",
    "Pogo",
    "Handstand",
    "One Foot Manual",
    "Spacewalk",
    "Truckstand",
    "Primo",
  ],
  slide: [
    "Powerslide",
    "Bert Slide",
    "Coleman Slide",
    "Pendulum Slide",
    "Stand-up Slide",
    "Toeside Slide",
    "Heelside Slide",
  ],
} as const;

export function DataGridDemo() {
  const [data, setData] = React.useState<SkateTrick[]>([]);

  const columns = React.useMemo<ColumnDef<SkateTrick>[]>(
    () => [
      {
        id: "trickName",
        accessorKey: "trickName",
        header: "Trick name",
        meta: {
          
          cell: {
            variant: "short-text",
          },
        },
        minSize: 180,
      },
      {
        id: "skaterName",
        accessorKey: "skaterName",
        header: "Skater",
        meta: {
          cell: {
            variant: "short-text",
          },
        },
        minSize: 150,
      },
      {
        id: "difficulty",
        accessorKey: "difficulty",
        header: "Difficulty",
        meta: {
          cell: {
            variant: "select",
            options: [
              { label: "Beginner", value: "beginner" },
              { label: "Intermediate", value: "intermediate" },
              { label: "Advanced", value: "advanced" },
              { label: "Expert", value: "expert" },
            ],
          },
        },
        minSize: 120,
      },
      {
        id: "variant",
        accessorKey: "variant",
        header: "Category",
        meta: {
          cell: {
            variant: "select",
            options: [
              { label: "Flip", value: "flip" },
              { label: "Grind", value: "grind" },
              { label: "Grab", value: "grab" },
              { label: "Transition", value: "transition" },
              { label: "Manual", value: "manual" },
              { label: "Slide", value: "slide" },
            ],
          },
        },
        minSize: 120,
      },
      {
        id: "landed",
        accessorKey: "landed",
        header: "Landed",
        meta: {
          cell: {
            variant: "checkbox",
          },
        },
        minSize: 100,
      },
      {
        id: "attempts",
        accessorKey: "attempts",
        header: "Attempts",
        meta: {
          cell: {
            variant: "number",
            min: 1,
            max: 100,
          },
        },
        minSize: 100,
      },
      {
        id: "bestScore",
        accessorKey: "bestScore",
        header: "Score",
        meta: {
          cell: {
            variant: "number",
            min: 1,
            max: 10,
          },
        },
        minSize: 110,
      },
      {
        id: "location",
        accessorKey: "location",
        header: "Location",
        meta: {
          cell: {
            variant: "select",
            options: skateSpots.map((spot) => ({ label: spot, value: spot })),
          },
        },
        minSize: 180,
      },
      {
        id: "dateAttempted",
        accessorKey: "dateAttempted",
        header: "Attempted at",
        meta: {
          cell: {
            variant: "date",
          },
        },
        minSize: 130,
      },
      
    ],
    [],
  );

  const onRowAdd = React.useCallback(() => {
    setData((prev) => [...prev, { id: faker.string.nanoid() }]);

    return {
      rowIndex: data.length,
      columnId: "trickName",
    };
  }, [data.length]);

  const { table, ...dataGridProps } = useDataGrid({
    columns,
    data,
    onDataChange: setData,
    onRowAdd,
    getRowId: (row) => row.id,
    initialState: {
      columnPinning: {
        left: ["select"],
      },
    },
    enablePaste: true,
  });

  return (
    <>
      <DataGridKeyboardShortcuts enableSearch={!!dataGridProps.searchState} />
      <DataGrid {...dataGridProps} table={table} height={340} />
    </>
  );
}

export default DataGridDemo;
