import React from 'react'
import * as FaIcon from 'react-icons/fa'

export const SidebarData = [
    {
        title : 'Home',
        path: '/',
        icon: <FaIcon.FaHome/>
    },
    {
        title : 'Team',
        path: '/team',
        icon: <FaIcon.FaUsers/>
    },
    {
        title : 'Task',
        path: '/tasks',
        icon: <FaIcon.FaHome/>
    },
    {
        title : 'Chats',
        path: '/chats',
        icon: <FaIcon.FaRocketchat/>
    },
    {
        title : 'Analztica',
        path: '/analytics',
        icon: <FaIcon.FaRegChartBar/>
    }
]