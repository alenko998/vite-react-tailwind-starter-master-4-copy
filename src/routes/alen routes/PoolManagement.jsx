import React from 'react'
import AlenFilterlayout from '../../alen layouts/alen_filterlayout'

export default function PoolManagement() {

  const filters = [
    {
      id: 'level',
      name: 'Dificulty of questions',
      options: [
        { value: 'easy', label: 'Easy', checked: false },
        { value: 'medium', label: 'Medium', checked: false },
        { value: 'hard', label: 'Hard', checked: false },
      ],
    },
    {
      id: 'lesson',
      name: 'Lesson',
      options: [
        { value: 'short', label: 'name of some lesson', checked: false },
        { value: 'medium', label: 'name of some lesson', checked: false },
        { value: 'long', label: 'name of some lesson', checked: false },
      ],
    },
  ]

  const title = "Pool management"
  return (
    <div>
        <AlenFilterlayout filters={filters} title={title}/>
    </div>
  )
}
