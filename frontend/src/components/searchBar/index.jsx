import { SearchInput, SearchButton, SearchIcon } from './styles'

export function SearchBar() {
    return (
        <>
            <SearchInput placeholder="Pesquisar" />
            <SearchButton>
                <SearchIcon />
            </SearchButton>
        </>
    )
}
