

const Notice = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title ">Notice!</h2>
          <div className="flex flex-col w-full border-opacity-50">
            <div className="divider"></div>
            // group button
            <div className="btn-group">
              <button className="btn">Admission</button>
              <button className="btn">Administration</button>
              <button className="btn">Dept</button>
            </div>
          </div>
          <div className="flex shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-2xl  dark:text-gray-700 divide-gray-700">
            <div className="px-4 flex items-center text-xs uppercase tracking-wide dark:text-gray-400 dark:border-gray-700">
              <div className="border dark:text-gray-700">
                <div className="bg-primary dark:text-white">
                  <h3>January</h3>
                </div>
                <div className="dark:text-gray-700">
                  <h4 >Wednesday</h4>
                  <h2 className="bold">10</h2>
                  <h4>2023</h4>
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-4 border-l-8 dark:border-violet-400">
              <span className="text-2xl">pdf notice</span>
              <span className="text-xs dark:text-gray-400">
                Vitae nulla eligendi dignissimos culpa doloribus.
              </span>
            </div>
          </div>

          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
}

export default Notice