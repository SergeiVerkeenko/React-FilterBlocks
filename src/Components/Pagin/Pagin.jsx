const Pagin = ({ contriesPerPage, total }) => {
    const pageNumber = []

    for (let i = 1; i <= Math.ceil(total / contriesPerPage); i++) {
        pageNumber.push(i)

    }
    return (
        <div>
            <ul className="pagination">
                {
                    pageNumber.map(number => (
                        <li className="page-item" key={number}>
                            <a href="!#" className="page-link">
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagin