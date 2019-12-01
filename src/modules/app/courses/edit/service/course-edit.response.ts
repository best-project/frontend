import CourseEditQuestionsData from "./course-edit-questions-data";
import CourseEditBasicData from './course-edit-basic-data';

type CourseEditResponse = {
  course: CourseEditBasicData;
  data: CourseEditQuestionsData[];
  totalCount: number;
};

export default CourseEditResponse;
