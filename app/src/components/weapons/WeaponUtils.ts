import weaponNamesToImageUrls from "@/data/weapon_names_to_image_urls.json";

export const getWeaponImageUrlByName = (weaponName: string): string => {
  return (
    weaponNamesToImageUrls[weaponName as keyof typeof weaponNamesToImageUrls] ||
    ""
  );
};
