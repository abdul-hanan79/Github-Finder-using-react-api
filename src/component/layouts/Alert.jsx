import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'

function Alert() {

   const { alert } = useContext(AlertContext)
// console.log("msg an",alert.type,alert.msg)
   return alert !== null && (
      <p className="flex items-start mb-4 space-x-2">
         {alert.type === 'error' && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="w-6 h-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

         )}
         <p className="flex-1 text-base font-semibold leading-7 text-white">
            <strong>{alert.msg}</strong>
         </p>
      </p>
   )
}
export default Alert