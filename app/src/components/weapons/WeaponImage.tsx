import weaponNamesToImageUrls from "@/data/weapon_names_to_image_urls.json";

export default function WeaponImage({ weaponName }: { weaponName: string }) {
  const imageUrl =
    weaponNamesToImageUrls[weaponName as keyof typeof weaponNamesToImageUrls] ||
    "";
  return <img src={imageUrl} alt={weaponName} />;
}
