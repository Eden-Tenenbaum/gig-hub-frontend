import { useSearchParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { MagnifyingGlassIcon } from '../SvgHub'

export function HeaderSearchbar({ showSearchBar }) {
    const [input, setInput] = useState('')
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    function handleSearch(ev) {
        ev.preventDefault()
    
        if (input) {
          searchParams.set('category', input)
        } else {
          searchParams.delete('category')
        }
    
        navigate(`/gig?${searchParams.toString()}`)
      }

        return (
            <div className='header-search-bar'>
                {showSearchBar &&
                    <form onSubmit={handleSearch}>
                        <input
                            type='text'
                            value={input}
                            placeholder='What service are you looking for today?'
                            onChange={(ev) => setInput(ev.target.value)}
                        />
                        <button type='submit'>
                            <MagnifyingGlassIcon />
                        </button>
                    </form>}
            </div>
        )
    }