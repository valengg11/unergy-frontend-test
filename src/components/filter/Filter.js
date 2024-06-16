import "./Filter.scss"

function Filter({handleFilter}) {
    return (
        <div className="filters-container">
            <button onClick={() => handleFilter("todos")}>Todos</button>
            <button onClick={() => handleFilter("financiados")}>Con financiación</button>
            <button onClick={() => handleFilter("noFinanciados")}>Sin financiación</button>
        </div>
    )
}

export default Filter;