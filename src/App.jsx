import { useState } from "react";

function App() {
  const [openLinkedin, setOpenLinkedin] = useState(false)
  const [openGithub, setOpenGithub] = useState(false)

  return (
    <>
      <main className='w-full min-h-screen flex justify-center items-center bg-custom-radial py-5'>
        <div className='flex flex-col-reverse sm:grid sm:grid-cols-2 sm:gap-12 sm:w-11/12 lg:w-10/12 p-4 sm:p-8 border border-gray-300'>
          <div>

            <div className='mt-5 flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label className='text-white'>Nome completo</label>
                <input
                  type="text"
                  placeholder="Digite seu nome..."
                  className='bg-transparent placeholder:text-gray-300 text-white border py-1 px-2 border-gray-200'
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label className='text-white'>E-mail</label>
                <input
                  type="email"
                  placeholder="Digite seu e-mail..."
                  className='bg-transparent placeholder:text-gray-300 text-white border py-1 px-2 border-gray-200'
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label className='text-white'>Telefone</label>
                <input
                  type="text"
                  placeholder="Digite seu telefone..."
                  className='bg-transparent placeholder:text-gray-300 text-white border py-1 px-2 border-gray-200'
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label className='text-white'>Cargo</label>

                <select className='h-8'>
                  <option value="#">
                    Frontend
                  </option>

                  <option value="#">
                    Backend
                  </option>

                  <option value="#">
                    Full Stack
                  </option>

                  <option value="#">
                    Desenvolvedor Mobile
                  </option>

                  <option value="#">
                    Desenvolvedor de Software
                  </option>

                  <option value="#">
                    Engenheiro de Software
                  </option>

                  <option value="#">
                    Arquiteto de Software
                  </option>

                  <option value="#">
                    UI/UX Designer
                  </option>

                  <option value="#">
                    Analista de Sistemas
                  </option>

                  <option value="#">
                    Analista Programador
                  </option>

                  <option value="#">
                    DevOps Engineer
                  </option>

                  <option value="#">
                    Engenheiro de Dados
                  </option>

                  <option value="#">
                    QA Engineer
                  </option>

                  <option value="#">
                    Scrum Master
                  </option>

                  <option value="#">
                    Product Owner
                  </option>
                </select>
              </div>

              <div className='flex flex-col gap-2'>
                <div className="flex items-center gap-3">
                  <label className='text-white'>Linkedin</label>
                  <input
                    type="checkbox"
                    checked={openLinkedin}
                    onChange={(e) => setOpenLinkedin(e.target.checked)}
                    className="w-4 h-4"
                  />
                </div>

                {openLinkedin && (
                  <input
                    type="text"
                    placeholder="Digite a url do linkedin..."
                    className='bg-transparent placeholder:text-gray-300 text-white border py-1 px-2 border-gray-200'
                  />
                )}
              </div>

              <div className='flex flex-col gap-2'>
                <div className="flex items-center gap-3">
                  <label className='text-white'>GitHub</label>
                  <input
                    type="checkbox"
                    checked={openGithub}
                    onChange={(e) => setOpenGithub(e.target.checked)}
                    className="w-4 h-4"
                  />
                </div>

                {openGithub && (
                  <input
                    type="text"
                    placeholder="Digite a url do github..."
                    className='bg-transparent placeholder:text-gray-300 text-white border py-1 px-2 border-gray-200'
                  />
                )}
              </div>

              <button className="bg-black text-white p-3 font-bold hover:text-black hover:bg-white duration-500 transition-all">Enviar</button>

            </div>

          </div>

          <div className='bg-[url(./assets/HeroImg.svg)] bg-cover h-96 w-full rounded-xl relative bg-opacity-50 px-2 sm:h-full'>
            <div className='flex flex-col justify-center items-center h-full w-10/12'>
              <h1 className='text-white text-3xl font-bold uppercase'>Fusion Cadastro</h1>
              <p className='text-gray-200'>Seja bem vindo! Faça seu cadastro agora</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App
