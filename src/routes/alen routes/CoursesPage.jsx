import React, { useState, useEffect } from 'react'
import AlenSlideOver from '../../alen components/Alen SlideOver'
import CourseCard from '../../alen components/CourseCard'
import DeleteModal from '../../alen components/DeleteModal'
import PrimaryButton from '../../alen components/PrimaryButton'
import AlenFilterlayout from '../../alen layouts/alen_filterlayout'
import AlenStackedlayout from '../../alen layouts/alen_stackedlayout'
import AddCourseForm from '../../forms/AddCourseForm'
import EditCourseForm from '../../forms/EditCourseForm'


export default function CoursesPage() {

    const filters = [
        {
          id: 'level',
          name: 'Level',
          options: [
            { value: 'beginner', label: 'Beginner', checked: false },
            { value: 'intermediate', label: 'Intermediate', checked: false },
            { value: 'expert', label: 'Expert', checked: false },
            { value: 'all levels', label: 'All levels', checked: false },
          ],
        },
        {
          id: 'duration',
          name: 'Duration',
          options: [
            { value: 'short', label: '0-1 hour', checked: false },
            { value: 'medium', label: '1-2 hours', checked: false },
            { value: 'long', label: '2+ hours', checked: false },
          ],
        },
        {
          id: 'subtitles',
          name: 'Subtitles',
          options: [
            { value: 'english', label: 'English', checked: false },
            { value: 'espagnol', label: 'Espanol', checked: false },
            { value: 'francais', label: 'Francais', checked: false },
          ],
        },
      ]

      const [courses,setCourses] = useState([  {
        id: null,
        title: " ",
        description: "",
        tags: "",
        email: "",
        departments: "",
        meta: "",
        imageUrl: ""
      },
    ])

    useEffect(()=>{
        fetch('http://localhost:3000/courses')
          .then(res =>{
            return res.json()
          })
          .then((data)=>{
            setCourses(data);
          })
      },[])

      const title = "My courses"

      const deleteButton = "Delete"

      const addButton = "Add course"

      const [open,setOpen] = useState(false)

      const [openModal,setOpenModal] = useState(false)

      const [openEdit,setOpenEdit] = useState(false)

      const [idForDelete,setIdForDelete] = useState(null);

      const [filterObject,setObjectFilter] = useState([
        {name: "level", options: ["prvi","drugi"]},
        {name: "subtitles", options: ["eng","srb"]}
      ]);

  return (
    <div>
      <DeleteModal idForDelete={idForDelete}  button={<PrimaryButton buttonName={deleteButton}/>} open={openModal} setOpen={setOpenModal}/>
      <AlenSlideOver open={open} setOpen={setOpen} content={<AddCourseForm setOpen={setOpen} />}/>
      <AlenSlideOver open={openEdit} setOpen={setOpenEdit} content={<EditCourseForm setOpen={setOpenEdit} />}/>
      <AlenStackedlayout content={<AlenFilterlayout button={<PrimaryButton buttonName={addButton} setOpen={setOpen}/>} filters={filters} content={<CourseCard setIdForDelete={setIdForDelete}  setOpenModal={setOpenModal} courses={courses} setOpen={setOpenEdit}/>} title={title} setOpen={setOpen}/> }/>
    </div>
  )
}
