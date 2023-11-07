import Image from "next/image";
import Link from "next/link";

export default function HelpPage() {
  return (
    <div className="container my-5">
      <Link href="/" className="btn btn-primary mb-3">
        <b>‹</b> Inicio
      </Link>
      <h2>Instrucciones:</h2>
      <div className="row g-2">
        <div className="col-3">
          <div className="card h-100">
            <Image
              src="/select.svg"
              className="card-img-top mt-5"
              width={190}
              height={140}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">1. Selecciona tu oficina.</h5>
              <p className="card-text">
                Dirígete al menú principal y elige tu oficina entre las opciones
                disponibles de la compañía. Este será el punto de partida para
                comenzar la dinámica.
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card h-100">
            <Image
              src="/spin.svg"
              className="card-img-top mt-5"
              width={190}
              height={140}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">2. Gira la ruleta.</h5>
              <p className="card-text">
                En la pantalla, encontrarás una ruleta de colores y una lista de
                nombres de personas. Gira la ruleta para determinar quién será
                el mimo. A partir de este momento, solo la persona seleccionada
                por la ruleta debe colocarse frente al ordenador.
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card h-100">
            <Image
              src="/alone.svg"
              className="card-img-top mt-5"
              width={190}
              height={140}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">3. Obtén un rol.</h5>
              <p className="card-text">
                La persona seleccionada deberá activar otra ruleta haciendo clic
                en el botón <b>Seleccionar</b>. A partir de ese momento, el
                participante tendrá 5 minutos para describir lo que se le ha
                asignado en la lista.
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card h-100">
            <Image
              src="/spectators.svg"
              className="card-img-top mt-5"
              width={190}
              height={140}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">4. Adivina el rol.</h5>
              <p className="card-text">
                Los demás compañeros tendrán que adivinar lo que su compañero
                está tratando de comunicar antes de que se agote el tiempo. El
                participante seleccionado no puede hablar ni hacer ningún ruido.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="mt-5">Reglas:</h2>
      <div className="row g-2">
        <div className="col-3">
          <div className="alert h-100 alert-danger" role="alert">
            <h5 className="alert-heading">Silencio!.</h5>
            <p>
              El participante designado como mimo debe mantener un completo
              silencio, evitando cualquier tipo de ruido, ya sea hablar, cantar
              o tararear. Además, está prohibido realizar gestos con palabras.
            </p>
          </div>
        </div>
        <div className="col-3">
          <div className="alert h-100 alert-danger" role="alert">
            <h5 className="alert-heading">Ver y no tocar!.</h5>
            <p>
              Las personas que están adivinando no pueden tocar al mimo ni
              acercarse al contador en la pantalla. Mantén una distancia
              adecuada y evita cualquier intento de mirar la pantalla del
              ordenador con el contador.
            </p>
          </div>
        </div>
        <div className="col-3">
          <div className="alert h-100 alert-warning" role="alert">
            <h5 className="alert-heading">Orden en la sala!.</h5>
            <p>
              Es importante mantener el orden y el respeto en la sala. Las
              personas que están adivinando no deben elevar la voz,
              independientemente de lo tentador que pueda ser. Recordemos que
              estamos en un entorno corporativo y no debemos causar
              incomodidades a los demás empleados.
            </p>
          </div>
        </div>
        <div className="col-3">
          <div className="alert h-100 alert-warning" role="alert">
            <h5 className="alert-heading">Entre mas grandes mas duro caen!</h5>
            <p>
              Los directivos tienen el doble de probabilidades de ser
              seleccionados como mimo en comparación con los demás
              participantes, debido a su posición en la empresa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
