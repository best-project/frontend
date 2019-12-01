import CourseListingData from './course-listing-data';

type CourseListingResponse = {
  data: CourseListingData[];
  totalCount: number
};

export default CourseListingResponse;