import React from 'react'
import { Circle, Clock, TrendingUp, Zap } from 'lucide-react'

const StatisticsCard = ({ tasks, stats }) => {
    //STATISTIC CARD (RIGHT SIDE)
    const StatCard = ({title, value, icon}) => (
        <div className=" p-2 sm:p-3 rounded-xl bg-white shadow-sm border border-blue-100 hover:shadow-md transition-all
        duration-300 hover:border-blue-100 group">
            <div className=" flex items-center gap-2">
                <div className=" p-1.5 rounded-lg bg-gradient-to-br from-sky-300/10 to-blue-800/10 group-hover:from-sky-300/20
                group-hover:to-blue-800/20">
                    {icon}
                </div>
                <div className=" min-w-0">
                    <p className=" text-lg sm:text-xl font-bold bg-gradient-to-r from-sky-300 to-blue-800
                    bg-clip-text text-transparent">
                        {value}
                    </p>
                    <p className=" text-xs text-gray-500 font-medium">{title}</p>
                </div>
            </div>
        </div>
    )

    return (
        <div className="xl:col-span-1 space-y-4 sm:space-y-6">
            {/* Statistics Card */}
            <div className=" bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-blue-100">
                <h3 className=" text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800
                flex items-center gap-2">
                    <TrendingUp className=" w-4 h-4 sm:w-5 sm:h-5 text-blue-500"/>
                    Task Statistics
                </h3>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <StatCard title='Total Tasks' value={stats.totalCount} icon={ <Circle className='w-3.5
                    h-3.5 sm:w-4 sm:h-4 text-blue-500'/>}/>
                    <StatCard title='Completed' value={stats.completedTasks} icon={ <Circle className='w-3.5
                    h-3.5 sm:w-4 sm:h-4 text-green-500'/>}/>
                    <StatCard title='Pending' value={stats.pendingCount} icon={ <Circle className='w-3.5
                    h-3.5 sm:w-4 sm:h-4 text-blue-500'/>}/>
                    <StatCard title='Completion Rate' value={`${stats.completionPercentage} %`} icon={ <Zap className='w-3.5
                    h-3.5 sm:w-4 sm:h-4 text-blue-500'/>}/>
                </div>

                <hr className=" my-3 sm:my-4 border-blue-200"/>

                <div className=" space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between text-gray-700">
                        <span className=" text-xs sm:text-sm font-medium flex items-center gap-1.5">
                            <Circle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-500 fill-blue-500 "/>
                            Task Progress
                        </span>
                        <span className=" text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 sm:px-2
                        rounded-full">
                            {stats.completedTasks}/ {stats.totalCount}
                        </span>
                    </div>

                    <div className=" relative pt-1">
                        <div className=" flex gap-1.5 items-center">
                            <div className=" flex-1 h-2 sm:h-3 bg-blue-100 rounded-full
                            overflow-hidden">
                                <div className=" h-full bg-gradient-to-r from-sky-300 via-blue-500 to-blue-800
                                transition-all duration-500"
                                    style={{width: `${stats.completionPercentage}%`}}/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activity Card */}
            <div className=" bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-blue-100">
                <h3 className=" text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800 flex
                items-center gap-2">
                    <Clock className=" w-4 h-4 sm:w-5 sm:h-5 text-blue-500"/>
                    Recent Activity
                </h3>

                <div className=" space-y-2 sm:space-y-3">
                    {tasks.slice(0,3).map((task) => (
                        <div key={task._id || task.id} className=" flex items-center
                        justify-between p-2 sm:p-3 hover:bg-blue-50/50 rounded-lg
                        transition-colors duratiom-200 border border-transparent hover:border-blue-100">
                            <div className=" flex-1 min-w-0">
                                <p className=" text-sm font-medium text-gray-700 break-words whitespace-normal">
                                    {task.title}
                                </p>
                                <p className=" text-xs text-gray-500 mt-0.5">
                                    {task.createdAt ? new Date(task.createdAt).toLocaleDateString()
                                        : "No date"}
                                </p>
                            </div>

                            <span className={`px-2 py-1 text-xs rounded-full shrink-0 ml-2
                            ${task.completed ? 'bg-green-100 text-green-700'
                                    : 'bg-blue-100 text-blue-700'}`}>
                                {task.completed ? "Done" : "Pending"}
                            </span>
                        </div>
                    ))}

                    {tasks.length === 0 && (
                        <div className=" text-center py-4 sm:py-6 px-2">
                            <div className=" w-12 h-12 sm:w-16 sm:h-16 mx-auto sm:mb-4 rounded-full
                            bg-blue-100 flex items-center justify-center">
                                <Clock className=" w-6 h-6 sm:w-8 sm:h-8 text-blue-500"/>
                            </div>

                            <p className=" text-sm text-gray-500">
                                No Recent Activity
                            </p>
                            <p className=" text-xs text-gray-400 mt-1">
                                Tasks will appear here
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default StatisticsCard 