import { ABOUT_TEXT, HERO_CONTENT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 mb-4"> {/* Añadido mb-4 al final */}
      <h2 className="mt-10 mb-5 text-center text-4xl"> {/* Ajustado my-20 a mt-10 mb-5 */}
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex justify-center">
        <div className="w-full lg:w-2/3">
          <div className="flex flex-col items-center text-center">
            <p className="my-2 max-w-xl tracking-tighter">
              {HERO_CONTENT}
            </p>
            <p className="my-2 max-w-xl tracking-tighter">{ABOUT_TEXT}</p>
            <p className="my-2 max-w-xl tracking-tighter">
              Currently, I am looking for opportunities to learn in challenging environments, where I can 'do my bit', improve my technical and social skills, and grow professionally.  
            </p>
          </div>
        </div>
      </div>
    </div>
  );

}
  
  export default About;
