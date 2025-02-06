


import React, { useState } from "react";

const Filter = () => {
    const [openSection, setOpenSection] = useState(null);
    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const filters = [
        { id: 1, title: "IDEAL FOR", options: ["Men", "Women", "Baby & Kids"] },
        { id: 2, title: "OCCASION", options: [] },
        { id: 3, title: "WORK", options: ['Dummy'] },
        { id: 3, title: "FABRIC", options: ['Dummy'] },
        { id: 3, title: "SEGMENT", options: ['Dummy'] },
        { id: 3, title: "SUITABLE", options: ['Dummy'] },
        { id: 3, title: "RAW MATERIALS", options: ['Dummy'] },
        { id: 3, title: "PATTER", options: ['Dummy'] }
    ];

    return (
        <aside className="sidebar">
            <div className="filter-item">
                <label className="checkbox-container label">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    CUSTOMIZABLE
                </label>
            </div>

            <div className="accordion">
                {filters.map(({ id, title, options }) => (
                    <div key={id}>
                        <div className="accordion-header" onClick={() => toggleSection(id)}>
                            <label className="label">{title}</label>
                            <span className="dropdown-arrow">{openSection === id ? "▲" : "▼"}</span>
                        </div>

                        <div className="filter-content">All</div>
                        <hr />

                        {openSection === id && options.length > 0 && (
                            options.map((option, index) => (
                                <label key={index} className="checkbox-container marginTop-10">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                    {option}
                                </label>
                            ))
                        )}
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default Filter;
