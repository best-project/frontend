export const courseServiceFactory = httpService => {
    const getCoursesMeta = () => httpService.GET('courses/meta').then(res => res.json());

    return {
        getCoursesMeta,
    };
};
