import React, { useState } from "react"
import caretIcon from '../../public/img/icons/caretIcon.svg'

export function FilterDropdown({ title, groups }) {
    const [open, setOpen] = useState(false)
    const [values, setValues] = useState({})

    const toggle = (groupKey, optValue) => {
        setValues(prevValues => {
            const newSet = new Set(prevValues[groupKey] || [])
            if (newSet.has(optValue)) newSet.delete(optValue)
            else newSet.add(optValue)
            return { ...prevValues, [groupKey]: newSet }
        });
    };

    const clearAll = () => setValues({})

    const apply = () => {
        console.log("Applied filter:", values)
        setOpen(false)
    }

    return (
        <div className="filter-dropdown">
            <button className="trigger" onClick={() => setOpen(o => !o)}>
                {title}
                <img
                    className="caret"
                    src={caretIcon}
                />
            </button>

            {open && (
                <div className="panel">
                    {groups.map(group => (
                        <div className="group" key={group.key}>
                            <div className="group-label">{group.label}</div>
                            <div className="options">
                                {group.options.map(option => {
                                    const checked = values[group.key]?.has(option.value) || false;
                                    return (
                                        <label className="option" key={option.value}>
                                            <input
                                                type="checkbox"
                                                checked={checked}
                                                onChange={() => toggle(group.key, option.value)}
                                            />
                                            <span className="label-text">{option.label}</span>
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                    <div className="actions">
                        <button className="clear" onClick={clearAll}>Clear all</button>
                        <button className="apply" onClick={apply}>Apply</button>
                    </div>
                </div>
            )}
        </div>
    )
}
