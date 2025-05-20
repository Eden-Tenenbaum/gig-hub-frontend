import { useSearchParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function HeaderSearchbar({ showSearchBar }) {
    const [input, setInput] = useState('')
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    function handleSearch(ev) {
        ev.preventDefault()
    
        if (input) {
          searchParams.set('title', input)
          searchParams.set('subCategory', input)
        } else {
          searchParams.delete('title')
          searchParams.delete('subCategory')
        }
    
        navigate(`/gigs?${searchParams.toString()}`)
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
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>}
            </div>
        )
    }