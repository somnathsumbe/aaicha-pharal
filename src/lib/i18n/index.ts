import mr from "./mr";
import hi from "./hi";
import en from "./en";
import type { Locale } from "@/types/catalog";

export const dictionaries = { mr, hi, en } satisfies Record<Locale, unknown>;
export const defaultLocale: Locale = "mr";
export const locales: Locale[] = ["mr", "hi", "en"];
export type Dictionary = typeof mr;
