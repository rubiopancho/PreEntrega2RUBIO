import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getProductos, getProductosPorCategoria } from "../../asyncmock"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();

    useEffect (() => {

        const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

        funcionProductos(idCategoria)
            .then(res => setProductos(res))
            .catch(error => console.error(error))

    }, [idCategoria])


  return (
    <div>
        <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer