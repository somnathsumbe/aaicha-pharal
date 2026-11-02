import type { Society } from "@/types/catalog";

// Placeholder coverage list. Replace with real society data from the
// owner, or (Phase 10) load from MongoDB's societies collection.
export const societies: Society[] = [];

export function isDeliveryAvailable(_societyId: string): boolean {
  const society = societies.find((s) => s.id === _societyId);
  return Boolean(society?.deliveryAvailable);
}
