/* eslint-disable react/prop-types */

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="pl-4  mx-auto md:mb-6 border-l-4 border-blue-500 ">
      <span className="text-sm text-gray-600 uppercase dark:text-gray-400">
        {subtitle ? subtitle : "This is Subtitle"}
      </span>
      <h2 className="text-4xl font-bold text-[#FF6154] md:my-6 uppercase">
        {title ? title : "This is Title"}
      </h2>
    </div>
  );
};

export default SectionTitle;
