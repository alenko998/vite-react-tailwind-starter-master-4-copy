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

  // const [filteredCourses, setFilteredCourses] = useState(courses);

  // const [filter, setFilter] = useState({
  //  beginner: false,
  //  intermediate: false,
  //  expert: false,
  //  english: false,
  //  espanol: false,
  //  francais: false,
  // },
  // );

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

  const [filteredData, setFilteredData] = useState([]);
  const [filterTerms, setFilterTerms] = useState([]);
  const [nizJezika,setNizJezika] = useState(["english"]);

  useEffect(() => {
    fetch('http://localhost:3001/courses')
      .then(res => {
        return res.json()
      })
      .then((data) => {
        setCourses(data);
        setFilteredData(data);
      })
  }, []);

  useEffect(() => {
    // filter the data based on the filter terms
    let filtered = courses;
    for (let term in nizJezika) {
      filtered = filtered.filter((item) =>
        item.subtitles.toLowerCase().includes(term.toLowerCase())
      );
    }
    setFilteredData(filtered);
  }, [courses, filterTerms]);

  console.log(filteredData);

  const [filterCourse, setFilterCourse] = useState([]);

  const [subtitleArray,setSubtitleArray] = useState([]);

  const [levelArray,setLevelArray] = useState([]);

  const [filterOptions, setFilterOptions] = useState([
    {
      id: "subtitles",
      array: []
    },
    {
      id: "level",
      array: []
    },
  ])



  

  

  useEffect(()=>{
 
    let finalData = [];
    if(nizJezika.length == 0 && levelArray.length==0){
      setFilterCourse(courses)
    } else{
      if(nizJezika.length > 0){
        let newData = courses.filter(course => nizJezika.includes(course.subtitles))
        finalData = finalData.concat(newData);
     
      }
      if(levelArray.length > 0){
        let newData = courses.filter(course => levelArray.includes(course.courseLevel))
        finalData = finalData.concat(newData);
        
      }

      setFilterCourse(finalData);
      
    }
    
  }, [courses,nizJezika])

  // useEffect(() =>{
  //   //ovo prati sve filtrirane iteme
  //   let finalData = [];
  //   //inicijalna vrednost filtriranih kurseva iliti svi kursevi
  //   setFilteredCourses(courses)
  //   //ifovi koji ti primene filtere
  //   if(filter.beginner === true){
  //     let newData = courses.filter(item => item.duration === 'beginner');
  //     finalData = finalData.concat(newData);
  //     setFilteredCourses(finalData);
  //   }
  //   if(filter.intermediate === true){
  //     let newData = courses.filter(item => item.duration === 'intermediate');
  //     finalData = finalData.concat(newData);
  //     setFilteredCourses(finalData);
  //   }
  //   if(filter.expert === true){
  //     let newData = courses.filter(item => item.duration === 'expert');
  //     finalData = finalData.concat(newData);
  //     setFilteredCourses(finalData);
  //   }
  //   if(filter.english === true){
  //     let newData = courses.filter(item => item.subtitles === 'english');
  //     finalData = finalData.concat(newData);
  //     setFilteredCourses(finalData);
  //   }
  //   if(filter.espanol === true){
  //     let newData = courses.filter(item => item.subtitles === 'espanol');
  //     finalData = finalData.concat(newData);
  //     setFilteredCourses(finalData);
  //   }
  //   if(filter.francais === true){
  //     let newData = courses.filter(item => item.subtitles === 'francais');
  //     finalData = finalData.concat(newData);
  //     setFilteredCourses(finalData);
  //   }
  // },[filter, courses])


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
        content={<AlenFilterlayout filterOptions={filterOptions} setFilterOptions={setFilterOptions}  button={<PrimaryButton buttonName={addButton} setOpen={setOpen}/>} filters={filters} content={<CourseCard setIdForDelete={setIdForDelete} setCourse={setCourse} setOpenModal={setOpenModal} courses={courses} setOpen={setOpenEdit}/>} title={title} setOpen={setOpen}/>}/>
    </div>
  )
}
