// export default function Role() {
//     return (
//         <div>
//             <h1>Role</h1>
//         </div>
//     )
// }

import React, { useState, useEffect } from 'react'

export default function FuncLoop() {
    const [item, setItem] = useState(null);
    useEffect(() => {
        let data = [{ id: 1, name: "张三" }, { id: 21, name: "李四" }, { id: 31, name: "王五" }];
        setItem(data);
    }, []);
    console.log(item);

    if (!item) return null

    const onclick = (value, index) => {
        console.log(value, index);
        let copy = [...item];
        copy[index].name = '修改后的名字';
        setItem(copy)
    }
    return (
        <div>
            <ul>
                {item.map((value, index) => (
                    <li key={value.id} onClick={() => onclick(value, index)}>{value.name}</li>
                ))}
            </ul>
        </div>
    )
}