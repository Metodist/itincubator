import React, {useState} from "react";

export const FilterCurComponents = () => {
    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}

            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler('all')}>all</button>
                <button onClick={() => onClickFilterHandler('rub')}>rub</button>
                <button onClick={() => onClickFilterHandler('usd')}>usd</button>
            </div>
        </>
    )
}

type FilterType='all'| 'rub'| 'usd';

const[filter, setFilter]=useState<FilterType>('all')

let currentMoney = money;

if (filter === 'rub') {
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
} else if (filter === 'usd') {
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
}


const onClickFilterHandler = (filterButton: FilterType) => {
    setFilter(filterButton)
}

