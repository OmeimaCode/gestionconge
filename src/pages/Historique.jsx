import React from 'react'
import {BsPerson} from "react-icons/bs"
import {IoMdNotificationsOutline} from "react-icons/io"


 const Historique = () => {
  return (
    <div className='p-10 flex flex-row  w-full  flex-col gap-5'>         
        <h1 className='font-title text-2xl uppercase py-6 pr-8'>Historiques des demandes de congé :</h1>
      
        <div className="flex flex-row gap-4">
            <table className="table w-full">
                <thead>
                <tr>
                    <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                    </th>
                    <th>Remplacant</th>
                    <th>Type Conge</th>
                    <th>Date Debut</th>
                    <th>Date Fin</th>
                    <th>Statut</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle pt-4 pl-2 w-12 h-12">
                            <BsPerson className='text-2xl' />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">United States</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        Conge maladie
                        </td>
                        <td>12/10/2022</td>
                        <td>25/10/2022</td>
                        <th>
                        <span className="badge bg-primary text-white badge-lg">Accepter</span>
                        
                        </th>
                    </tr>
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle pt-4 pl-2 w-12 h-12">
                            <BsPerson className='text-2xl' />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">United States</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        Conge maladie
                        </td>
                        <td>12/10/2022</td>
                        <td>25/10/2022</td>
                        <th>
                        <span className="badge bg-primary text-white badge-lg">Accepter</span>
                        </th>
                    </tr>
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle pt-4 pl-2 w-12 h-12">
                            <BsPerson className='text-2xl' />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">United States</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        Conge maladie
                        </td>
                        <td>12/10/2022</td>
                        <td>25/10/2022</td>
                        <th>
                        <span className="badge badge-error text-white badge-lg">Refuser</span>
                        <a href="#my-modal-2" >
                        <button className="btn btn-circle btn-outline btn-xs">
                        <IoMdNotificationsOutline className='text-2xl' /></button>
                        </a>
                        
                        

                        </th>
                    </tr>
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle pt-4 pl-2 w-12 h-12">
                            <BsPerson className='text-2xl' />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">United States</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        Conge maladie
                        </td>
                        <td>12/10/2022</td>
                        <td>25/10/2022</td>
                        <th>
                        <span className="badge bg-primary text-white badge-lg">Accepter</span>
                        </th>
                    </tr>
                
                
                
                </tbody>
                <tfoot>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </tfoot>
                
            </table>
            
            <div className="modal" id="my-modal-2">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Motif de refus!</h3>
                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                <div className="modal-action">
                <a href="#" className="btn bg-primary">OK</a>
                </div>
            </div>
            </div>
            </div>
        </div>

  )
}
 export default Historique
