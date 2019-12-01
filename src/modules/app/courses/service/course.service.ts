import CourseListingResponse from "./course-listing.response";

class CourseService {
  getListing(): Promise<CourseListingResponse> {
    const exampleListing: CourseListingResponse = {
      data: [
        {
          id: "kq8d2GyQZRci0qCzNI4s",
          name: "Owoce i warzywa",
          description: "W tym kursie nauczysz się nazw owoców i warzyw.",
          updateDate: "2012-12-31",
        },
        {
          id: "TmiZYk3sDmzBV56MwQQO",
          name: "Kultura",
          description: "Słowo kultura ma wiele znaczeń. Interpretuje się ją w różny sposób przez przedstawicieli wielu dziedzin. Kulturę można określić jako ogół wytworów ludzi, zarówno fizycznych, materialnych, jak i duchowych, symbolicznych.",
          updateDate: "2012-12-31",
        },
        {
          id: "cDV6KacZOz4DeMQ8sn0j",
          name: "Example Puzzle",
          description: "W tym kursie nauczysz się nazw owoców i warzyw.",
          updateDate: "2012-12-31",
        }
      ],
      totalCount: 3
    };

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(exampleListing);
      }, 500);
    });
  }
}

const courseService = new CourseService();
export default courseService;
