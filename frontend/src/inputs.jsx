import { useState, useEffect } from 'react'
import './inputstyles.css';

function Inputs() {
    return (
        <>
            <div className="absolute right-0 pr-40 top-10">
                <div class="justify">
                    <label class="container">Gun Violence
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>

                    <label class="container">Weather
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>

                    <label class="container">Random
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>

                    <label class="container">Random
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                </div>
            </div>
        </>
    )
}

export default Inputs