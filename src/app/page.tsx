'use client';
import React from "react";
import Spinner from "@/components/ui/Spinner";
import MainLayout from "@/components/layout/MainLayout";
import HomePage from "@/components/home/HomePage";

export default function Page() {
  return (
    <>
      <Spinner />
      <MainLayout>
        <HomePage />
      </MainLayout>
    </>
  );
}
