import React, {useState} from "react";

export const FilterCurComponents = () => {

    const [money, setMoney] = useState([
        {banknots: "Dollars", value: 100, number: " a1234567890"},
        {banknots: "Dollars", value: 50, number: " z1234567890"},
        {banknots: "RUBLS", value: 100, number: " w1234567890"},
        {banknots: "Dollars", value: 100, number: " e1234567890"},
        {banknots: "Dollars", value: 50, number: " c1234567890"},
        {banknots: "RUBLS", value: 100, number: " r1234567890"},
        {banknots: "Dollars", value: 50, number: " x1234567890"},
        {banknots: "RUBLS", value: 50, number: " v1234567890"},
    ])

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


