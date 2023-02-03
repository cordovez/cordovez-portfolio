export default function About({ darkMode }) {
  return (
    <div className={darkMode ? "dark " : ""}>
      <hr />
      <div className="h-full">
        <div className="py-20 px-12 dark:bg-slate-900  sm:px-24n pt-10">
          <h1 className="dark:text-gray-100 font-montserrat font-extrabold text-4xl mb-4 ">
            Juan Carlos Cordovez-Mantilla
          </h1>
          <div className="text-white flex flex-col gap-8">
            <p>
              For most of my career I have worked in visually creative fields. I
              have been a graphic designer, a photographer, a writer, an
              interior designer, and a visual merchandiser. In 2021 I chose to
              limit my creativity to one hemisphere of the brain and decided to
              scratch an itch, I started to study coding.
            </p>
            <p>
              So far I have delved into Python and JavaScript, the former
              because I am interested in studying data and the latter because it
              helps me to create web apps. If you are interested in finding out
              more about me professionally or personally, please use the email
              button on the top of the page to contact me.
            </p>
            <p>
              This site will be revised often as I progress to explore my
              creativity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
