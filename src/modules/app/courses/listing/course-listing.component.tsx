import React, { useState, useEffect } from 'react';
import CourseListingProps from "./course-listing.props";
import CardComponent from 'common/components/card/card.component';
import TableComponent from 'common/components/table/table.component';
import courseService from '../service/course.service';
import CourseListingData from '../service/course-listing-data';
import OverlayLoaderComponent from 'common/components/loader/overlay/overlay-loader.component';
import ApiErrorComponent from 'common/components/api-error/api-error.component';
import ButtonComponent from 'common/components/button/button.component';
import CourseAddComponent from '../add/course-add.component';
import ButtonSmallComponent from 'common/components/button/small/button-small.component';
import IconComponent from 'common/components/icon/icon.component';
import { NavLink } from 'react-router-dom';
import coursesRoutesHelperService from '../common/routes/courses-routes-helper.service';

const CourseListingComponent = (props: CourseListingProps) => {
  const [data, setData] = useState<CourseListingData[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isAddNewOpen, setIsAddNewOpen] = useState(false);

  useEffect(() => {
    getListing();
  }, [])

  function getListing() {
    setIsLoading(true)
    courseService.getListing()
    .then(response => {
      setData(response.data);
      setTotalCount(response.totalCount);
    })
    .catch(() => setIsError(true))
    .finally(() => setIsLoading(false))
  }

  const TableHeader = (
    <tr>
      <th scope="col" className="w-20">Course name</th>
      <th scope="col" className="w-50">Course description</th>
      <th scope="col" className="w-15">Update Date</th>
      <th scope="col" className="w-15">Actions</th>
    </tr>
  )

  const TableData = (
    !!data.length && data.map(course => (
      <tr key={course.id}>
        <td>
          {course.name}
        </td>
        <td>
          {course.description}
        </td>
        <td>
          {course.updateDate}
        </td>
        <td>
        <NavLink className="button-small btn-sm" to={coursesRoutesHelperService.getEditCourseRoute(course.id)}>
        <IconComponent name="fa-edit" namespace="fas" size="fa-xs"/>
        </NavLink>


        <ButtonSmallComponent
          onClick={() => {console.log("edit")}}
        >
          <IconComponent name="fa-times" namespace="fas" size="fa-xs"/>
        </ButtonSmallComponent>
        </td>
      </tr>
    ))
  )

  const TableTooltip = (
    <ButtonComponent
    outline={true}
    type="default"
    size="sm"
    onClick={() => setIsAddNewOpen(true)}
    >
      Add new
    </ButtonComponent>
  )

  if(isError) {
    return <ApiErrorComponent />
  }

  return (
    <div className="container mt-5">
      <CardComponent title="Courses listing" tooltip={TableTooltip}>
        {isLoading && <OverlayLoaderComponent hasBackground={true} />}
        <TableComponent 
          header={TableHeader}
          data={TableData}
          totalCount={totalCount}
        />
      </CardComponent>
      <CourseAddComponent
        isOpen={isAddNewOpen}
        onCloseClick={() => setIsAddNewOpen(false)}
        onSuccess={() => {}}
      />
    </div>
  )
}

export default CourseListingComponent;
