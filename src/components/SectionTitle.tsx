const SectionTitle = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="text-white border-2 border-white w-fit p-2 px-4 rounded-full mb-8 mx-auto grid grid-cols-[auto_0fr]
                    gap-1 items-end transition-[grid-template-columns] duration-200 hover:grid-cols-[auto_1fr]"
    >
      <h2 className="text-2xl font-semibold whitespace-nowrap">
        {title}
      </h2>

      <span className="overflow-hidden whitespace-nowrap pb-0.5">
        - {description}
      </span>
    </div>
  );
}

export default SectionTitle;