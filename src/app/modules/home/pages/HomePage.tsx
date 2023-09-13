
import { NavLink } from "react-router-dom"

import "../../../../assets/css/home.css"
import Logo from "../../../../assets/img/logo.png"
import { TrendingUp } from '../../../../assets/icons/TrendingUp';
import { PlayIcon } from '../../../../assets/icons/PlayIcon';
import { DeezerIcon } from '../../../../assets/icons/DeezerIcon';
import { InstagramIcon } from '../../../../assets/icons/InstagramIcon';
import { TwitterIcon } from '../../../../assets/icons/TwitterIcon';
import { FacebookIcon } from '../../../../assets/icons/FacebookIcon';
import {
  ArrowDownIcon,
  EmailIcon,
  MusicIcon,
  StarIcon,
  FireIcon
} from '../../../../assets/icons';

export const HomePage = () => {
  return (
    <>
      <header>
        <nav className="bg-dark">
          <div className="w-full flex flex-wrap items-center justify-between mx-auto">
            <img src={Logo} className="h-14 mr-3 pl-4" alt="Flowbite Logo" />
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border rounded-lg  lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 bg-dark border-gray-700">
                <li className="lg:px-8 flex items-center">
                  <NavLink to="/" className="block py-2 pl-3 pr-4 text-sm uppercase rounded nav-item lg:bg-transparent lg:p-0">Home</NavLink>
                </li>

                <li className="lg:px-8 flex items-center text-sm">
                  <button data-dropdown-toggle="id-career" className="flex items-center justify-between w-full py-2 pl-3 pr-4 rounded lg:hover:bg-transparent lg:border-0 lg:p-0 lg:w-auto text-white nav-item focus:text-white border-gray-700 hover:bg-gray-700 hover:bg-transparent">
                    CARRERAS
                    <ArrowDownIcon />
                  </button>
                  <div id="id-career" className="z-10 border border-white lg:border-black hidden text-center font-normal divide-y rounded-lg shadow w-56 top-3 bg-dark divide-gray-500">
                    <ul className="py-2 text-sm" aria-labelledby="dropdownLargeButton">
                      <li>
                        <NavLink to="/" className="block px-4 py-2 nav-item font-semibold">ING. SOFTWARE</NavLink>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="lg:px-8 flex items-center text-sm">
                  <button data-dropdown-toggle="id-courses" className="flex items-center justify-between w-full py-2 pl-3 pr-4 rounded lg:hover:bg-transparent lg:border-0 lg:p-0 lg:w-auto text-white nav-item focus:text-white border-gray-700 hover:bg-gray-700 hover:bg-transparent">
                    CURSOS
                    <ArrowDownIcon />
                  </button>
                  <div id="id-courses" className="z-10 border border-white lg:border-black hidden text-center font-normal divide-y rounded-lg shadow w-56 top-3 bg-dark divide-gray-500">
                    <ul className="py-2 text-sm" aria-labelledby="dropdownLargeButton">
                      <li>
                        <NavLink to="/" className="block px-4 py-2 nav-item font-semibold">DESARROLLO DE SOFTWARE</NavLink>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="lg:px-8 flex items-center text-sm">
                  <button data-dropdown-toggle="id-about" className="flex items-center justify-between w-full py-2 pl-3 pr-4 rounded lg:hover:bg-transparent lg:border-0 lg:p-0 lg:w-auto text-white nav-item focus:text-white border-gray-700 hover:bg-gray-700 hover:bg-transparent">
                    NOSOTROS
                    <ArrowDownIcon />
                  </button>
                  <div id="id-about" className="z-10 border border-white lg:border-black hidden text-center font-normal divide-y rounded-lg shadow w-56 top-3 bg-dark divide-gray-500">
                    <ul className="py-2 text-sm" aria-labelledby="dropdownLargeButton">
                      <li>
                        <NavLink to="/" className="block px-4 py-2 nav-item font-semibold">EXPERIENCIA</NavLink>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="lg:px-8 flex items-center text-sm">
                  <NavLink to="/" className="block py-2 pl-3 pr-4 uppercase rounded nav-item lg:bg-transparent lg:p-0">LOGIN</NavLink>
                </li>

                <button className="send-button flex items-center text-white w-32 px-1 gap-2 m-auto">
                  <EmailIcon />
                  <small className="text-left">ENVIA TU CONSULTA</small>
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="header-section h-134">
          <div className="h-134 flex flex-col justify-end px-10 md:px-32 pb-12">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-6">
                <h6 className="text-2xl">Tu futuro, a un click</h6>
                <h4 className="text-5xl">Se profesor de Artes Musicales</h4>
                <h6 className="text-2xl">Inicia en AGOSTO, estudia a distancia o precencial.</h6>
                <div className="py-4"></div>
                <button className="btn-primary rounded-full text-xl py-3 px-7 text-white uppercase font-semibold">!INSCRIBETE AHORA!</button>
              </div>
            </div>
          </div>
        </section>

        <section className="my-32">
          <div className="lg:flex px-10 md:px-32 lg:gap-2">
            <div className="my-4 w-full md:w-80 container-info rounded-3xl text-white p-6">
              <div className="flex justify-center py-2">
                <MusicIcon />
              </div>
              <div>
                <h5 className="text-center text-2xl py-2 font-normal">¿Qué ofrecemos?</h5>
                <p className="text-left py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni non eveniet in, perferendis aspernatur assumenda quisquam fugiat voluptas unde laudantium rerum sint, neque dignissimos nulla labore totam? Vitae, nulla aliquid.</p>
              </div>
              <div className="mt-10 flex justify-end">
                <button className="border border-red-500 rounded-full px-4 py-2 text-sm">+ Más Info</button>
              </div>
            </div>

            <div className="my-4 w-full md:w-80 ml-auto lg:m-auto container-info rounded-3xl text-white p-6">
              <div className="flex justify-center py-2">
                <StarIcon />
              </div>
              <div>
                <h5 className="text-center text-2xl py-2 font-normal">Beneficios</h5>
                <p className="text-left py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni non eveniet in, perferendis aspernatur assumenda quisquam fugiat voluptas unde laudantium rerum sint, neque dignissimos nulla labore totam? Vitae, nulla aliquid.</p>
              </div>
              <div className="mt-10 flex justify-end">
                <button className="border border-red-500 rounded-full px-4 py-2 text-sm">+ Más Info</button>
              </div>
            </div>

            <div className="my-4 w-full md:w-80 container-info rounded-3xl text-white p-6">
              <div>
                <div className="flex justify-center py-2">
                  <FireIcon />
                </div>
                <div>
                  <h5 className="text-center text-2xl py-2 font-normal">Descuentos</h5>
                  <p className="text-left py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni non eveniet in, perferendis aspernatur assumenda quisquam fugiat voluptas unde laudantium rerum sint, neque dignissimos nulla labore totam? Vitae, nulla aliquid.</p>
                </div>
                <div className="mt-10 flex justify-end">
                  <button className="border border-red-500 rounded-full px-4 py-2 text-sm">+ Más Info</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-count">
          <div className="grid grid-cols-12 px-10 md:px-32 py-7">
            <div className="col-span-12 md:col-span-2 mr-auto">
              <TrendingUp />
            </div>
            <div className="col-span-12 md:col-span-3 text-white font-semibold flex flex-col items-center justify-center gap-2 text-2xl text-center py-4">
              <h5 className="font-bold text-3xl">+10.000</h5>
              <h5>ALUMNOS</h5>
            </div>
            <div className="col-span-12 md:col-span-4 md:m-auto text-white font-semibold flex flex-col items-center justify-center gap-2 text-2xl text-center py-4">
              <h5 className="font-bold text-3xl">20</h5>
              <h5>CARRERAS</h5>
            </div>
            <div className="col-span-12 md:col-span-3 md:ml-auto text-white font-semibold flex flex-col items-center justify-center gap-2 text-2xl text-center py-4">
              <h5 className="font-bold text-3xl">+30</h5>
              <h5>AÑOS <br /> FORMANDO MÚSICOS</h5>
            </div>
          </div>
        </section>

        <section className="px-10 md:px-32 my-24">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-16">
              <div>
                <h5 className="text-2xl">Participá de nuestras</h5>
                <h3 className="text-4xl">Charlas Informativas y Eventos Gratuitos</h3>
              </div>
              <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, dolor ducimus! Fuga doloremque repellat, minus quae nostrum harum voluptatem autem aperiam modi esse odit, minima saepe. Molestias facere voluptate possimus. Molestias facere voluptate possimus. Molestias facere voluptate possimus. Molestias facere voluptate possimus. Molestias facere voluptate possimus.</small>
              <button className="container-count rounded-full w-28 px-2 py-1 text-white">
                <small>VER EVENTOS</small>
              </button>
            </div>
            <div className="col-span-12 lg:col-span-7 flex gap-10">
              <div className="w-full md:w-1/2">
                {/* Header */}
                <div className="container-info rounded-t-3xl py-3 px-3">
                  <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center gap-3">
                      <div className="rounded-full bg-black h-8 w-8 text-white p-4">
                        <p style={{ marginTop: '-12px', marginLeft: '-5px' }}>T</p>
                      </div>
                      <h6 className="text-white">Titulo</h6>
                    </div>
                    <div className="rounded-full bg-white h-3 w-3"></div>
                  </div>
                </div>

                {/* Body */}
                <div className="h-64 card-media border border-gray-400">

                </div>

                {/* Footer */}
                <div className="container-info text-gray-300 rounded-b-3xl py-3 px-3">
                  <h6>Titulo</h6>
                  <br />
                  <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur fuga iusto sed maxime in nesciun.</small>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                {/* Header */}
                <div className="container-info rounded-t-3xl py-3 px-3">
                  <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center gap-3">
                      <div className="rounded-full bg-black h-8 w-8 text-white p-4">
                        <p style={{ marginTop: '-12px', marginLeft: '-5px' }}>T</p>
                      </div>
                      <h6 className="text-white">Titulo</h6>
                    </div>
                    <div className="rounded-full bg-white h-3 w-3"></div>
                  </div>
                </div>

                {/* Body */}
                <div className="h-64 card-media border border-gray-400">

                </div>

                {/* Footer */}
                <div className="container-info text-gray-300 rounded-b-3xl py-3 px-3">
                  <h6>Titulo</h6>
                  <br />
                  <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur fuga iusto sed maxime in nesciun.</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-10 md:px-32 my-24"> 
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <h5 className="text-2xl">Conocé más de</h5>
              <h2 className="text-4xl">NUESTRA ESCUELA</h2>

              <div className="w-full mt-12">
                {/* Header */}
                <div className="container-info rounded-t-2xl py-4 px-3">
                  <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center gap-3">
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="h-72 card-media border border-gray-400 flex flex-col justify-center items-center">
                  <PlayIcon />
                </div>

                {/* Footer */}
                <div className="container-info text-gray-300 rounded-b-2xl py-4 px-3">
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-10 md:px-32 my-24">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 text-center">
              <div>
                <h5 className="text-2xl">Explorá y vibrá con</h5>
                <h3 className="text-4xl">Hertz</h3>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 gap-6 py-5">
              <div className="w-full">
                {/* Body */}
                <div className="h-52 card-media rounded-t-3xl flex flex-col justify-center items-center border border-gray-400">
                  <DeezerIcon />
                </div>

                {/* Footer */}
                <div className="container-info text-gray-300 rounded-b-3xl py-3 px-3">
                  <h6>Titulo</h6>
                  <br />
                  <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur fuga.</small>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 gap-6 py-5">
              <div className="w-full">
                {/* Body */}
                <div className="h-52 card-media flex flex-col justify-center items-center rounded-t-3xl border border-gray-400">
                  <PlayIcon />
                </div>

                {/* Footer */}
                <div className="container-info text-gray-300 rounded-b-3xl py-3 px-3">
                  <h6>Titulo</h6>
                  <br />
                  <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur fuga.</small>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 gap-6 py-5">
              <div className="w-full">
                {/* Body */}
                <div className="h-52 card-media rounded-t-3xl border border-gray-400">

                </div>

                {/* Footer */}
                <div className="container-info text-gray-300 rounded-b-3xl py-3 px-3">
                  <h6>Titulo</h6>
                  <br />
                  <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur fuga.</small>
                </div>
              </div>              
            </div>

            <div className="col-span-12 md:col-span-4 gap-6 py-5">
              <div className="w-full">
                {/* Body */}
                <div className="h-52 card-media rounded-t-3xl flex flex-col justify-center items-center border border-gray-400">
                  <DeezerIcon />
                </div>

                {/* Footer */}
                <div className="container-info text-gray-300 rounded-b-3xl py-3 px-3">
                  <h6>Titulo</h6>
                  <br />
                  <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur fuga.</small>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 gap-6 py-5">
              <div className="w-full">
                {/* Body */}
                <div className="h-52 card-media flex flex-col justify-center items-center rounded-t-3xl border border-gray-400">
                  <PlayIcon />
                </div>

                {/* Footer */}
                <div className="container-info text-gray-300 rounded-b-3xl py-3 px-3">
                  <h6>Titulo</h6>
                  <br />
                  <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur fuga.</small>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 gap-6 py-5">
              <div className="w-full">
                {/* Body */}
                <div className="h-52 card-media rounded-t-3xl border border-gray-400">

                </div>

                {/* Footer */}
                <div className="container-info text-gray-300 rounded-b-3xl py-3 px-3">
                  <h6>Titulo</h6>
                  <br />
                  <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur fuga.</small>
                </div>
              </div>              
            </div>

          </div>
        </section>

      </main>

      <footer>
        <div className="footer p-7 grid grid-cols-12 text-white">
          <div className="col-span-12 md:col-span-6">
            <p>Registrate a nuestra newsletter</p>
            <div className="py-1"></div>
            <div className="flex items-center gap-4">
              <input type="text" placeholder="Correo electrónico" className="px-7 py-2 w-80 footer-input rounded" />
              <button className="btn-primary rounded-full text-sm py-2 px-7 text-white uppercase font-semibold">SUSCRIBIRSE</button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 flex ml-auto gap-5 text-left">
            <div className="flex flex-col gap-2">
              <small className="text-gray-300">+54 911 648 803</small>
              <small>CONSERVATORIOHERTZ@GMAIL.COM</small>
              <small>Palermo, CABA</small>
            </div>
            <div className="flex flex-col gap-2">
              <small>TRABAJA CON NOSOTROS</small>
              <small className="text-gray-300"><a href="#">Política de privacidad</a></small>
              <small><a href="#">TÉRMINOS Y CONDICIONES</a></small>
            </div>
          </div>
        </div>
        <div className="bg-dark px-7 py-4 text-white flex justify-between">
          <small>Copyright @ Conservatorio Hertz 2023</small>
          <div className="flex gap-4">
            <span className="cursor-pointer"><InstagramIcon /></span>
            <span className="cursor-pointer"><TwitterIcon /></span>
            <span className="cursor-pointer"><FacebookIcon /></span>
          </div>
        </div>
      </footer>
    </>
  )
}
