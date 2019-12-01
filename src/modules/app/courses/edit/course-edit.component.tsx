import React, { useState, useEffect } from 'react';
import CourseEditProps from './course-edit.props';
import CardComponent from 'common/components/card/card.component';
import TableComponent from 'common/components/table/table.component';
import courseEditService from './service/course-edit.service';
import CourseEditQuestionsData from './service/course-edit-questions-data';
import OverlayLoaderComponent from 'common/components/loader/overlay/overlay-loader.component';
import ApiErrorComponent from 'common/components/api-error/api-error.component';
import IconComponent from 'common/components/icon/icon.component';
import ButtonSmallComponent from 'common/components/button/small/button-small.component';
import CourseEditBasicData from './service/course-edit-basic-data';

const CourseEditComponent = (props: CourseEditProps) => {
  const [course, setCourse] = useState<CourseEditBasicData | null>(null);
  const [questionsList, setQuestionsList] = useState<CourseEditQuestionsData[]>([])
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    courseEditService.getListing(props.match.params.courseId)
    .then(response => {
      setCourse(response.course);
      setQuestionsList(response.data);
      setTotalCount(response.totalCount);
    })
    .catch(() => setIsError(true))
    .finally(() => setIsLoading(false))
  }, [])

  const TableHeader = (
    <tr>
      <th scope="col" className="w-40">Word</th>
      <th scope="col" className="w-40">Translation</th>
      <th scope="col" className="w-20">Actions</th>
    </tr>
  )

  const TableData = (
    !!questionsList.length && questionsList.map(question => (
      <tr key={question.id}>
        <td>
          {question.word}
        </td>
        <td>
          {question.translate}
        </td>
        <td>
        <ButtonSmallComponent
          onClick={() => {console.log("edit")}}
        >
          <IconComponent name="fa-edit" namespace="fas" size="fa-xs"/>
        </ButtonSmallComponent>

        <ButtonSmallComponent
          onClick={() => {console.log("edit")}}
        >
          <IconComponent name="fa-times" namespace="fas" size="fa-xs"/>
        </ButtonSmallComponent>
        </td>
      </tr>
    ))
  )

  if(isError) {
    return <ApiErrorComponent />
  }

  return (
    <div className="container">
      <CardComponent title={course ? `Course "${course.name}": Edit` : `Course edit`} className="mt-5">
        {isLoading && <OverlayLoaderComponent hasBackground={true} />}
        <TableComponent 
          header={TableHeader}
          data={TableData}
          totalCount={totalCount}
        />
      </CardComponent>
    </div>

  )
}

export default CourseEditComponent;
