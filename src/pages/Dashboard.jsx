import React from 'react'

import {AiOutlineClose , AiOutlineCheck,AiOutlineCalendar} from "react-icons/ai"


const Dashboard = () => {
  return (
    <div className='p-10 flex flex-row  w-full  flex-col gap-5'>         
      <h1 className='font-title text-2xl uppercase py-6 pr-8'>Bienvenue au Tableau de bord :</h1>
      <div className="flex flex-row gap-4">
        <div className="card card-side bg-base-100 shadow-xl">
          <img className='w-40 h-40 p-4 mx-auto '
                                src="../public/emp.png"/>
          <div className="card-body">
            <h2 className="card-title font-title">Mohammed Hillal</h2>
            <p className='font-title'>Profession : Directeur du secteur juridique departement informatique , depuit 12/05/2010 .</p>
            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>

            
          </div>
          <div className="card-actions justify-end pt-20 p-6">
              <button className="btn text-white btn-success bg-cyan-700 hover:bg-cyan-900">consulter profile</button>
            </div>
        </div>
      </div>
      <h4 className='font-title text-2xl uppercase py-6 pr-8'>Statistiques:</h4>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-primary text-3xl">
          <AiOutlineCheck />
          </div>
          <div className="stat-title">Demande Accepter</div>
          <div className="stat-value">20</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        
        <div className="stat">
          <div className="stat-figure text-primary text-3xl">
         < AiOutlineClose/>
                    </div>
          <div className="stat-title">Demande refuser</div>
          <div className="stat-value">10</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        
        <div className="stat">
          <div className="stat-figure text-primary text-3xl">
            <AiOutlineCalendar/>
          </div>
          <div className="stat-title">Total Demande</div>
          <div className="stat-value">30</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        
      </div>
    </div>
  )
}
export default Dashboard 