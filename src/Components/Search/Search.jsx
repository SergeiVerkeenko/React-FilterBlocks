import style from './style.module.scss'
import { Button, Input } from '@mantine/core';
import { IconAt, IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
function Search() {

    const [input, setInput] = useState('')
    function showValueInp() {
       console.log(input);
    }

    return (
        <div className={style['wrapper']}>
            <Input
                onChange={(event) => setInput(event.target.value)}
                icon={<IconSearch />}
                placeholder="Введите название вакансии"
                rightSection={< Button onClick={showValueInp} className={style['btn']}>Поиск</Button>}
                className={style['searchInput']}
            />
        </div>
    )
}

export default Search