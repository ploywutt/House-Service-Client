function PageHeader(props) {
  return (
    <header
      id="title-bg"
      className="flex justify-center items-center h-24 py-6 mb-7 bg-blue-600 dark:bg-gray-800"
    >
      <h1 className="text-white">{props.title}</h1>
    </header>
  );
}

export default PageHeader;
