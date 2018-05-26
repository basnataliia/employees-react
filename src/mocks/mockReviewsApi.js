const reviews = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    authorId: "cory-house",
    length: "5:08",
    category: "JavaScript"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    authorId: "cory-house",
    length: "3:10",
    category: "Software Practices"
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    authorId: "cory-house",
    length: "2:52",
    category: "Software Architecture"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    authorId: "cory-house",
    length: "2:30",
    category: "Career"
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    authorId: "cory-house",
    length: "5:10",
    category: "HTML5"
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
