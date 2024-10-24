"use client";

import Header from "@/components/Header/Header";
import Cabinet from "../lk/page";
import { AdminHeader } from "@/components/AdminHeader/AdminHeader";
import AdminCabinet from "@/components/AdminCabinet/AdminCabinet";

export default function adminLk() {
  return (
    <div className="container">
      <AdminHeader/>
      <AdminCabinet/>
    </div>
  );
}
