import React from 'react'
import PrimaryButton from '../../alen components/PrimaryButton'
import ContentTable from '../../alen components/Tables/ContentTable'
import AlenFilterlayout from '../../alen layouts/alen_filterlayout'
import { useEffect, useParams } from 'react'
import { useOutletContext } from 'react-router-dom'



export default function Content() {

  const [course,setCourse] = useOutletContext();

  useEffect(()=>{
    console.log(course);
  },[])

  const filters = [
    {
      id: 'type',
      name: 'Type of content',
      options: [
        { value: 'quiz', label: 'Quiz', checked: false },
        { value: 'Lesson', label: 'Lesson', checked: false },
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

  const people = [
    { name: 'Lindsay Walton', title: 'lesson', email: '1 hour 54 min'},
    { name: 'Lindsay Walton', title: 'quiz', email: '1 hour 54 min'},
    { name: 'Lindsay Walton', title: 'quiz', email: '1 hour 54 min'},
    { name: 'Lindsay Walton', title: 'lesson', email: '1 hour 54 min'},
    { name: 'Lindsay Walton', title: 'lesson', email: '1 hour 54 min'},
    // More people...
  ]

  const tableTitle = 'Course content'
  const tableSubTitle = 'A list of content of the course'

  const title = "Content management"

  const addQuiz = "Add quiz"

  const addLesson = "Add lesson"
  return (
    <div>
        <AlenFilterlayout filters={filters} title={title} button={<PrimaryButton buttonName={addQuiz} />} secondButton={<PrimaryButton buttonName={addLesson} />} content={<ContentTable people={people} title={tableTitle} subtitle={tableSubTitle}/>}/>
    </div>
  )
}
