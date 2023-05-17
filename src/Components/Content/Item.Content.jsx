import style from './style.module.scss'

function ItemContent({ vacancy, workday, city, salary, id }) {
    return (
        <div className={style['wrapper']} >

            <h2>{id}.{vacancy}</h2>
            <div>
                <p>{salary}</p>
                <p>{workday}</p>
            </div>
            <p>{city}</p>
        </div>
    )
}

export default ItemContent