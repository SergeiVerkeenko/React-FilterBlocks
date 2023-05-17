import { useEffect, useState } from 'react'
import style from './style.module.scss'
import storage from '../../Storage/Storage.json'
import Content from '../Content/Content'
import Pagin from '../Pagin/Pagin'


function Pagination() {
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
            <Content></Content>
            <Pagin
                contriesPerPage={contriesPerPage}
                total={contries.length}
            >

            </Pagin>

        </>

    )
}

export default Pagination