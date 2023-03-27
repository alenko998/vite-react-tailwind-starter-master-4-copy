import React, { useEffect, useState } from 'react'
import QuestionTable from '../../alen components/Tables/QuestionTable'
import AlenFilterlayout from '../../alen layouts/alen_filterlayout'
import { useOutletContext } from 'react-router-dom';
import PrimaryButton from '../../alen components/PrimaryButton';
import AlenSlideOver from '../../alen components/Alen SlideOver';
import AddQuestionForm from '../../forms/AddQuestionForm';
import EditQuestionForm from '../../forms/EditQuestionForm';
import AddSlideOver from '../../alen components/Alen SlideOver/addSlideover';

export default function PoolManagement() {
  const [course,setCourse] = useOutletContext();

  


 
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
  ]



  const [open,setOpen] = useState(false);

  const [openEditForm,setOpenEditForm] = useState(false);

  const title = "Pool management"

  const tableTitle = course.title;

  const [questionId,setQuestionId] = useState();

  const [question,setQuestion] = useState({
    questionId: "",
    questionTitle: "",
    lesson:"",
    difficulty: "",
    type: "",
    questionsOptions: []
  })
  
  
  return (
    <div>
        <AlenSlideOver  open={openEditForm} setOpen={setOpenEditForm} content={<EditQuestionForm question={question} setOpen={setOpenEditForm} questions={course.questions}/>}/>
        <AddSlideOver button={<PrimaryButton buttonName={"Single choice question"}/>} secondButton={<PrimaryButton buttonName={"Multi choice question"}/>}  open={open} setOpen={setOpen} content={<AddQuestionForm setOpen={setOpen} questions={course.questions}/>}/>
        <AlenFilterlayout filters={filters} title={title}  content={ course.questions && <QuestionTable setQuestion={setQuestion} questionId={questionId} setQuestionId={setQuestionId} title={tableTitle} questions={course.questions} setOpen={setOpenEditForm} />} button={<PrimaryButton buttonName={"Add question"} setOpen={setOpen}/>}/>
    </div>
  )
}
