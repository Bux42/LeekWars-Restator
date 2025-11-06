import { EquipableComponent } from "@/types/EquipableComponent";
import componentNameToImageUrls from "@/data/component_names_to_image_urls.json";
import {
  equipableComponentCardStyles,
  hoverEffects,
} from "./EquipableComponentCard.styles";
import ComponentStatCard from "./component-stat-card/ComponentStatCard";

export default function EquipableComponentCard({
  component,
  equipped,
  equip,
  unequip,
}: {
  component: EquipableComponent;
  equipped: boolean;
  equip: () => void;
  unequip: () => void;
}) {
  const imageUrl =
    componentNameToImageUrls[
      component.name as keyof typeof componentNameToImageUrls
    ] || "";

  const onCardClick = () => {
    if (equipped) {
      unequip();
    } else {
      equip();
    }
  };

  return (
    <div
      style={equipableComponentCardStyles.container(equipped)}
      onClick={onCardClick}
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, hoverEffects.cardHover);
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.style, hoverEffects.cardDefault);
      }}
    >
      <img
        style={equipableComponentCardStyles.image}
        src={imageUrl}
        width={100}
        height={100}
        alt={component.name.replace(/_/g, " ")}
      />
      <div style={equipableComponentCardStyles.name}>
        {component.name.replace(/_/g, " ")}
      </div>
      <div style={equipableComponentCardStyles.info}>
        ID: {component.id} | Template: {component.template}
      </div>

      <div style={equipableComponentCardStyles.stats}>
        {component.stats.map((stat, index) => (
          <ComponentStatCard key={index} stat={stat} />
        ))}
      </div>
    </div>
  );
}
