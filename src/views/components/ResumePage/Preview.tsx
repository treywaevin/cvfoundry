const Preview = () => {
  return (
    <div className="max-w-4xl p-8 bg-white shadow-lg rounded-lg font-serif">
      {/* Header */}
      <div className="flex justify-center items-center pb-2 mb-2">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 text-center">Jake Doe</h1>
          <p className="text-gray-600 text-sm">(123)-456-789 | jake.doe@email.com | linkedin.com/in/jake | github.com/jake</p>
        </div>
      </div>

      {/* Education */}
      <section className="mb-2 text-sm">
        <h2 className="text-xl text-gray-800 border-b-2 pb-1 mb-1">
          Education
        </h2>
        <div className="flex justify-between mb-2 ml-4">
          <div>
            <h3 className="text-md font-semibold text-gray-700">Southwestern University</h3>
            <p className="text-gray-600 italic">Bachelor of Arts in Computer Science, Minor in Business</p>
          </div>
          <div className="text-right">
            <p className="text-med-lg text-gray-600">Georgetown, TX</p>
            <p className="text-gray-600 italic">May 2021</p>
          </div>
        </div>
        <div className="flex justify-between mb-2 ml-4">
          <div>
            <h3 className="text-md font-bold text-gray-700">Blinn College</h3>
            <p className="text-gray-600 italic">Associate's in Liberal Arts</p>
          </div>
          <div className="text-right">
            <p className="text-med-lg text-gray-600">Bryan, TX</p>
            <p className="text-gray-600 italic">May 2018</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="text-sm">
        <h2 className="text-xl text-gray-800 border-b-2 pb-1 mb-1">
          Experience
        </h2>

        <div className="mb-2 ml-4">
          <div className="flex justify-between">
            <div>
              <p className="text-md font-bold text-gray-700">Undergrad Research Assistant</p>
              <p className="italic text-gray-600 pb-0.5">Texas A&M University</p>
            </div>
            <div className="text-right">
              <p className="text-med-lg text-gray-600">July 2020 - Present</p>
              <p className="italic text-sm text-gray-600">College Station, TX</p>
            </div>
          </div>
          <ul className="list-disc pl-8 text-gray-600">
            <li>Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems</li>
            <li>Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data</li>
            <li>Explored ways to visualize GitHub collaboration in a classroom setting.</li>
          </ul>
        </div>

        <div className="mb-2 ml-4">
          <div className="flex justify-between">
            <div>
              <p className="text-md font-bold text-gray-700">Information Technology Support Specialist</p>
              <p className="italic text-gray-600 pb-0.5">Southwestern University</p>
            </div>
            <div className="text-right">
              <p className="text-med-lg text-gray-600">July 2018 - Present</p>
              <p className="italic text-sm text-gray-600">Georgetown, TX</p>
            </div>
          </div>
          <ul className="list-disc pl-8 text-gray-600">
            <li>Communicate with managers to set up campus computers used on campus</li>
            <li>Assess and troubleshoot computer problems brought by students, faculty and staff</li>
            <li>Maintain upkeep of computers, classroom equipment, and 200 printers across campus</li>
          </ul>
        </div>

        <div className="mb-2 ml-4">
          <div className="flex justify-between">
            <div>
              <p className="text-md font-bold text-gray-700">Artificial Inteligence Research Assistant</p>
              <p className="italic text-gray-600 pb-0.5">Southwestern University</p>
            </div>
            <div className="text-right">
              <p className="text-med-lg text-gray-600">May 2019 - July 2019</p>
              <p className="italic text-sm text-gray-600">Georgetown, TX</p>
            </div>
          </div>
          <ul className="list-disc pl-8 text-gray-600">
            <li>Explored methods to generate video game dungeons based off of The Legend Of Zelda</li>
            <li>Developed a game in Java to test the generated dungeons</li>
            <li>Contributed 50K+ lines of code to an established codebase via Git</li>
            <li>Conducted  a human subject study to determine which video game dungeon generation technique is enjoyable</li>
            <li>Wrote an 8-page paper and gave multiple presentations on-campus</li>
            <li>Presented virtually to the World Conference on Computational Intelligence</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="text-sm">
        <h2 className="text-xl text-gray-800 border-b-2 pb-1 mb-1">
          Projects
        </h2>
        <div className="ml-4 mb-2">
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <p className="text-md font-bold text-gray-700 pb-0.5">Gitlytics</p>
              <p> | </p>
              <p className="italic text-gray-600">Python, Flask, React, PostgreSQL, Docker</p>
            </div>
            <div className="text-right text-med-lg">
              <p className="text-gray-600">June 2020 - Present</p>
            </div>
          </div>
          <ul className="list-disc pl-8 text-gray-600">
            <li>Developed a full-stack web application using with Flask serving a REST API with React as the frontend</li>
            <li>Implemented GitHub OAuth to get data from user’s repositories</li>
            <li>Visualized GitHub data to show collaboration</li>
            <li>Used Celery and Redis for asynchronous tasks</li>
          </ul>
        </div>

        <div className="ml-4 mb-2">
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <p className="text-md font-bold text-gray-700 pb-0.5">Simple Paintball</p>
              <p> | </p>
              <p className="italic text-gray-600">Spigot API, Java, Maven, TravisCI, Git</p>
            </div>
            <div className="text-right text-med-lg">
              <p className="text-gray-600">May 2018 - May 2020</p>
            </div>
          </div>
          <ul className="list-disc pl-8 text-gray-600">
            <li>Developed a Minecraft server plugin to entertain kids during free time for a previous job</li>
            <li>Published plugin to websites gaining 2K+ downloads and an average 4.5/5-star review</li>
            <li>Implemented continuous delivery using TravisCI to build the plugin upon new a release</li>
            <li>Collaborated with Minecraft server administrators to suggest features and get feedback about the plugin</li>
          </ul>
        </div>

        
      </section>

      {/* Skills */}
      <section className="mb-8 text-sm">
        <h2 className="text-xl text-gray-800 border-b-2 pb-1 mb-1">
          Skills
        </h2>
        <div className="ml-4">
          <div className="flex items-center space-x-2">
            <p className="font-bold">Languages: </p>
            <p>Java, Python, C/C++, SQL (Postgres), Javascript, HTML/CSS, R</p>
          </div>
        </div>
        <div className="ml-4">
          <div className="flex items-center space-x-2">
            <p className="font-bold">Frameworks: </p>
            <p>React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI</p>
          </div>
        </div>
        <div className="ml-4">
          <div className="flex items-center space-x-2">
            <p className="font-bold">Developer Tools: </p>
            <p>Git, Docker, TravisCI, Google Cloud Platform, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse</p>
          </div>
        </div>
        <div className="ml-4">
          <div className="flex items-center space-x-2">
            <p className="font-bold">Libraries </p>
            <p>pandas, NumPy, Matplotlib</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Preview;
