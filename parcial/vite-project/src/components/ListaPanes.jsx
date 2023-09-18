import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const ListaPanes = () => {
    const token = localStorage.getItem("token");
    const [data, setData] = useState([]);
  
    const handleListaPanes = async () => {
      await axios
        .get("http://89.116.25.43:3500/api/productos/listar", {
          headers: { Authorization: `bearer ${token}` },
        })
        .then((resp) => {
          console.log(resp);
          setData(resp.data.result);
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status == 400) {
            Swal.fire("Información!", err.response.data.message, "error");
          } else if (err.response.status == 401) {
            Swal.fire("Información!", err.response.data.message, "error");
          } else {
            Swal.fire("Información!", "Ocurrio un error!", "error");
          }
        });
    };
  
    useEffect(() => {
      handleListaPanes();
    }, []);

    return (
        <div className='main-listapan'>
          {data.map((result) => {
            return (
            <div className='fondoCasilla'>
              <div className='casillas'
                key={result._id}
              >
                <div className='imagenes'>
                  <img
                    src={result.imagen}
                    alt={result.descripcion}
                  />
                </div>
                <div className='nombres'>{result.descripcion}</div>
                <div className='precios'>
                  {"$ " + result.valor }
                </div>
              </div>
              </div>
            );
          })}
        </div>
        
    )
}
export default ListaPanes
