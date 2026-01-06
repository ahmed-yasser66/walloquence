"use server";
import { redirect } from "next/navigation";

export const handleSearch = async (e: FormData) => {
  const input = e.get("input");
  redirect("/search" + `?q=${input}`);
};