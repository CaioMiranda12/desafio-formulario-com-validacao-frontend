import { useState } from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from "react-toastify";

function App() {
  const [openLinkedin, setOpenLinkedin] = useState(false)
  const [openGithub, setOpenGithub] = useState(false)

  const schema = yup.object({
    name: yup.string().required('O seu nome é obrigatório'),
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    fone: yup.number('O telefone deve ser um número').required('O seu telefone é obrigatório'),
    position: yup.string().required(),
    linkedin: yup.string(),
    github: yup.string()
  }).required()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => {

    const usersList = localStorage.getItem('fusion-cadastro')
    const allUsers = usersList ? JSON.parse(usersList) : []

    const userEmailExists = allUsers.find(item => item.email === data.email)

    if (!userEmailExists) {
      const newUsers = [...allUsers, data]

      localStorage.setItem('fusion-cadastro', JSON.stringify(newUsers))

      toast.success('Usuário cadastrado com sucesso!')

      reset()

    } else {
      toast.error('E-mail já cadastrado, tente novamente!')
    }


  }


  return (
    <>
      <main className='w-full min-h-screen flex justify-center items-center bg-custom-radial py-5'>
        <div className='flex flex-col-reverse sm:grid sm:grid-cols-2 sm:gap-12 sm:w-11/12 lg:w-10/12 p-4 sm:p-8 border border-gray-300'>
          <div>

            <form className='mt-5 flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
              <div className='flex flex-col gap-2'>
                <label className='text-white'>Nome completo</label>
                <input
                  type="text"
                  placeholder="Digite seu nome..."
                  className='bg-transparent placeholder:text-gray-300 text-white border py-1 px-2 border-gray-200'
                  {...register("name")}
                />
                <p className="text-red-500 font-bold">{errors.name?.message}</p>
              </div>

              <div className='flex flex-col gap-2'>
                <label className='text-white'>E-mail</label>
                <input
                  type="email"
                  placeholder="Digite seu e-mail..."

                  className='bg-transparent placeholder:text-gray-300 text-white border py-1 px-2 border-gray-200'
                  {...register("email")}
                />
                <p className="text-red-500 font-bold">{errors.email?.message}</p>
              </div>

              <div className='flex flex-col gap-2'>
                <label className='text-white'>Telefone</label>
                <input
                  type="number"
                  placeholder="Digite seu telefone..."
                  className='bg-transparent placeholder:text-gray-300 text-white border py-1 px-2 border-gray-200'
                  {...register("fone")}
                />
                <p className="text-red-500 font-bold">{errors.fone?.message}</p>
              </div>

              <div className='flex flex-col gap-2'>
                <label className='text-white'>Cargo</label>

                <select
                  className='h-8'
                  {...register("position")}
                >
                  <option value="Frontend">
                    Frontend
                  </option>

                  <option value="Backend">
                    Backend
                  </option>

                  <option value="Full Stack">
                    Full Stack
                  </option>

                  <option value="Desenvolvedor Mobile">
                    Desenvolvedor Mobile
                  </option>

                  <option value="Desenvolvedor de Software">
                    Desenvolvedor de Software
                  </option>

                  <option value="Engenheiro de Software">
                    Engenheiro de Software
                  </option>

                  <option value="Arquiteto de Software">
                    Arquiteto de Software
                  </option>

                  <option value="UI/UX Designer">
                    UI/UX Designer
                  </option>

                  <option value="Analista de Sistemas">
                    Analista de Sistemas
                  </option>

                  <option value="Analista Programador">
                    Analista Programador
                  </option>

                  <option value="DevOps Engineer">
                    DevOps Engineer
                  </option>

                  <option value="Engenheiro de Dados">
                    Engenheiro de Dados
                  </option>

                  <option value="QA Engineer">
                    QA Engineer
                  </option>

                  <option value="Scrum Master">
                    Scrum Master
                  </option>

                  <option value="Product Owner">
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
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Digite a url do linkedin..."
                      className='bg-transparent placeholder:text-gray-300 text-white border py-1 px-2 border-gray-200'
                      {...register("linkedin")}
                    />
                    <p className="text-red-500 font-bold">{errors.linkedin?.message}</p>
                  </div>
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
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Digite a url do github..."
                      className='bg-transparent placeholder:text-gray-300 text-white border py-1 px-2 border-gray-200'
                      {...register("github")}
                    />
                    <p className="text-red-500 font-bold">{errors.github?.message}</p>
                  </div>
                )}
              </div>

              <button
                className="bg-black text-white p-3 font-bold hover:text-black hover:bg-white duration-500 transition-all"
                type="submit"
              >
                Enviar
              </button>

            </form>

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
