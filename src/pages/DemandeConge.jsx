import axios from 'axios'
import React, { useState } from 'react'
import {useCookies} from 'react-cookie'
import { toast } from 'react-toastify'

//localhost:4000/conge/add

const Demandeconge = () => {
  const [cookies]=useCookies(["user"])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [debut, setDebut] = useState()

  const [fin, setFin] = useState()
  const [isLoading, setisLoading] = useState(false)
  const [conge, setConge] = useState('maladie')
  //maladie -  annuel - exceptionnel - recompensation
  const onSubmit = async(event) => {
    event.preventDefault()
    if(new Date(debut)-new Date(fin)>0){
      toast.error("Date fin invalide !")
      return
    }
    setisLoading(true)

  //Data to send
    const data={
      remplacant:name,
      mailRemplacant:email,
      date_fin:fin,
      date_debut:debut,
      type:conge,
      username:cookies.user.email
    }


    const url ="http://localhost:8888/demande"
    await axios.post(url,data).then((res)=>{
       toast.success("Opération réussie")
    }).catch((err)=>{
      toast.error("Erreur rencontrée")
    })
    setisLoading(false)
  }

  return (
    <div className='pl-10 py-6  flex  w-full  flex-col gap-4'>
      <form onSubmit={(e)=>onSubmit(e)} className='max-w-[1000px] w-full flex flex-col gap-5'>
        <h1 className='font-title text-2xl uppercase py-6'>Envoyez une demande de congé :</h1>
        <div className='py-2'>

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
        <button type="submit" className={`btn bg-cyan-800 hover:bg-primary btn-wide ${isLoading&&"loading"}`}>Envoyer la demande</button>
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
