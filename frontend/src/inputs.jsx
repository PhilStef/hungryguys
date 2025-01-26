import { useState, useEffect } from 'react'
import './inputstyles.css';

function Inputs() {
    return (
        <>
            <fieldset className="absolute right-0 left-auto mx-auto top-10 p-4 border-2 border-gray-300">
                <legend>Options</legend>
                <div>
                    <input type="checkbox" id="gunviolence"/>
                    <label for="gunviolence">Gun Violence</label>
                </div>
                <div>
                    <input type="checkbox" id="airquality"/>
                    <label for="airquality">Air Quality</label>
                </div>
                <div>
                    <input type="checkbox" id="schools"/>
                    <label for="schools">Schools</label>
                </div>
                <div>
                    <input type="checkbox" id="parks"/>
                    <label for="parks">Parks</label>
                </div>
            </fieldset>
        </>
    )
}

export default Inputs