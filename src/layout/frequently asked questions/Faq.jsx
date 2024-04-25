import "../../shared/text.css";
import Questions from "./Questions";
const Faq = () => {
  return (
    <div className=" max-w-screen-xl mx-auto space-y-5">
      <h1 className=" uppercase font-bold text-5xl text">faq</h1>
      <Questions
        question={"Can education flashcards be used for all age groups?"}
        answer={
          "Yes, education flashcards can be adapted for use by individuals of all age groups. The content and format of the flashcards can be tailored to suit the cognitive abilities and learning styles of different age groups. For younger learners, flashcards may include colorful images and simple vocabulary, while for older learners, they may contain more complex information or concepts."
        }
      />
      <Questions
        question={"How do education flashcards work?"}
        answer={
          "Education flashcards work by utilizing the principles of active recall and spaced repetition. When studying with flashcards, learners repeatedly review information and test their memory by recalling the corresponding facts or concepts. This process strengthens neural pathways associated with the learned material, leading to improved retention and recall over time. Additionally, spaced repetition techniques involve spacing out study sessions over intervals, optimizing long-term memory retention."
        }
      />
      <Questions
        question={"Can education flashcards be used for test preparation?"}
        answer={
          "Yes, education flashcards are an effective tool for test preparation. By condensing key information onto flashcards, learners can review and reinforce essential concepts efficiently. Flashcards facilitate active engagement with the material, allowing learners to quiz themselves and identify areas that require further review. Additionally, the portable nature of flashcards enables studying anytime and anywhere, making them particularly useful for last-minute review sessions before exams."
        }
      />
    </div>
  );
};

export default Faq;
