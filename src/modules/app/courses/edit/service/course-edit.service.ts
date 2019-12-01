import CourseEditResponse from './course-edit.response';

class CourseEditService {
  getListing(courseId: string): Promise<CourseEditResponse> {
    const response: CourseEditResponse = {
      course: {
        id: "kq8d2GyQZRci0qCzNI4s",
        name: "Owoce i warzywa",
        type: "normal"
      },
      data: [
        {
          id: "kq8fdsfdyQZRci4I4sd",
          word: "apple",
          translate: "jabłko",
          image: "https://s3.party.pl/styl-zycia/trzy-jablka-jedno-przekrojone-379860-MT.jpg"
        },
        {
          id: "kq8fdsfdyQZRciz3234sd",
          word: "aubergine",
          translate: "bakłażan",
          image: "https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_320,h_320/dpr_2/v1499864976/be/4095.jpg"
        },
        {
          id: "kq8fdsfdyQZ34d432sNI4sd",
          word: "banana",
          translate: "banan",
          image: "https://s3.party.pl/styl-zycia/trzy-jablka-jedno-przekrojone-379860-MT.jpg"
        },
        {
          id: "kq8fdsfdy43dai324zNI4sd",
          word: "beans",
          translate: "fasola",
          image: "https://s3.party.pl/styl-zycia/trzy-jablka-jedno-przekrojone-379860-MT.jpg"
        },
        {
          id: "43sfdsfdyQZRc5342izNI4sd",
          word: "beetroot",
          translate: "burak",
          image: "https://s3.party.pl/styl-zycia/trzy-jablka-jedno-przekrojone-379860-MT.jpg"
        },
        {
          id: "kq8fddsfdyQZRc324234izNI4sd",
          word: "blackberry",
          translate: "jeżyna",
          image: "https://s3.party.pl/styl-zycia/trzy-jablka-jedno-przekrojone-379860-MT.jpg"
        },
        {
          id: "kq8ffdxdyQZRci32432zNI4sd",
          word: "broccoli",
          translate: "brokuły",
          image: "https://s3.party.pl/styl-zycia/trzy-jablka-jedno-przekrojone-379860-MT.jpg"
        },
        {
          id: "kq8ffdxdyQZRciz324NI4sd",
          word: "cabbage",
          translate: "kapusta",
          image: "https://s3.party.pl/styl-zycia/trzy-jablka-jedno-przekrojone-379860-MT.jpg"
        },
      ],
      totalCount: 10
    }

    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(response)
      },500)
    })
  }
}

const courseEditService = new CourseEditService();
export default courseEditService;