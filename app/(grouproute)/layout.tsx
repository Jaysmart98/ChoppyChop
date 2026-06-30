import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChoppyChop - Delicious food on demand",
  description: "Order fresh hand-pulled noodles, spicy ramen, or signature gourmet dishes from local kitchens.",
};

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="w-full min-h-screen bg-[#FAFAFA]">
      {children}
    </div>
  );
}