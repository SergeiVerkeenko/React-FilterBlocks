import style from './style.module.scss'
import { useEffect, useState } from 'react'
import storage from '../../Storage/Storage.json'
import ItemContent from './Item.Content'
import Pagin from '../Pagin/Pagin'

function Content() {
    const [information, setContries] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [informationPerPage] = useState(4)

    useEffect(() => {
        const getCountries = () => {
            setContries(storage)
        }

        getCountries()
    }, [])

    const lastIndex = currentPage * informationPerPage
    const firstIndex = lastIndex - informationPerPage
    const currentInfo = information.slice(firstIndex, lastIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)
    return (

        <>
            {currentInfo.map(el => <ItemContent id={el.id} vacancy={el.vacancy} workday={el.workday} city={el.city} salary={el.salary} />)}
            <Pagin
                informationPerPage={informationPerPage}
                total={information.length}
                paginate={paginate}
            >

            </Pagin>

        </>

    )

}

export default Content