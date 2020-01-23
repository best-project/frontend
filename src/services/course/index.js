import handleResponse from '../../common/helpers/handleResponse.js';
import { Methods } from '../http/index.js';

export const courseServiceFactory = httpService => {
    const getCoursesMeta = () =>
        httpService.GET('courses/all/meta').then(handleResponse);
    const getCourseDetails = courseId =>
        httpService.GET(`course/${courseId}`).then(handleResponse);

    const postCourse = data =>
        httpService
            .makeRequestForm(Methods.POST, `course/create`, data)
            .then(handleResponse);

    const addWordToCourse = data => {
        httpService
            .makeRequestForm(Methods.POST, `course/task/add`, data)
            .then(handleResponse);
    };

    const deleteWord = taskId => {
        httpService.DELETE(`course/task/remove/${taskId}`).then(handleResponse);
    };

    return {
        getCoursesMeta,
        getCourseDetails,
        postCourse,
        addWordToCourse,
        deleteWord,
    };
};
