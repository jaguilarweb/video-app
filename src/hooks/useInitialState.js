import {useState, useEffect} from 'react';

const useInitialState = (API) => {
  //Hook array 2 elementos:
  //1ra Posición: Valor de nuestro estado
  //2da Posición: Funición para actualizar estado
  const [videos, setVideos] = useState({
    'mylist': [],
    'trends': [],
    'originals': []
  });
  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(data => setVideos(data));
  }, []);
  return videos;
};

export default useInitialState;