import filmes from '../Service/DadosApi'


function FilmesPreferidos() {
    return(
        <div>
            {filmes.map(filme => {
                return(
                    <div>
                    <h3>{filme.id}</h3>
                    <h3>{filme.nome}</h3>
                    <h3>{filme.genero}</h3>
                    <img src={filme.capa} alt={filme.nome}/>
                 </div>
                )
                
            })}
            
        </div>
    )
}
export default FilmesPreferidos