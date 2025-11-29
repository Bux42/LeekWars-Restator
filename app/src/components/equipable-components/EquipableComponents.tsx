import componentsData from "@/data/components.json";
import { equipableComponentsStyles } from "./EquipableComponents.styles";
import EquipableComponentCard from "./equipable-component-card/EquipableComponentCard";
import { EquipableComponent } from "@/types/EquipableComponent";
import { getItemLevels } from "@/lib/items/ItemLevelsHelpers";
import StatFilter from "../stat-filter/StatFilter";
import { COMPONENTS_STAT_FILTERS } from "@/constants/StatFilters.constants";
import React from "react";
import { IFilterStat } from "@/types/FilterStat";

const itemLevels = getItemLevels();

const getComponents: () => EquipableComponent[] = () => {
  return Object.values(
    componentsData as unknown as Record<string, EquipableComponent>
  ).sort((a, b) => {
    const levelA = itemLevels[a.name] || 1;
    const levelB = itemLevels[b.name] || 1;
    return levelA - levelB;
  });
};

const components = getComponents();

export default function EquipableComponents({
  equippedComponents,
  onEquipComponent,
  onUnequipComponent,
}: {
  equippedComponents: EquipableComponent[];
  onEquipComponent: (component: EquipableComponent) => void;
  onUnequipComponent: (componentId: number) => void;
}) {
  const [filterStats, setFilterStats] = React.useState<IFilterStat[]>([]);

  const onEquipComponentClicked = (component: EquipableComponent) => {
    onEquipComponent(component);
  };

  const onUnequipComponentClicked = (componentId: number) => {
    onUnequipComponent(componentId);
  };

  // sort components to show equipped ones first
  const allComponentsSorted = [...components].sort(
    (a: EquipableComponent, b: EquipableComponent) =>
      (equippedComponents.includes(b) ? 1 : 0) -
      (equippedComponents.includes(a) ? 1 : 0)
  );

  // remove components that don't match the filter stats, and are not equipped
  const filteredComponents = allComponentsSorted.filter((component) => {
    if (equippedComponents.includes(component)) {
      return true;
    }
    if (filterStats.length === 0) {
      return true;
    }

    for (const componentStat of component.stats) {
      for (const filterStat of filterStats) {
        if (
          componentStat[0] === filterStat.key &&
          componentStat[1] > filterStat.value
        ) {
          return true;
        }
      }
    }

    return false;
  });

  const onFilterStatSelect = (filterStat: IFilterStat) => {
    let updatedFilterStats: IFilterStat[];
    if (filterStats.includes(filterStat)) {
      updatedFilterStats = filterStats.filter(
        (key: IFilterStat) => key !== filterStat
      ) as unknown as IFilterStat[];
    } else {
      updatedFilterStats = [
        ...(filterStats as unknown as IFilterStat[]),
        filterStat,
      ] as unknown as IFilterStat[];
    }
    setFilterStats(updatedFilterStats);
  };

  return (
    <div style={equipableComponentsStyles.container}>
      <h2>Components ({equippedComponents.length} equipped) </h2>
      <StatFilter
        onSelectStat={onFilterStatSelect}
        allFilterStats={COMPONENTS_STAT_FILTERS}
      />
      <div
        style={equipableComponentsStyles.gridContainer}
        className="components-grid-scrollable"
      >
        {filteredComponents.map((component) => (
          <EquipableComponentCard
            key={component.id}
            component={component}
            equipped={equippedComponents.some((c) => c.id === component.id)}
            equip={() => onEquipComponentClicked(component)}
            unequip={() => onUnequipComponentClicked(component.id)}
          />
        ))}
      </div>
    </div>
  );
}
