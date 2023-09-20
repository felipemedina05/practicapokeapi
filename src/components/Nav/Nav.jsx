import "./Nav.css";

function Nav({ fnSubmit, fnClick, dataOptions }) {
  return (
    <nav>
      <form onSubmit={fnSubmit}>
        <label htmlFor="name">
          Busca tu pokemon:
        </label>
        <input type="text" />
        <button type="submit">Buscar</button>
      </form>
            <div>
        <div id="equipo">
          <h2>tu equipo</h2>
          <button onClick={fnClick} value="articuno">
            1
          </button>
        
          <button onClick={fnClick} value="charmander">
            2
          </button>
          <button onClick={fnClick} value="gengar">
            3
          </button>
       
          <button onClick={fnClick} value="arcanine">
          4 
          </button>
          <button onClick={fnClick} value="pikachu">
            5
          </button>
        </div>
        
      </div>
    </nav>
  );
}

export default Nav;
