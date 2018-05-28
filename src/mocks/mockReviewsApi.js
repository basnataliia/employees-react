const reviews = [
  {
    id: 1,
    reviewerName: "Billy Dow",
    employeeId: "john-smith",
    date: "Jan, 10 2018",
    review: "Morbi dapibus nibh at vehicula porttitor. Etiam sagittis leo a dolor rhoncus, vel elementum sapien iaculis. Morbi eleifend porttitor dui sed pellentesque. Pellentesque vestibulum vel quam at convallis. Curabitur ut varius tellus. Morbi mollis, libero vel condimentum congue, massa sem vestibulum felis, eu bibendum mi ante a felis."
  },
  {
    id: 2,
    reviewerName: "Rosemarie Joisse",
    employeeId: "john-smith",
    date: "Feb, 11 2018",
    review: "Integer nec vestibulum nisi. Ut congue risus erat, at tincidunt augue volutpat porta. Quisque laoreet ut nunc sit amet accumsan. Mauris auctor, sapien nec varius fermentum, risus justo dictum metus, a interdum quam ligula sollicitudin sem."
  },
  {
    id: 3,
    reviewerName: "Patti Tera",
    employeeId: "john-smith",
    date: "May, 11 2018",
    review: "Morbi lobortis ut arcu ut molestie. Cras viverra dolor at odio sollicitudin, quis ultricies eros egestas. Ut ac purus quam. Nulla fringilla leo nec interdum convallis."
  },
  {
    id: 4,
    reviewerName: "Billy Dow",
    employeeId: "scott-allen",
    date: "Jan, 10 2018",
    review: "Ut id massa nisl. Integer tortor odio, laoreet ac facilisis at, egestas eu neque. Quisque congue mi ut arcu faucibus, a ultrices arcu rutrum. Ut venenatis suscipit egestas."
  },
  {
    id: 5,
    reviewerName: "Tillie Zack",
    employeeId: "scott-allen",
    date: "Feb, 15 2018",
    review: "Maecenas faucibus, sem eu eleifend tempus, ipsum augue varius nunc, quis aliquet justo dui tempor mauris. Morbi consequat a lacus laoreet sodales. Vestibulum nec tortor sed ex porttitor luctus."
  }
];

class ReviewsApi {
  static getAllReviews() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], reviews));
      }, 100);
    });
  }
}

export default ReviewsApi;
