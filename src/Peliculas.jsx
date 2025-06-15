import { useState } from 'react';
import { Card, CardBody, CardTitle, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function TarjetaConModal({ titulo, imagen, resumen }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Card style={{ width: '15rem', margin: '10px' }}>
      <img alt={titulo} src={imagen} />
      <CardBody>
        <CardTitle tag="h5">{titulo}</CardTitle>
        <Button color="primary" onClick={toggle}>
          Ver resumen
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>{titulo}</ModalHeader>
          <ModalBody>{resumen}</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Cerrar</Button>
          </ModalFooter>
        </Modal>
      </CardBody>
    </Card>
  );
}

function Peliculas() {
  return (
    <div className="Peliculas">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
          Actores Famosos
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
        <TarjetaConModal titulo="El Señor de los Anillos: La Comunidad del Anillo" 
         imagen="https://es.web.img3.acsta.net/medias/nmedia/18/89/67/45/20061512.jpg" resumen="Un joven hobbit, Frodo, hereda un anillo con un oscuro poder. 
         Junto a una comunidad de aliados, inicia un viaje para destruirlo en el Monte del 
         Destino antes de que caiga en manos del señor oscuro Sauron." />

        <TarjetaConModal titulo="Titanic" imagen="https://play-lh.googleusercontent.com/560-H8NVZRHk00g3RltRun4IGB-Ndl0I0iKy33D7EQ0cRRwH78-c46s90lZ1ho_F1so" 
         resumen="Una joven aristócrata y un artista sin recursos se enamoran a bordo del lujoso transatlántico
         Titanic. Su historia de amor se ve truncada por el trágico hundimiento del barco en su viaje inaugural." />
        
        <TarjetaConModal titulo="Harry Potter y la Piedra Filosofal" imagen="https://www.bizcochito.es/img/tt0241527-en-pos.webp" 
         resumen="Harry, un niño huérfano, descubre que es un mago y asiste a la escuela Hogwarts. Allí hace amigos, enfrenta 
         peligros y descubre que está destinado a enfrentar al malvado Lord Voldemort." />

        <TarjetaConModal titulo="Matrix" imagen="https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
         resumen="Neo, un hacker, descubre que el mundo en el que vive es una simulación creada por máquinas. 
         Con la ayuda de Morfeo y Trinity, lucha por liberar a la humanidad del control artificial." />

        <TarjetaConModal titulo="Star Wars: Episodio IV" imagen="https://www.planetadelibros.com/usuaris/libros/fotos/257/original/portada_star-wars-una-nueva-esperanza-hc_howard-chaykin_201907111454.jpg"
         resumen="Luke Skywalker se une a una rebelión para enfrentar al malvado Imperio Galáctico. Junto a Han Solo,
         Leia y Obi-Wan Kenobi, busca destruir la estación espacial conocida como la Estrella de la Muerte." />

        <TarjetaConModal titulo="Lilo Y Stitch" imagen="https://m.media-amazon.com/images/M/MV5BOWUyM2Y5YWMtZTUzZC00ODBiLTg1N2QtNGMzOTNkOTVjMDY4XkEyXkFqcGc@._V1_.jpg" 
         resumen="Lilo, una niña hawaiana, adopta lo que parece ser un perro, sin saber que es Stitch, un experimento alienígena. 
         A través del caos, nace una amistad inquebrantable basada en el valor de la familia." />
      </div>
    </div>
  );
}
export default Peliculas;
