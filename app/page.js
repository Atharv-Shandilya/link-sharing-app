"use client";

import LinkCustomization from "@/components/LinkCustomization";
import Menu from "@/components/Menu";
import PreviewColumn from "@/components/PreviewColumn";
import ProfileCustomization from "@/components/ProfileCustomization";

import { useState } from "react";
export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <main>
      <Menu activeTab={activeTab} setActiveTab={setActiveTab} />
      <section className="flex mt-6">
        <PreviewColumn />
        {activeTab == 0 && <LinkCustomization />}
        {activeTab == 1 && <ProfileCustomization />}
      </section>
    </main>
  );
}
