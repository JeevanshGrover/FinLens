import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='w-64 hidden sm:flex flex-col justify-between p-6'>
        <div className='flex mt-3'>
          <div>
            logo
          </div>
          <div className='p-4 ml-3'>
            <h2>Company</h2>
            <h3 className='text-sm'>Finance Dashboard</h3>
          </div>
        </div>

        <div>
          Navigation
        </div>

        <div className='flex flex-col p-3 space-y-4'>
            <NavLink to="/">
              Dashboard
            </NavLink>
            <NavLink to="/Transactions">
              Transactions
            </NavLink>
            <NavLink to="/Insights">
              Insights
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar
