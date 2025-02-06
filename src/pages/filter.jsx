// import React, { useState } from 'react'

// const Filter = () => {
//     const [openSection, setOpenSection] = useState(null);

//     const toggleSection = (section) => {
//         setOpenSection(openSection === section ? null : section);
//     };
//     return (
//         <div>
//             <aside className="sidebar">
//                 <div className="filter-item">
//                     <label className="checkbox-container    label">
//                         <input type="checkbox" />
//                         <span className="checkmark"></span>
//                         CUSTOMIZABLE
//                     </label>
//                 </div>
//                 <div className="accordion">
//                     <div className="accordion-header" onClick={() => toggleSection(1)}>
//                         <label className='label'>IDEAL FOR</label>

//                         <span className="dropdown-arrow">{openSection === 1 ? "▲" : "▼"}</span>
//                     </div>

//                     <div className="filter-content">All</div>
//                     <hr />

//                     {openSection === 1 && (
//                         <>
//                             <label className="checkbox-container marginTop-10">
//                                 <input type="checkbox" />
//                                 <span className="checkmark"></span>
//                                 Men
//                             </label>
//                             <label className="checkbox-container">
//                                 <input type="checkbox" />
//                                 <span className="checkmark"></span>
//                                 Women
//                             </label>
//                             <label className="checkbox-container">
//                                 <input type="checkbox" />
//                                 <span className="checkmark"></span>
//                                 Baby &Kids
//                             </label>
//                         </>
//                     )}

//                     <div className="accordion-header" onClick={() => toggleSection(2)}>
//                         <label className='label'>OCCASION</label>
//                         <span className="dropdown-arrow">{openSection === 2 ? "▲" : "▼"}</span>
//                     </div>
//                     <div className="filter-content">All</div>

//                     <hr />
//                     {openSection === 2 && (
//                         <div >
//                             <p></p>
//                         </div>
//                     )}

//                     <div className="accordion-header" onClick={() => toggleSection(3)}>
//                         <label className='label'>WORK</label>
//                         <span className="dropdown-arrow">{openSection === 3 ? "▲" : "▼"}</span>
//                     </div>
//                     <div className="filter-content">All</div>

//                     <hr />
//                     {openSection === 3 && (
//                         <div >
//                             <p></p>
//                         </div>
//                     )}
//                 </div>

//                 {/* {["OCCASION", "WORK", "FABRIC", "SEGMENT"].map((filter) => (
//                     <div key={filter} className="filter-section">
//                         <div className="filter-header">
//                             <span>{filter}</span>
//                             <span className="dropdown-arrow">▼</span>
//                         </div>
//                         <div className="filter-content">All</div>
//                     </div>
//                 ))} */}


//             </aside>
//         </div>
//     )
// }

// export default Filter


import React, { useState } from "react";

const Filter = () => {
    const [openSection, setOpenSection] = useState(null);
    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const filters = [
        { id: 1, title: "IDEAL FOR", options: ["Men", "Women", "Baby & Kids"] },
        { id: 2, title: "OCCASION", options: [] },
        { id: 3, title: "WORK", options: [] },
        { id: 3, title: "FABRIC", options: [] },
        { id: 3, title: "SEGMENT", options: [] },
        { id: 3, title: "SUITABLE", options: [] },
        { id: 3, title: "RAW MATERIALS", options: [] },
        { id: 3, title: "PATTER", options: [] }
    ];

    return (
        <aside className="sidebar">
            {/* Customizable Checkbox */}
            <div className="filter-item">
                <label className="checkbox-container label">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    CUSTOMIZABLE
                </label>
            </div>

            {/* Accordion Sections */}
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
