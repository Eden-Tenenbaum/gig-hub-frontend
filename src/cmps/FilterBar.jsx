import React from "react";
import { filtersSchema } from "../services/gig/filterSchema.js";
import { FilterDropdown } from "./FilterDropdown.jsx"


export function FilterBar() {
    return (
        <div className="filter-bar">
            {filtersSchema.map(Sch => (
                <FilterDropdown
                    key={Sch.key}
                    title={Sch.label}
                    groups={Sch.groups}
                />
            ))}
        </div>
    );
}
