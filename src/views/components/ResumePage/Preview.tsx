const Preview = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center border-b-2 pb-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Jake Doe</h1>
          <p className="text-lg text-gray-600">Full Stack Developer</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600">jake.doe@email.com</p>
          <p className="text-gray-600">San Francisco, CA</p>
          <p className="text-gray-600">(555) 555-5555</p>
        </div>
      </div>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 border-b-2 pb-2 mb-4">
          Education
        </h2>
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-700">University of California, Santa Cruz</h3>
            <p className="text-gray-600">B.S. in Computer Science</p>
          </div>
          <p className="text-gray-600">Graduated: June 2024</p>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 border-b-2 pb-2 mb-4">
          Experience
        </h2>
        <div className="mb-6">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-700">Rhombus - Full Stack Developer</h3>
              <p className="text-gray-600">Sacramento, CA</p>
            </div>
            <p className="text-gray-600">July 2023 - Present</p>
          </div>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Developed and maintained full stack applications using React and Node.js.</li>
            <li>Integrated REST APIs and optimized database queries using SQL.</li>
            <li>Collaborated with product teams to implement scalable features.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 border-b-2 pb-2 mb-4">
          Projects
        </h2>
        <div className="mb-6">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-700">WhatsMyImage</h3>
              <p className="text-gray-600">React, Flask, PyTorch</p>
            </div>
            <p className="text-gray-600">January 2024</p>
          </div>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Built a full stack app to analyze images and identify objects using a pre-trained ResNet-50 model.</li>
            <li>Implemented image upload functionality and processed predictions via Flask APIs.</li>
            <li>Displayed top 5 object predictions in a user-friendly interface using React.</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 border-b-2 pb-2 mb-4">
          Skills
        </h2>
        <ul className="list-disc pl-5 text-gray-600">
          <li>JavaScript, TypeScript, Python, SQL</li>
          <li>React, Next.js, Node.js, Flask</li>
          <li>RESTful API design, GraphQL, AWS</li>
        </ul>
      </section>
    </div>
  );
};

export default Preview;
