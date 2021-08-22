const SideTitle = ({ children, className }) => {
  return (
    <div data-component="side-title">
      <span className="absolute hidden xl:block text-8xl font-extrabold text-gray-400 left-side-title top-35vh origin-top transform -rotate-90 -translate-x-1/2 scale-125 z-0 text-sideways select-none">
        {children}
      </span>
    </div>
  );
};

export default SideTitle;