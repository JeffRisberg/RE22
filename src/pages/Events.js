import React, {useEffect, useMemo, useState} from 'react';
import axios from "axios";
import Table from "../components/Table";

function Events() {

  const columns = useMemo(
    () => [
      {
        Header: "Events",
        columns: [
          {
            Header: "Text",
            accessor: "text"
          },
          {
            Header: "Description",
            accessor: "description"
          },
          {
            Header: "Time",
            accessor: "time"
          }
        ]
      }
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:3000/api/events");
      setData(result.data.data);
    })();
  }, []);

  return (
    <div>
      <Table columns={columns} data={data}/>
    </div>
  )
}

export default Events;

