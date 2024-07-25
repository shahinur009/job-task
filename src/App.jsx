import { useEffect, useState } from "react";

function App() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setInfo(data || []);
      })
      .catch(error => console.error('Error from data fetching:', error));
  }, []);

  return (
    <>
      <div className="flex justify-center flex-wrap gap-5">
        {info.map(mess => (
          <div key={mess.email} className="card bg-base-100 w-96 shadow-xl p-5 rounded-md">
            <figure>
              <img className="h-60 w-full rounded-md"
                src={mess.picture}
                alt="photo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-semibold">Name:{mess.name}</h2>
              <p className="text-[14px]"><span className="text-xl font-semibold">Message:</span>{mess.message}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Action</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
