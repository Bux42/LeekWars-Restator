import componentsData from "@/data/components.json";
import { equipableComponentsStyles } from "./EquipableComponents.styles";
import EquipableComponentCard from "./equipable-component-card/EquipableComponentCard";
import { EquipableComponent } from "@/types/EquipableComponent";
import { useState } from "react";

const getComponents: () => EquipableComponent[] = () => {
  return Object.values(
    componentsData as unknown as Record<string, EquipableComponent>
  );
};

const components = getComponents();
const componentBonuses = [
  "life",
  "strength",
  "wisdom",
  "agility",
  "resistance",
  "science",
  "magic",
  "frequency",
  "cores",
  "ram",
  "tp",
  "mp",
];

export default function EquipableComponents() {
  const [equippedComponents, setEquippedComponents] = useState<
    EquipableComponent[]
  >([]);

  const onEquipComponent = (component: EquipableComponent) => {
    setEquippedComponents((prev) => [...prev, component]);
  };

  const onUnequipComponent = (componentId: number) => {
    setEquippedComponents((prev) =>
      prev.filter((component) => component.id !== componentId)
    );
  };

  // sort components to show equipped ones first
  const allComponentsSorted = [...components].sort(
    (a: EquipableComponent, b: EquipableComponent) =>
      (equippedComponents.includes(b) ? 1 : 0) -
      (equippedComponents.includes(a) ? 1 : 0)
  );
  console.log(components);
  console.log(componentBonuses);

  return (
    <div style={equipableComponentsStyles.container}>
      <h2 style={equipableComponentsStyles.title}>
        Components ({equippedComponents.length} equipped)
      </h2>
      <div
        style={equipableComponentsStyles.gridContainer}
        className="components-grid-scrollable"
      >
        {allComponentsSorted.map((component) => (
          <EquipableComponentCard
            key={component.id}
            component={component}
            equipped={equippedComponents.some((c) => c.id === component.id)}
            equip={() => onEquipComponent(component)}
            unequip={() => onUnequipComponent(component.id)}
          />
        ))}
      </div>
    </div>
  );
}
