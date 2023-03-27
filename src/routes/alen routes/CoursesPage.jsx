import React, {useState, useEffect} from 'react'
import AlenSlideOver from '../../alen components/Alen SlideOver'
import CourseCard from '../../alen components/CourseCard'
import DeleteModal from '../../alen components/DeleteModal'
import PrimaryButton from '../../alen components/PrimaryButton'
import AlenFilterlayout from '../../alen layouts/alen_filterlayout'
import AlenStackedlayout from '../../alen layouts/alen_stackedlayout'
import AddCourseForm from '../../forms/AddCourseForm'
import EditCourseForm from '../../forms/EditCourseForm'


export default function CoursesPage() {

  const [courses, setCourses] = useState([{
    id: null,
    title: " ",
    description: "",
    tags: [],
    courseLevel: "",
    departments: "",
    subtitles: "",
    imageUrl: ""
  },
  ]);



  const filters = [
    {
      id: 'level',
      name: 'Level',
      options: [
        {value: 'beginner', label: 'Beginner', checked: false},
        {value: 'intermediate', label: 'Intermediate', checked: false},
        {value: 'expert', label: 'Expert', checked: false},
      ],
    },
    {
      id: 'subtitles',
      name: 'Subtitles',
      options: [
        {value: 'english', label: 'English', checked: false},
        {value: 'espanol', label: 'Espanol', checked: false},
        {value: 'francais', label: 'Francais', checked: false},
      ],
    },
  ]


  useEffect(() => {
    fetch('http://localhost:3001/courses')
      .then(res => {
        return res.json()
      })
      .then((data) => {
        setCourses(data);
      })
  }, []);




  const title = "My courses"

  const deleteButton = "Delete"

  const addButton = "Add course"

  const [open, setOpen] = useState(false)

  const [openModal, setOpenModal] = useState(false)

  const [openEdit, setOpenEdit] = useState(false)

  const [idForDelete, setIdForDelete] = useState(null);



  const [course,setCourse] = useState({
    id: null,
    title: "",
    description: "",
    departments: "",
    courseLevel: "",
    subtitles: "",
    imageUrl: ""
  }) 
  


  return (
    <div>
      <DeleteModal idForDelete={idForDelete} button={<PrimaryButton buttonName={deleteButton}/>} open={openModal}
                   setOpen={setOpenModal}/>
      <AlenSlideOver open={open} setOpen={setOpen} content={<AddCourseForm setOpen={setOpen}/>}/>
      <AlenSlideOver open={openEdit} setOpen={setOpenEdit} content={<EditCourseForm setOpen={setOpenEdit} idForDelete={idForDelete} setIdForDelete={setIdForDelete} course={course} setCourse={setCourse}/>}/>
      <AlenStackedlayout
        content={<AlenFilterlayout  button={<PrimaryButton buttonName={addButton} setOpen={setOpen}/>} filters={filters} content={<CourseCard setIdForDelete={setIdForDelete} setCourse={setCourse} setOpenModal={setOpenModal} courses={courses} setOpen={setOpenEdit}/>} title={title} setOpen={setOpen}/>}/>
    </div>
  )
}
