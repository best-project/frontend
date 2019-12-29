import handleResponse from '../../common/helpers/handleResponse.js';

export const courseServiceFactory = httpService => {
    const getCoursesMeta = () => httpService.GET('courses/meta').then(handleResponse);
    const getCourseDetails = courseId => httpService.GET(`course/${courseId}`).then(handleResponse);

    return {
        getCoursesMeta,
        getCourseDetails,
    };
};
