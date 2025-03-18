import React from 'react'
import bin from '../../../../assets/images/dashboard/bin-card.png'
import driver from '../../../../assets/images/dashboard/driver-card.png'
import truck from '../../../../assets/images/dashboard/truck-card.png'
import AdminAlerts from './components/AdminAlerts'
import { AdminBinsInfoContent, AdminDriversInfoContent, AdminTrucksInfoContent } from './components/AdminBinsInfoContent'
import AdminInfoCardLayout from './components/AdminInfoCardLayout'
import AdminMap from './components/AdminMap'
import AdminWasteAreaChart from './components/AdminWasteAreaChart'
import AdminWasteDetailTable from './components/AdminWasteDetailTable'
import AdminWasteOverViewChart from './components/AdminWasteOverViewChart'
import AdminWasteView from './components/AdminWasteView'
function AdminDashboard() {
  return (
    <div className="grid  grid-cols-1 xl:grid-cols-8 gap-4">
    <div className="col-span-8 xl:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-2">
      <AdminInfoCardLayout content={<AdminBinsInfoContent />} url={bin} />

      <AdminInfoCardLayout content={<AdminTrucksInfoContent />} url={truck} />

      <AdminInfoCardLayout content={<AdminDriversInfoContent />} url={driver} />
    </div>
    <div className=" col-span-8 xl:col-span-2">
      <AdminWasteOverViewChart />
    </div>
    <div className="rounded-lg col-span-8 xl:col-span-6">
      <AdminMap />
    </div>
    <div className="col-span-8 xl:col-span-2">
      <AdminAlerts />
    </div>
    <div className="col-span-8 xl:col-span-6">
      <AdminWasteAreaChart />
    </div>
    <div className="col-span-8 xl:col-span-2">
      <AdminWasteView />
    </div>
    <div className="col-span-8">
      <AdminWasteDetailTable />
    </div>
  </div>
  )
}

export default AdminDashboard