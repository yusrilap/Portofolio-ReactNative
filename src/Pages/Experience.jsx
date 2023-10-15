import React from "react";
import Work from "../Components/Work";
import { workDetails } from "../Details";

const Experience = () => {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-light-heading text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
};

export default Experience;
