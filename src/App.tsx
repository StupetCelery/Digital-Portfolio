// App.tsx
import React, { useState, useEffect } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  details: (string | JSX.Element)[];
  image?: string | null;
  video?: string | null;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Data Compression",
    description: "Used AI to compress X-ray images using nonlinear transforms.",
    details: [
      "In this project, my group and I compressed X-ray images using artificial neural networks. Traditionally, image compression is done using linear transforms, but in this project we investigated using nonlinear transforms instead.",
      <div key="space1" className="my-4" />,
      "The graphic depicts an X-ray image taken from the NIH (National Institutes of Health) dataset and its compressed counterpart after being put through our model.",
      <div key="space2" className="my-4" />,
      "The full report on compressing X-ray images using neural networks can be found ",
      <a
        href="https://drive.google.com/file/d/1CZH2QiFY6BwDOQSgkVT29yftrc1Kfwa7/view"
        target="_blank"
        className="text-blue-500"
        key="link"
      >
        here
      </a>,
      ".",
    ],
    image: "images/model_compressed_1.jpg",
  },
  {
    id: 2,
    title: "Minimum-Area Triangulation",
    description:
      "Computed the minimum-area triangulation between two 3D contours.",
    details: [
      "In this project I implemented an algorithm in Python that computes the minimum-area triangulation between two contours in 3D.",
      <div key="space1" className="my-4" />,
      "This algorithm has useful applications in medical imaging like CT scans or MRIs, where slices of the human body can be generated and need to be reconstructed.",
      <div key="space2" className="my-4" />,
      "Depicted below is a set of slices generated from the medical imaging of a human femur, along with the image after reconstruction using my algorithm. The code to achieve this can be found on my ",
      <a
        href="https://github.com/StupetCelery/CMPE-365-Projects/tree/main/Assignment%203"
        target="_blank"
        className="text-blue-500"
        key="link"
      >
        GitHub
      </a>,
      ".",
    ],
    image: "images/femurSlices.png",
  },
  {
    id: 3,
    title: "Lunar Lander",
    description: 'Implemented a classic arcade game "Lunar Lander".',
    details: [
      "In this project I implemented a classic arcade game “Lunar Lander”  in C++ using GLFW (Graphics Library Framework), a library for creating windows and managing input from devices like keyboards and mice.",
      <div key="space1" className="my-4" />,
      "I created the environment, switched the camera when the lander approached landing, and kept track of all properties of the lander like speed and fuel.",
      <div key="space2" className="my-4" />,
      "I also made success criteria that takes into account the lander’s horizontal and vertical speed at landing.",
      <div key="space3" className="my-4" />,
      "The code to play this game can be found on my ",
      <a
        href="https://github.com/StupetCelery/CMPE-454-Projects/tree/main/Lunar%20Lander"
        target="_blank"
        className="text-blue-500"
        key="link"
      >
        GitHub
      </a>,
      ".",
    ],
    video: "videos/LunarLander.mp4",
  },
  {
    id: 4,
    title: "Wordle",
    description: 'Implemented the popular game "Wordle".',
    details: [
      "In this project I used Java to implement the popular game Wordle. In Wordle you try to guess a 5-letter word using the clues you receive after each guess.",
      <div key="space1" className="my-4" />,
      "If a guessed letter is in the word but in the wrong spot it will come up yellow. If a guessed letter is in the word and in the right spot it comes up green.",
      <div key="space2" className="my-4" />,
      "Below is a sample playthrough of the game. The code to play this game can be found on my ",
      <a
        href="https://github.com/StupetCelery/CMPE-212-Projects/tree/main/Wordle"
        target="_blank"
        className="text-blue-500"
        key="link"
      >
        GitHub
      </a>,
      ".",
    ],
    video: "videos/Wordle.mp4",
  },
  {
    id: 5,
    title: "Triangle Strips",
    description: "Built triangle strips from a triangle mesh.",
    details: [
      "For this project I wrote Python code that builds triangle strips from a triangle mesh. A triangle strip is a sequence of triangles, such that each triangle in the sequence shares an edge with the next triangle in the sequence.",
      <div key="space1" className="my-4" />,
      "These triangle strips are created using a greedy algorithm, an algorithm which builds a solution piece by piece, always choosing the piece that offers the most immediate benefit.",
      <div key="space2" className="my-4" />,
      "It is much more efficient to render a triangle mesh as a set of triangle strips than as individual triangles.",
      <div key="space3" className="my-4" />,
      "The picture below is the output from my code, which can be found on my ",
      <a
        href="https://github.com/StupetCelery/CMPE-365-Projects/tree/main/Assignment%202"
        target="_blank"
        className="text-blue-500"
        key="link"
      >
        GitHub
      </a>,
      ".",
    ],
    image: "images/TriangleStrips.png",
  },
  {
    id: 6,
    title: "Platformer Game",
    description: "Created a simple platformer game.",
    details: [
      "This platformer game was a personal project I worked on, where you enter doors. Within those doors a message can be displayed.",
      <div key="space1" className="my-4" />,
      "I incorporated physics and gravity into the game, as well as animated the character to look like she is walking as she moves.",
      <div key="space2" className="my-4" />,
      "The video below is a demo of the game being played.",
    ],
    video: "videos/Platformer.mp4",
  },
  {
    id: 7,
    title: "Convex Hull",
    description: "Constructed the convex of a set of 2D points",
    details: [
      "In this project I implemented code in Python that builds the convex hull of a set of 2D points.",
      <div key="space1" className="my-4" />,
      "A convex hull is the smallest convex polygon (polygon where all interior angles are less than 180 degrees) that can enclose a set of points in a 2D plane.",
      <div key="space2" className="my-4" />,
      "The convex hull algorithm is implemented using a recursive divide-and-conquer approach.",
      <div key="space3" className="my-4" />,
      "The recording is my algorithm in action. The code to achieve this can be found on my ",
      <a
        href="https://github.com/StupetCelery/CMPE-365-Projects/tree/main/Assignment%201"
        target="_blank"
        className="text-blue-500"
        key="link"
      >
        GitHub
      </a>,
      ".",
    ],
    video: "videos/ConvexHull.mp4",
  },
  {
    id: 8,
    title: "Abelian Sandpile",
    description: "Modeled an Abelian Sandpile.",
    details: [
      "In this project I implemented code in Java that models an Abelian Sandpile.",
      <div key="space1" className="my-4" />,
      'An Abelian Sandpile is a mathematical model that uses a 2D grid. "Grains of sand" are added to cells in the grid until a cell reaches 4 grains of sand. At that point, that cell "topples" and is emptied of its sand, and each cell adjacent to it adds 1 grain of sand. Then, if any adjacent cell now contains 4 grains of sand, they will topple and the process continues.',
      <div key="space2" className="my-4" />,
      "Abelian Sandpiles are used to model complex systems in nature, like earthquakes or traffic flow, which can follow a similar cascading pattern.",
      <div key="space3" className="my-4" />,
      "In this project, 256 “grains of sand” were added to the middle cell. After all the sand has been added, the pictures below show the final product. The code to create this model can be found on my ",
      <a
        href="https://github.com/StupetCelery/CMPE-212-Projects/tree/main/Abelian%20Sandpile"
        target="_blank"
        className="text-blue-500"
        key="link"
      >
        GitHub
      </a>,
      ".",
    ],
    image: "images/Abelian-Sandpile.png",
  },
];

const App: React.FC = () => {
  // State variable for the expanded project
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [orderedProjects, setOrderedProjects] = useState(projects);

  // Expand the project if it is collapsed and collapse the project if it is expanded
  const handleToggle = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  // Determines column count based on screen width
  const getColumnCount = (): number => {
    if (window.innerWidth >= 1280) return 4; // xl
    if (window.innerWidth >= 1024) return 3; // lg
    if (window.innerWidth >= 768) return 2;  // md
    return 1;
  };

  useEffect(() => {
    const handleResize = () => {
      reorderProjects();
    };

    window.addEventListener("resize", handleResize);

    reorderProjects(); // initial call

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [expandedProject]);

  const reorderProjects = () => {
    if (expandedProject === null) {
      setOrderedProjects(projects);
      return;
    }

    const colCount = getColumnCount();
    const index = projects.findIndex((p) => p.id === expandedProject);
    const rowStart = index - (index % colCount);

    const newOrder = [...projects];
    const [expandedItem] = newOrder.splice(index, 1);
    newOrder.splice(rowStart, 0, expandedItem);
    setOrderedProjects(newOrder);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Drew Colangelo</h1>
        <p className="text-xl text-gray-600 mt-2">
          Queen's University Applied Mathematics and Engineering Graduate
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8 text-left">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Location</h3>
            <p className="text-gray-600 mt-1">Niagara Falls, ON</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Email</h3>
            <p className="text-gray-600 mt-1">drew.colangelo@gmail.com</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">LinkedIn</h3>
            <p className="text-blue-500 mt-1">
              <a
                href="https://www.linkedin.com/in/drew-colangelo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/drew-colangelo
              </a>
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">
              Queen's Transcript
            </h3>
            <p className="text-blue-500 mt-1">
              <a
                href="https://drive.google.com/file/d/18sHe2-Gy6Vdhr-OmL-aJIzkSatVLhXr2/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                DrewColangeloTranscript.pdf
              </a>
            </p>
          </div>
        </div>
      </header>
      <main>
        {/* Define number of grid columns responsively for different screen sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {orderedProjects.map((project) => (
            <div
              key={project.id}
              // Responsively expand project to span all columns when clicked
              // Move expanded project to the top of the screen until it is collapsed
              className={`bg-white p-6 rounded-lg shadow-md
              ${
                expandedProject === project.id
                  ? "col-span-full"
                  : ""
              }`}
            >
              <h2 className="text-2xl font-semibold text-gray-800">
                {project.title}
              </h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <button
                // Handle button press
                onClick={() => handleToggle(project.id)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                {/* Change the button details based on whether the project is expanded or collapsed */}
                {expandedProject === project.id
                  ? "Hide Details"
                  : "Show Details"}
              </button>
              {/* Display the project details if the project is expanded */}
              {expandedProject === project.id && (
                <div className="mt-4 text-gray-700">
                  <p className="whitespace-pre-line mb-6">
                    {" "}
                    {project.details.map((part, index) => (
                      <span key={index}>{part}</span>
                    ))}
                  </p>
                  {(project.image || project.video) && (
                    <div className="flex justify-center mt-4">
                      {project.video ? (
                        <video
                          src={project.video}
                          controls
                          muted
                          loop
                          autoPlay
                          playsInline
                          className="w-full max-w-xl aspect-video rounded-xl"
                        />
                      ) : (
                        <img
                          src={project.image!}
                          alt={project.title}
                          className="w-full max-w-xl object-contain rounded-xl"
                        />
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
