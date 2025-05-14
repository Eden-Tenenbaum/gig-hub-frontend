export function HeaderSearchbar({ showSearchBar }) {
    return (
        <div className='header-search-bar'>
            {showSearchBar &&
                <>
                    <input
                        type='text'
                        placeholder='What service are you looking for today?'
                    />
                    <button>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </>}
        </div>
    )
}