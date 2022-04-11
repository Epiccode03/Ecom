import React from 'react'
import { FaAngleDown } from 'react-icons/fa';

function Filter() {
    const addDiv = (a) => {
        const node = document.createElement('span');
        const textNode = document.createTextNode('Selected filter');
        const add = document.getElementById('add');
        const SelectedFilter = document.getElementById('SelectedFilter');
        if (document.getElementById(a).checked === true) {
            node.appendChild(textNode);
            node.setAttribute("id", "SelectedFilter");
            add.appendChild(node);
        }
        else {
            SelectedFilter.remove();
        }

        var clear = document.getElementById('clearFilter');
        clear.addEventListener('click', () => {
            // add.removeChild(node);
            if (add.appendChild(node)) {
                node.parentNode.removeChild(node);
            }
            document.getElementById('check_input').checked = false;
            for (var i = 1; i < 5; i++) {
                document.getElementById(`check_input${i}`).checked = false;
            }
        })
    }
    return (
        <>
            <div className="head3">
                <h1>Fruits and Vegetables</h1>
                <div className="icons1">
                    <div className="grid">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grid-fill" viewBox="0 0 16 16">
                            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
                        </svg>
                        <span>Grid view</span>
                    </div>
                    <div className="list">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <span>List view</span>
                    </div>
                    <div className="product">
                        <span className='svg'>117</span>
                        <span>Products</span>
                    </div>
                </div>
            </div>
            <div className="head4">
                <div className="box">
                    <input type="checkbox" name="check_input" id="check_input" onClick={(event) => addDiv(event.target.id)} />
                    <label className="check_box" htmlFor='check_input'></label>
                    <span>Filter Text</span>

                    <input type="checkbox" name="check_input" id="check_input1" onClick={(event) => addDiv(event.target.id)} />
                    <label className="check_box" htmlFor='check_input1'></label>
                    <span>Filter Text</span>
                </div>
                <div className="box1">
                    <input type="checkbox" name="check_input" id="check_input2" onClick={(event) => addDiv(event.target.id)} />
                    <label className="square_box" htmlFor='check_input2'></label>
                    <span>Filter</span>
                </div>
                <div className="box1">
                    <input type="checkbox" name="check_input" id="check_input3" onClick={(event) => addDiv(event.target.id)} />
                    <label className="square_box" htmlFor='check_input3'></label>
                    <span>Filter</span>
                </div>
                <div className="box1">
                    <div className="box2">
                        <input type="checkbox" name="check_input" id="check_input4" onClick={(event) => addDiv(event.target.id)} />
                        <label className="square_box" htmlFor='check_input4'></label>
                        <span>Filter</span>
                    </div>
                    <div className="select">
                        <span>Select</span>
                        <FaAngleDown className='angleDown' />
                        <div className="dropDown">
                            <ul>
                                <li>Filter</li>
                                <li>Filter</li>
                                <li>Filter</li>
                                <li>Filter</li>
                                <li>Filter</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter" id='add'>
                <span>Applied filters:</span>
                <button id="clearFilter" className='flexButton'>Clear Filters</button>
            </div>
        </>
    )
}

export default Filter