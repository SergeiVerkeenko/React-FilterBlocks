import style from './style.module.scss'
import { useEffect, useState } from 'react'
import storage from '../../Storage/Storage.json'
import ItemContent from './Item.Content'
import Pagin from '../Pagin/Pagin'

function Content() {
    const [contries, setContries] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [contriesPerPage] = useState(5)

    useEffect(() => {
        const getCountries = () => {
            setLoading(true)
            setContries(storage)
            setLoading(false)
        }

        getCountries()
    }, [])

    const lastIndex = currentPage * contriesPerPage
    const firstIndex = lastIndex - contriesPerPage
    const currentCountry = contries.slice(firstIndex, lastIndex)

    return (

        <>
            {storage.map(el => <ItemContent id={el.id} vacancy={el.vacancy} workday={el.workday} city={el.city} salary={el.salary} />)}
            <Pagin
                contriesPerPage={contriesPerPage}
                total={contries.length}
            >

            </Pagin>

        </>

    )

}

export default Content