export const Navbar = () => {
    let nombre = "feli";
    const sumar =() => {
        console.log(2 + 2);
    };

    return(
    <>
        <div>
            <h2>EFEDEPE.PG</h2>
            <h2>{nombre}</h2>
            <li>stickers</li>
            <li>vinilos</li>
            <li>materas</li>
            <button onClick={sumar}>sumar</button>
        </div>
    </>
    )
} 