import weaponNamesToImageUrls from "@/data/weapon_names_to_image_urls.json";
import chipNamesToImageUrls from "@/data/chip_names_to_image_urls.json";

export const getWeaponImageUrlByName = (weaponName: string): string => {
  return (
    weaponNamesToImageUrls[weaponName as keyof typeof weaponNamesToImageUrls] ||
    ""
  );
};

export const getChipImageUrlByName = (chipName: string): string => {
  return (
    chipNamesToImageUrls[chipName as keyof typeof chipNamesToImageUrls] || ""
  );
};
