import { Input } from '@/components/ui/input'
import React from 'react'

const Search = ({value, handleChangeValue}: {value: string, handleChangeValue: () => void}) => {
    return (
        <div>
            <Input placeholder="Search..." className="w-70" value={value} onChange={handleChangeValue} />

        </div>
    )
}

export default Search
