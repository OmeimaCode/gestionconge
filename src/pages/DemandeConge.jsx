import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

//localhost:4000/conge/add

const Demandeconge = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [debut, setDebut] = useState()
  const [fin, setFin] = useState()
  const [isLoading, setisLoading] = useState(false)
  //maladie -  annuel - exceptionnel - recompensation
  const onSubmit = async(event) => {
    event.preventDefault()
    if(new Date(debut)-new Date(fin)>0){
      toast.error("Date fin invalide !")
      return
    }
    const data={
      nomRemplacant:name,
      emailRemplacant:email,
      dateFin:fin,
      dateDebut:debut,
      type:conge
    }

    setisLoading(true)


    // const url ="http://localhost:4000/conge/add"
    // await axios.post(url,data)
    // setisLoading(false)


    //For testing uncomment this one
    setTimeout(()=>{
      toast.success('Demande envoyée')
      console.log(data)
      setisLoading(false)
    },3000)

  }
  const [conge, setConge] = useState('maladie')
  return (
    <div className='p-6 flex flex-row justify-center items-center w-full'>
      <form onSubmit={onSubmit} className='max-w-[700px] w-full flex flex-col gap-5'>
        <h1 className='font-title text-2xl uppercase'>Envoyez une demande de congé</h1>
        <div className='py-4'>

        </div>

        <div className='flex flex-row gap-4'>
          <Input value={name} setValue={setName} label={"Nom du remplaçant"} />
          <Input value={email} setValue={setEmail} label={"Email du remplaçant"} type="email" />
        </div>
        <div className='flex flex-row gap-4'>
          <Input value={debut} setValue={setDebut} label={"Date début"} type="date" />
          <Input value={fin} setValue={setFin} label={"Date fin"} type="date" />
        </div>

        <span className='text-lg font-semibold pt-3'>Type de congé</span>

        <div className='flex flex-wrap gap-2 justify-between'>
          <CheckBox option={"maladie"} value={conge} setValue={setConge} label={'Congé maladie'} />
          <CheckBox option={"exceptionnel"} value={conge} setValue={setConge} label={'Congé exceptionnel'} />
          <CheckBox option={"annuel"} value={conge} setValue={setConge} label={'Congé annuel'} />
          <CheckBox option={"recompensation"} value={conge} setValue={setConge} label={'Congé recompensation'} />
        </div>
        <div className='py-3'></div>
        <button type="submit" className={`btn btn-wide ${isLoading&&"loading"}`}>Envoyer la demande</button>
      </form>

    </div>
  )
}

const Input = ({ label, type = "text", value, setValue }) => {
  return <div className="form-control w-full">
    <label className="label">
      <span className="label-text font-bold">{label}</span>

    </label>
    <input required value={value} onChange={(e) => setValue(e.target.value)} type={type} placeholder="Saisir" className="input input-bordered w-full" />

  </div>
}

const CheckBox = ({ label, value, setValue, option }) => {
  return <div className="form-control w-[40%] ">
    <label className="label cursor-pointer justify-start gap-4">
      <input type="checkbox" onChange={() => setValue(option)} checked={option == value} className={`checkbox  ${option == value && "bg-primary"}`} />
      <span className="label-text">{label}</span>

    </label>
  </div>
}
export default Demandeconge
