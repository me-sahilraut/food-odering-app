import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="text-lg font-bold">{title}</h3>

      {isVisible ? (
        <button
          className=""
          onClick={() => {
            setIsVisible(false);
          }}
        >
          hide
        </button>
      ) : (
        <button
          className=""
          onClick={() => {
            setIsVisible(true);
          }}
        >
          show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Glocessary = () => {
  const [sectionConfig, setSectionConfig] = useState({
    showAbout: false,
    showVariety: false,
  });
  return (
    <div className="">
      <h1 className="text-2xl font-bold">Glocessary Page</h1>
      <Section
        title={"About Me"}
        description={
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:"
        }
        isVisible={sectionConfig.showAbout}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: true,
            showVariety: false,
          })
        }
      />

      <Section
        title={"Variety of Glocessary"}
        description={
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:"
        }
        isVisible={sectionConfig.showVariety}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: false,
            showVariety: true,
          })
        }
      />
    </div>
  );
};

export default Glocessary;
