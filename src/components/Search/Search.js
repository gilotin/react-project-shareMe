import './Search.module.css'

export function Search(){
    return(
        <form onsubmit="event.preventDefault();" role="search">
        <label for="search">Search for stuff</label>
        <input id="search" type="search" placeholder="Search..." autofocus required />
        <button type="submit">Go</button>    
      </form>
    );
}